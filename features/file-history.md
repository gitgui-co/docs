# File History

Track the complete history of any file across all commits.

## Opening File History

### From Staging Panel
1. Right-click any file (staged or unstaged)
2. Select **File history**

### From Commit Details
1. Click a commit in the graph
2. Right-click any file in the list
3. Select **File history**

## The File History Panel

Shows all commits that modified the selected file:

```
┌─────────────────────────────────────┐
│ 📄 src/components/Login.tsx         │
├─────────────────────────────────────┤
│ feat: add remember me option        │
│ John Doe • 2 hours ago • a1b2c3d    │
├─────────────────────────────────────┤
│ fix: resolve validation bug         │
│ Jane Smith • Yesterday • e4f5g6h    │
├─────────────────────────────────────┤
│ feat: create login component        │
│ John Doe • Last week • i7j8k9l      │
└─────────────────────────────────────┘
```

## Viewing Changes

Click any commit in the history to see:
- What changed in that specific commit
- The diff for just that file
- Before/after comparison

## Use Cases

### Understanding Code Evolution
See how a function changed over time:
1. Open file history
2. Scroll through commits
3. Click each to see changes

### Finding Bug Introduction
Identify when a bug was introduced:
1. Open history for buggy file
2. Look for suspicious changes
3. Find the problematic commit

### Tracking Authorship
See who changed what and when:
- Each commit shows author
- Useful for questions and reviews

### Recovering Old Code
Find how code looked before:
1. Find relevant commit
2. View the file at that point
3. Copy what you need

## Navigation

### Scrolling
- Scroll through commit list
- Older commits at bottom

### Clicking
- Click commit to view changes
- Diff shows that commit's changes

### Closing
- Click X button
- Press Escape

## Tips

### Check the Right File
Ensure you're viewing history for the correct path. Renamed files may have separate histories.

### Read Commit Messages
Good messages explain why changes were made.

### Check Related Files
If history doesn't explain everything, check files changed in the same commits.

## Limitations

### Renamed Files
History may not follow renames automatically. You might see history only from the rename forward.

### Deleted Files
Cannot open history for deleted files from UI. Use terminal:
```bash
git log --all -- path/to/deleted/file
```

### Large Histories
Files with many commits may take a moment to load.

## Related

- [File History Guide](/guide/file-history) — Detailed usage
- [Commit Graph](/features/commit-graph) — Repository history
- [Diff Viewer](/features/diff-viewer) — Viewing changes
