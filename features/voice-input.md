# Voice Input

Dictate commit messages using Gitux's built-in, offline AI.

## Overview

Gitux includes OpenAI's Whisper model running locally on your machine:

| Feature | Details |
|---------|---------|
| **Privacy** | Audio never leaves your computer |
| **Cost** | Free, no API keys needed |
| **Internet** | Not required (after first setup) |
| **Speed** | ~3 seconds for 10s of audio |

## How It Works

1. Click the microphone button (or `Alt+M`)
2. Speak your commit message
3. Click again to stop
4. Text appears in the commit input

## First-Time Setup

On first use, Gitux downloads the Whisper model:

1. Click the microphone button
2. "Loading Voice Model" notification appears
3. Wait ~30 seconds for download (~40MB)
4. "Model Ready" confirms success

The model is cached locally — subsequent uses are instant.

## Using Voice Input

### Start Recording
- Click 🎤 button in commit area
- Or press `Alt+M`

### While Recording
- Red indicator pulses
- Countdown shows time remaining
- Maximum 30 seconds

### Stop Recording
- Click 🎤 again
- Or press `Alt+M`
- Or wait for timeout

### After Recording
- "Processing..." appears briefly
- Transcribed text added to message
- Edit if needed before committing

## Combining with Prefixes

Voice input works seamlessly with commit prefixes:

```
1. Press Alt+1 (adds "feat: ")
2. Press Alt+M (start recording)
3. Say: "Add user profile page"
4. Press Alt+M (stop)
5. Result: "feat: Add user profile page"
```

## Tips for Best Results

### Speak Clearly
- Normal conversational pace
- Enunciate technical terms
- Brief pauses between sentences

### Good Environment
- Minimize background noise
- Use a decent microphone
- Avoid echo-prone rooms

### Natural Language
Speak your message naturally:
- ✅ "Fix the bug where users can't log out"
- ✅ "Add validation to the signup form"
- ❌ "Fix colon bug colon users can't log out"

## Privacy Details

### What Happens to Your Audio
1. Captured by your microphone
2. Processed in memory by Whisper
3. Converted to text
4. Audio immediately discarded

### What's NOT Sent Anywhere
- ❌ Audio recordings
- ❌ Transcribed text
- ❌ Any telemetry

### No Cloud Services
Gitux doesn't use:
- Google Speech API
- Amazon Transcribe
- OpenAI API
- Any external service

## Technical Specs

| Spec | Value |
|------|-------|
| Model | whisper-tiny |
| Size | ~40MB |
| Load time | ~2 seconds |
| Transcription | ~3s for 10s audio |
| Max recording | 30 seconds |
| Sample rate | 16kHz |

## Troubleshooting

### "Microphone Error"
- Check browser/app permissions
- Verify microphone is connected
- Try a different microphone

### "No Speech Detected"
- Speak louder/closer to mic
- Check mic isn't muted
- Reduce background noise

### Model Won't Load
- Check internet (first time only)
- Ensure ~100MB free space
- Restart Gitux

### Poor Accuracy
- Speak more slowly
- Reduce background noise
- Try a better microphone

## Keyboard Shortcut

| Shortcut | Action |
|----------|--------|
| `Alt+M` | Toggle voice recording |

## Related

- [Voice Commands Guide](/guide/voice-commands) — Detailed usage
- [Staging Panel](/features/staging-panel) — Commit workflow
- [Keyboard Shortcuts](/features/keyboard-shortcuts) — All shortcuts
