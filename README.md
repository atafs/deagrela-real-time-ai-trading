# deagrela-real-time-ai-trading

## Video Conversion

To convert the demo video from `.mov` to `.mp4` for web compatibility (e.g., for the GitHub Pages demo), use the following FFmpeg command:

```bash
ffmpeg -i demo_1-0-0_2025-06-10.mov -vcodec h264 -acodec aac demo_1-0-0_2025-06-10.mp4
```

- Ensure FFmpeg is installed (e.g., via `brew install ffmpeg` on macOS or `sudo apt install ffmpeg` on Ubuntu).
- This command converts the `.mov` file to `.mp4` using H.264 video and AAC audio codecs, which are widely supported by web browsers.

## Poster Image Generation

To generate a poster image (thumbnail) for the demo video, use the following FFmpeg command:

```bash
ffmpeg -i demos/demo_1-0-0_2025-06-10.mp4 -vframes 1 -q:v 2 demos/demo_1-0-0_2025-06-10_poster.jpg
```

- This command extracts a single frame from the video and saves it as a JPEG image in the `demos/` folder.
- Ensure the video file is in the `demos/` folder before running the command.
