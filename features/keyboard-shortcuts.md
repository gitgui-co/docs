# Keyboard Shortcuts

Every action in Gitux has a keyboard shortcut for maximum productivity.

## Quick Reference

Press `Ctrl+/` anytime to see all shortcuts in Gitux.

## File Operations

| Shortcut | Action |
|----------|--------|
| `Ctrl+O` | Open repository |
| `Alt+O` | Recent repositories |
| `Ctrl+R` | Refresh |

## Git Operations

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Stage all unstaged files |
| `Ctrl+Enter` | Commit (in message input) |
| `Ctrl+P` | Push to remote |
| `Ctrl+Shift+P` | Pull from remote |
| `Alt+M` | Toggle voice input |

## Commit Prefixes

| Shortcut | Prefix |
|----------|--------|
| `Alt+1` | `feat:` |
| `Alt+2` | `fix:` |
| `Alt+3` | `enh:` |
| `Alt+4` | `docs:` |

## Navigation

| Shortcut | Action |
|----------|--------|
| `Alt+C` | Focus commit message |
| `Escape` | Close modal/panel |

## View Controls

| Shortcut | Action |
|----------|--------|
| `Ctrl++` | Zoom in |
| `Ctrl+-` | Zoom out |
| `Ctrl+0` | Reset zoom |
| `F11` | Toggle fullscreen |
| `Ctrl+Shift+I` | Developer tools |

## Menu Access

| Shortcut | Menu |
|----------|------|
| `Alt+F` | File |
| `Alt+V` | View |
| `Alt+W` | Window |
| `Alt+H` | Help |

## Help

| Shortcut | Action |
|----------|--------|
| `Ctrl+/` | Show shortcuts panel |

## Common Workflows

### Quick Commit
```
Ctrl+S       Stage all
Alt+1        Add feat: prefix
[type]       Write message
Ctrl+Enter   Commit
Ctrl+P       Push
```

### Voice Commit
```
Ctrl+S       Stage all
Alt+2        Add fix: prefix
Alt+M        Start recording
[speak]      Dictate message
Alt+M        Stop recording
Ctrl+Enter   Commit
```

### Switch Repos
```
Alt+O        Open recent repos
[click]      Select repo
```

## Platform Notes

### macOS
Replace `Ctrl` with `Cmd`:
- `Cmd+O` — Open
- `Cmd+S` — Stage all
- `Cmd+P` — Push

`Alt` shortcuts stay the same.

### Linux
All shortcuts work as documented. Some desktop environments may intercept certain combinations.

## Printable Cheat Sheet

```
╔═══════════════════════════════════════════╗
║         GITUX KEYBOARD SHORTCUTS         ║
╠═══════════════════════════════════════════╣
║ FILES                                     ║
║   Ctrl+O ........ Open repository         ║
║   Alt+O ......... Recent repositories     ║
║   Ctrl+R ........ Refresh                 ║
╠═══════════════════════════════════════════╣
║ GIT                                       ║
║   Ctrl+S ........ Stage all               ║
║   Ctrl+Enter .... Commit                  ║
║   Ctrl+P ........ Push                    ║
║   Ctrl+Shift+P .. Pull                    ║
╠═══════════════════════════════════════════╣
║ PREFIXES                                  ║
║   Alt+1 ......... feat:                   ║
║   Alt+2 ......... fix:                    ║
║   Alt+3 ......... enh:                    ║
║   Alt+4 ......... docs:                   ║
╠═══════════════════════════════════════════╣
║ OTHER                                     ║
║   Alt+C ......... Focus commit message    ║
║   Alt+M ......... Voice input             ║
║   Escape ........ Close panel             ║
║   Ctrl+/ ........ Show shortcuts          ║
╚═══════════════════════════════════════════╝
```

## Related

- [Keyboard Shortcuts Guide](/guide/keyboard-shortcuts) — Learning tips
- [Staging Panel](/features/staging-panel) — Commit workflow
- [Voice Input](/features/voice-input) — Dictate messages
