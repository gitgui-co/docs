# Viewing Diffs

Learn how to view and understand file changes in Gitux.

![Viewing Diffs](/screenshots/Screenshot%20-%20diff%20view.png)

## Opening the Diff Viewer

### From Staging Panel
Click any file in the **Unstaged** or **Staged** sections to see its changes.

### From Commit Details
1. Click a commit in the graph
2. Click any file in the changed files list

## Diff View Modes

Gitux offers two ways to view diffs:

### Unified View
Shows changes in a single column with additions and deletions inline.

```diff
- old line that was removed
+ new line that was added
  unchanged context line
```

- **Green (+)** — Added lines
- **Red (-)** — Removed lines
- **Gray** — Unchanged context

### Split View
Shows the original file on the left and modified file on the right, side by side.

| Left (Original) | Right (Modified) |
|-----------------|------------------|
| Old content | New content |
| Removed lines highlighted | Added lines highlighted |

Toggle between views using the **Unified** / **Split** buttons in the diff header.

## Diff Features

### Line Numbers
Both views show line numbers for easy reference:
- Unified: Old line number | New line number
- Split: Each side has its own line numbers

### Syntax Highlighting
Code is syntax-highlighted based on file type for easier reading.

### Minimap
A minimap on the side shows:
- Overview of the entire file
- Red marks for deletions
- Green marks for additions
- Click to jump to that section

### Scroll Sync (Split View)
In split view, scrolling is synchronized by default:
- Both sides scroll together
- Click **Sync/Free** to toggle independent scrolling

## Understanding Changes

### Hunk Headers
Diff sections start with hunk headers showing line ranges:
```
@@ -10,5 +10,7 @@
```
This means: starting at line 10, showing 5 old lines and 7 new lines.

### File Status

| Status | Meaning |
|--------|---------|
| **Modified** | File content changed |
| **Added** | New file created |
| **Deleted** | File removed |
| **Renamed** | File moved or renamed |

### Binary Files
Binary files (images, etc.) show "Binary file" instead of a diff.

## Actions in Diff Viewer

### Stage/Unstage
Click **Stage File** or **Unstage File** to change the file's staging status directly from the diff viewer.

### Close
- Click the **X** button
- Press `Escape`

## Viewing Historical Diffs

### From Commit Details
1. Click any commit in the graph
2. The file list shows all changed files
3. Click a file to see what changed in that specific commit

### File History
Right-click a file and select **File history** to see all commits that touched that file.

## Tips for Reading Diffs

### Focus on Intent
- What was the developer trying to accomplish?
- Do the changes match the commit message?

### Check Context
- Look at surrounding unchanged lines
- Understand where in the file changes occur

### Watch for Patterns
- Renamed variables appear as many small changes
- Refactors may move code (deletions in one place, additions in another)

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Escape` | Close diff viewer |
| Click file | Open diff for that file |

## Next Steps

- [Keyboard Shortcuts](/guide/keyboard-shortcuts) — Master all shortcuts
- [File History](/guide/file-history) — Track changes over time
