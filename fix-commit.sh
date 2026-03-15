#!/bin/bash
# Run this script from your system Terminal (outside Cursor) to remove Cursor co-author from the commit

cd /Users/harshakolla/Full-time/Catalystappliedai/Webite

# Amend commit with clean message (no co-author)
git commit --amend -m "Initial commit: Catalyst Applied AI website"

# Force push to update GitHub
git push --force origin main

echo "Done! Refresh GitHub to see the updated commit with only your name."
