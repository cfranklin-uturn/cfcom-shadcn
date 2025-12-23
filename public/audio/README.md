# Audio Files Directory

This directory contains the music files for the music page.

## File Organization
- All audio files should be in MP3 format
- Use descriptive filenames that match the track titles in the music page
- Example filenames:
  - `midnight-reflection.mp3`
  - `digital-dreams.mp3` 
  - `coffee-shop-conversations.mp3`
  - `neon-nights.mp3`

## Adding New Tracks
1. Add your MP3 file to this directory
2. Update the `tracks` array in `app/music/page.tsx` with:
   - Unique ID
   - Track title
   - File path (e.g., "/audio/your-track.mp3")
   - Duration
   - Description

## Audio Specifications
- Format: MP3
- Quality: Recommended 128kbps or higher
- File size: Keep under 10MB per track for web performance
- Sample rate: 44.1kHz standard

## Usage
The AudioPlayer component will automatically handle these files when referenced in the tracks array.