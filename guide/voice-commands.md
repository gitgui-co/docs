# Voice Commands

Dictate your commit messages using GitGUI's built-in voice recognition.

## Overview

GitGUI includes a local Whisper AI model for speech-to-text. This means:

- ✅ **Completely offline** — No internet required after initial setup
- ✅ **Private** — Audio never leaves your computer
- ✅ **Free** — No API keys or subscriptions
- ✅ **Fast** — Transcription takes just seconds

## First-Time Setup

The first time you use voice input:

1. Click the **microphone button** or press `Alt+M`
2. GitGUI downloads the Whisper model (~40MB)
3. Wait for "Model Ready" notification
4. The model is cached for future use

::: info One-Time Download
The AI model only downloads once. After that, voice input works instantly, even offline.
:::

## Using Voice Input

### Start Recording
- Click the **microphone button** in the commit area
- Or press `Alt+M`

### While Recording
- A red indicator shows recording is active
- A countdown shows remaining time (max 30 seconds)
- Speak clearly at a normal pace

### Stop Recording
- Click the microphone button again
- Or press `Alt+M`
- Or wait for the 30-second limit

### After Recording
1. "Processing..." appears while transcribing
2. Transcribed text is added to your commit message
3. Edit the text if needed before committing

## Tips for Better Recognition

### Speak Clearly
- Normal conversational pace
- Pronounce technical terms carefully
- Pause briefly between sentences

### Environment
- Minimize background noise
- Use a decent microphone
- Avoid echo-prone rooms

### Message Structure
Speak your commit message naturally:
> "Add user authentication with JWT tokens"

> "Fix the bug where users couldn't log out on mobile"

> "Update documentation for the API endpoints"

## Combining with Prefixes

Voice input works great with commit prefixes:

1. Press `Alt+1` to add `feat:` prefix
2. Press `Alt+M` to start recording
3. Say: "Add shopping cart functionality"
4. Result: `feat: Add shopping cart functionality`

The prefix is preserved, and your voice input is appended.

## Recording Limits

| Limit | Value |
|-------|-------|
| Maximum duration | 30 seconds |
| Minimum duration | ~1 second |
| Audio format | Captured at 16kHz |

30 seconds is plenty for most commit messages. If you need more, record in multiple segments.

## Troubleshooting

### "Microphone Error"
- Check that your browser/app has microphone permissions
- Ensure your microphone is connected and working
- Try a different microphone

### "No Speech Detected"
- Speak louder or closer to the microphone
- Check that your microphone is not muted
- Reduce background noise

### Model Won't Load
- Check your internet connection (first time only)
- Ensure you have ~100MB free disk space
- Restart GitGUI and try again

### Poor Transcription Quality
- Speak more slowly and clearly
- Reduce background noise
- Try a better microphone

## Privacy & Security

### Local Processing
The Whisper model runs entirely on your CPU. Your audio is:
- Processed in memory
- Never saved to disk
- Never transmitted anywhere

### No Cloud Services
Unlike other voice tools, GitGUI doesn't use:
- ❌ Google Speech API
- ❌ Amazon Transcribe
- ❌ OpenAI Whisper API
- ❌ Any cloud service

Everything happens on your machine.

## Technical Details

### Model
GitGUI uses `whisper-tiny` optimized for:
- Fast loading (~2 seconds)
- Quick transcription (~3 seconds for 10s audio)
- Small size (~40MB)

### Supported Languages
The model works best with English but supports multiple languages. Accuracy varies by language.

### System Requirements
- Any modern CPU (no GPU required)
- ~100MB disk space for model
- Working microphone

## Keyboard Reference

| Shortcut | Action |
|----------|--------|
| `Alt+M` | Toggle voice recording |

## Workflow Example

```
1. Stage your files (Ctrl+S)
2. Add prefix (Alt+2 for fix:)
3. Start recording (Alt+M)
4. Say: "Resolve the timeout issue on slow connections"
5. Stop recording (Alt+M)
6. Review: "fix: Resolve the timeout issue on slow connections"
7. Commit (Ctrl+Enter)
```

## Next Steps

- [Stashing Changes](/guide/stashing) — Save work temporarily
- [File History](/guide/file-history) — Track file changes over time
