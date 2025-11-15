#!/usr/bin/env python3
"""
Extract all audio requirements from TypeScript reading lesson files.
Generates a complete audio_config.py with all required audio files.
"""

import re
from pathlib import Path
from collections import defaultdict

# Read all audio file paths from reading lessons
audio_files = set()
reading_dir = Path("data/reading")

for ts_file in reading_dir.glob("*.ts"):
    content = ts_file.read_text()
    # Extract audio file paths
    matches = re.findall(r"audioFile:\s*['\"]([^'\"]+)['\"]", content)
    audio_files.update(matches)

# Organize by category
by_category = defaultdict(list)

for audio_path in sorted(audio_files):
    # Remove leading /audio/
    path = audio_path.replace("/audio/", "")

    # Determine category and subdirectory
    if path.startswith("characters/"):
        category = "characters"
        filename = path.replace("characters/", "")
        subdirectory = None
    elif path.startswith("vowels/syllables/"):
        category = "vowel-syllables"
        filename = path.replace("vowels/syllables/", "")
        subdirectory = "syllables"
    elif path.startswith("vowels/placement-"):
        category = "vowel-placement"
        filename = path.replace("vowels/", "")
        subdirectory = None
    elif path.startswith("vowels/endings/"):
        category = "ending-consonants"
        filename = path.replace("vowels/endings/", "")
        subdirectory = "endings"
    elif path.startswith("vowels/"):
        category = "vowels"
        filename = path.replace("vowels/", "")
        subdirectory = None
    else:
        category = "other"
        filename = path
        subdirectory = None

    by_category[category].append((filename, subdirectory))

# Print summary
print(f"Total audio files: {len(audio_files)}")
print("\nBy category:")
for cat, files in sorted(by_category.items()):
    print(f"  {cat}: {len(files)}")

print(f"\nSaved to: /tmp/audio_files_by_category.txt")

# Save organized list
with open("/tmp/audio_files_by_category.txt", "w") as f:
    for cat, files in sorted(by_category.items()):
        f.write(f"\n{'='*60}\n{cat.upper()} ({len(files)} files)\n{'='*60}\n")
        for filename, subdir in sorted(files):
            if subdir:
                f.write(f"  {subdir}/{filename}\n")
            else:
                f.write(f"  {filename}\n")
