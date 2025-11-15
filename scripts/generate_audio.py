#!/usr/bin/env python3
"""
Unified Thai Audio Generation Script using Vertex AI Gemini 2.5 Flash TTS

This script generates high-quality Thai pronunciation audio using Google's
Gemini 2.5 Flash TTS model with tone-aware prompts. Audio files are automatically
converted to Opus format for efficient web delivery.

Features:
- Uses centralized Python configuration (data/audio_config.py)
- Automatic WAV to Opus conversion with ffmpeg
- Intelligent file detection and skipping
- Progress tracking and statistics
- Rate limiting and error handling
- Category and priority filtering

Requirements:
- google-cloud-texttospeech >= 2.29.0
- pydub
- ffmpeg (system package)

Usage:
    python scripts/generate_audio.py [options]

Options:
    --category <name>       Generate only specific category
    --priority <level>      Generate only specific priority (high, medium, low)
    --force                 Regenerate all files even if they exist
    --voice <name>          Override default voice (see Gemini TTS docs)
    --dry-run              Show what would be generated without generating
    --stats                Show statistics and exit
    --help                 Show this help message

Examples:
    python scripts/generate_audio.py --category characters --priority high
    python scripts/generate_audio.py --stats
    python scripts/generate_audio.py --force --voice Kore
"""

import argparse
import os
import sys
import time
from pathlib import Path
from typing import Optional

# Add project root to path to import audio_config
sys.path.insert(0, str(Path(__file__).parent.parent))

from data.audio_config import (
    ALL_AUDIO_REQUIREMENTS,
    AudioCategory,
    AudioRequirement,
    Priority,
    get_requirements_by_category,
    get_requirements_by_priority,
    get_stats,
)

try:
    from google.cloud import texttospeech
    from pydub import AudioSegment
except ImportError as e:
    print("❌ Error: Missing required package")
    print(f"   {e}")
    print("\nMake sure you've activated the virtual environment and installed dependencies:")
    print("   source venv/bin/activate")
    print("   pip install -r requirements.txt")
    sys.exit(1)

# Configuration
# Get the project root directory (parent of scripts/)
PROJECT_ROOT = Path(__file__).parent.parent
BASE_AUDIO_DIR = PROJECT_ROOT / "public" / "audio"
DELAY_BETWEEN_REQUESTS = 2.0  # 2 seconds between API calls
MAX_RETRIES = 6
RETRY_DELAY_MULTIPLIER = 2
LANGUAGE_CODE = "th-TH"
GEMINI_MODEL = "gemini-2.5-flash-tts"

# Audio conversion settings
OPUS_BITRATE = "64k"  # Good quality for speech, efficient size
OPUS_SAMPLE_RATE = 24000  # Recommended for speech


class AudioGenerator:
    """Handles audio generation and conversion."""

    def __init__(self, dry_run: bool = False, force: bool = False, override_voice: Optional[str] = None):
        self.dry_run = dry_run
        self.force = force
        self.override_voice = override_voice
        if not dry_run:
            print("🔌 Initializing Text-to-Speech client...")
            self.client = texttospeech.TextToSpeechClient()
            print("✅ Client initialized successfully")
        else:
            self.client = None
        self.stats = {"success": 0, "failed": 0, "skipped": 0}

    def get_output_path(self, requirement: AudioRequirement) -> Path:
        """Get full output path for an audio requirement."""
        category_dir = BASE_AUDIO_DIR / requirement.category.value
        if requirement.subdirectory:
            category_dir = category_dir / requirement.subdirectory

        # Convert .wav extension to .opus
        filename = requirement.filename.replace(".wav", ".opus")
        return category_dir / filename

    def file_exists(self, requirement: AudioRequirement) -> bool:
        """Check if audio file already exists and is valid."""
        file_path = self.get_output_path(requirement)
        return file_path.exists() and file_path.stat().st_size > 0

    def ensure_directory(self, file_path: Path) -> None:
        """Ensure the output directory exists."""
        file_path.parent.mkdir(parents=True, exist_ok=True)

    def generate_audio(self, requirement: AudioRequirement) -> bool:
        """Generate audio for a single requirement with retry logic."""
        voice = self.override_voice or requirement.voice
        output_path = self.get_output_path(requirement)

        print(f"🔊 Generating: {requirement.id}")
        print(f"   Text: {requirement.text}")
        print(f"   Voice: {voice}")

        if self.dry_run:
            print(f"   Would save to: {output_path}")
            return True

        for attempt in range(MAX_RETRIES + 1):
            try:
                # Prepare the synthesis request with Gemini TTS
                synthesis_input = texttospeech.SynthesisInput(
                    text=requirement.text,
                    prompt=requirement.instructions
                )

                voice_params = texttospeech.VoiceSelectionParams(
                    language_code=LANGUAGE_CODE,
                    name=voice,
                    model_name=GEMINI_MODEL
                )

                # Request LINEAR16 (WAV) format from API
                audio_config = texttospeech.AudioConfig(
                    audio_encoding=texttospeech.AudioEncoding.LINEAR16,
                    sample_rate_hertz=24000
                )

                # Make the API request
                response = self.client.synthesize_speech(
                    input=synthesis_input,
                    voice=voice_params,
                    audio_config=audio_config
                )

                # Save temporary WAV file
                temp_wav = output_path.with_suffix(".wav.tmp")
                self.ensure_directory(temp_wav)

                with open(temp_wav, "wb") as out:
                    out.write(response.audio_content)

                # Convert to Opus
                self._convert_to_opus(temp_wav, output_path)

                # Clean up temporary file
                temp_wav.unlink()

                print(f"   ✅ Saved: {output_path.relative_to(Path.cwd())}")
                return True

            except Exception as error:
                attempt_num = attempt + 1
                if attempt_num <= MAX_RETRIES:
                    wait_time = DELAY_BETWEEN_REQUESTS * (RETRY_DELAY_MULTIPLIER ** attempt)
                    print(f"   ⚠️ Error: {error}")
                    print(f"   Retrying in {wait_time:.1f}s... (attempt {attempt_num}/{MAX_RETRIES})")
                    time.sleep(wait_time)
                else:
                    print(f"   ❌ Failed after {MAX_RETRIES} retries: {error}")
                    return False

        return False

    def _convert_to_opus(self, wav_path: Path, opus_path: Path) -> None:
        """Convert WAV file to Opus format."""
        try:
            audio = AudioSegment.from_wav(str(wav_path))

            # Export as Opus with optimized settings for speech
            audio.export(
                str(opus_path),
                format="opus",
                codec="libopus",
                bitrate=OPUS_BITRATE,
                parameters=[
                    "-ar", str(OPUS_SAMPLE_RATE),  # Sample rate
                    "-application", "voip",  # Optimized for voice
                ]
            )
        except Exception as e:
            raise Exception(f"Failed to convert to Opus: {e}")

    def process_requirements(self, requirements: list[AudioRequirement]) -> None:
        """Process a list of audio requirements."""
        if not requirements:
            print("✅ No audio files to generate!")
            return

        print(f"🎵 Processing {len(requirements)} audio files...\n")

        if self.dry_run:
            print("🔍 DRY RUN MODE - No files will be generated\n")

        start_time = time.time()

        for i, requirement in enumerate(requirements, 1):
            print(f"[{i}/{len(requirements)}]")

            # Skip existing files unless force flag is set
            if not self.force and self.file_exists(requirement):
                print(f"⏭️  Skipping: {requirement.id} (already exists)")
                print(f"   File: {self.get_output_path(requirement).relative_to(Path.cwd())}")
                self.stats["skipped"] += 1
            else:
                success = self.generate_audio(requirement)
                if success:
                    self.stats["success"] += 1
                else:
                    self.stats["failed"] += 1

                # Rate limiting - sleep between requests
                if i < len(requirements) and not self.dry_run:
                    time.sleep(DELAY_BETWEEN_REQUESTS)

            print()  # Blank line between items

        duration = time.time() - start_time
        self._print_summary(duration)

    def _print_summary(self, duration: float) -> None:
        """Print generation summary."""
        print("=" * 60)
        print("🎵 Audio Generation Complete!")
        print("=" * 60)
        print(f"⏱️  Duration: {duration:.1f}s")
        print(f"✅ Successful: {self.stats['success']}")
        print(f"⏭️  Skipped: {self.stats['skipped']}")
        if self.stats["failed"] > 0:
            print(f"❌ Failed: {self.stats['failed']}")
        print(f"📁 Audio directory: {BASE_AUDIO_DIR}")

        if self.stats["failed"] > 0:
            print("\n💡 Some files failed. Run the script again to retry.")


def print_stats() -> None:
    """Print statistics about audio requirements."""
    stats = get_stats()

    print("\n📊 Audio Generation Statistics\n")
    print(f"Total audio requirements: {stats['total']}")

    print("\nBy category:")
    for category, count in stats["by_category"].items():
        print(f"  {category}: {count}")

    print("\nBy priority:")
    for priority, count in stats["by_priority"].items():
        print(f"  {priority}: {count}")

    # Check existing files
    existing_count = 0
    missing_count = 0

    print("\nFile status:")
    for category in AudioCategory:
        requirements = get_requirements_by_category(category)
        generator = AudioGenerator(dry_run=True)
        existing = sum(1 for req in requirements if generator.file_exists(req))
        missing = len(requirements) - existing
        existing_count += existing
        missing_count += missing

        print(f"  {category.value}: {existing}/{len(requirements)} files exist ({missing} missing)")

    total = stats["total"]
    print(f"\nOverall: {existing_count}/{total} files exist ({missing_count} missing)")
    print(f"Completion: {(existing_count / total * 100):.1f}%")


def parse_args() -> argparse.Namespace:
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description="Generate Thai audio files using Vertex AI Gemini TTS",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s --category characters --priority high
  %(prog)s --stats
  %(prog)s --force --voice Kore
  %(prog)s --dry-run
        """
    )

    parser.add_argument(
        "--category",
        type=str,
        choices=[c.value for c in AudioCategory],
        help="Generate only specific category"
    )

    parser.add_argument(
        "--priority",
        type=str,
        choices=[p.value for p in Priority],
        help="Generate only specific priority level"
    )

    parser.add_argument(
        "--force",
        action="store_true",
        help="Regenerate all files even if they exist"
    )

    parser.add_argument(
        "--voice",
        type=str,
        help="Override default voice (e.g., Kore, Despina)"
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be generated without generating"
    )

    parser.add_argument(
        "--stats",
        action="store_true",
        help="Show statistics and exit"
    )

    return parser.parse_args()


def main() -> None:
    """Main execution function."""
    args = parse_args()

    print("🎵 Unified Thai Audio Generation Script (Vertex AI Gemini TTS)\n")

    if args.stats:
        print_stats()
        return

    # Check for Google Cloud credentials
    if not args.dry_run and not os.getenv("GOOGLE_APPLICATION_CREDENTIALS"):
        print("⚠️  Warning: GOOGLE_APPLICATION_CREDENTIALS not set")
        print("Make sure you have authenticated with gcloud or set credentials")
        print()

    # Filter requirements based on options
    requirements = ALL_AUDIO_REQUIREMENTS.copy()

    if args.category:
        category = AudioCategory(args.category)
        requirements = get_requirements_by_category(category)
        print(f"📁 Filtering by category: {args.category}")

    if args.priority:
        priority = Priority(args.priority)
        requirements = [req for req in requirements if req.priority == priority]
        print(f"🎯 Filtering by priority: {args.priority}")

    # Sort by priority (high first), then by category
    priority_order = {Priority.HIGH: 0, Priority.MEDIUM: 1, Priority.LOW: 2}
    requirements.sort(key=lambda r: (priority_order[r.priority], r.category.value))

    # Initialize generator and process
    generator = AudioGenerator(
        dry_run=args.dry_run,
        force=args.force,
        override_voice=args.voice
    )

    generator.process_requirements(requirements)

    if not args.dry_run:
        print("\n📊 Updated Statistics:")
        print_stats()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⏹️  Audio generation interrupted by user")
        print("Run the script again to continue from where you left off.")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
