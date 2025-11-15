#!/bin/bash
# Convenience wrapper for audio generation script
# Automatically activates venv and runs the Python script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Check if venv exists
if [ ! -d "$PROJECT_ROOT/venv" ]; then
    echo "❌ Virtual environment not found!"
    echo "Run: python3.11 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
    exit 1
fi

# Activate venv and run script
source "$PROJECT_ROOT/venv/bin/activate"
python "$SCRIPT_DIR/generate_audio.py" "$@"
