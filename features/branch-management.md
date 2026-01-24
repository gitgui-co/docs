# Branch Management

Full-featured branch management with visual feedback and drag-and-drop merging.

## The Sidebar

The left sidebar organizes your branches:

```
┌─────────────────────────┐
│ ▼ LOCAL (5)             │
│   ├─ main         [HEAD]│
│   ├─ develop            │
│   └─ feature/           │
│       ├─ login          │
│       └─ dashboard      │
├─────────────────────────┤
│ ▼ REMOTE (8)            │
│   └─ origin/            │
│       ├─ main           │
│       ├─ develop        │
│       └─ feature/...    │
├─────────────────────────┤
│ ▼ STASHES (2)           │
│   ├─ WIP: login work    │
│   └─ temp save          │
└─────────────────────────┘
```

## Branch Actions

### Checkout (Switch)
**Double-click** any local branch to switch to it.

### Highlight
**Single-click** any branch to scroll the commit graph to that branch's latest commit.

### Create Branch
1. Right-click any branch
2. Select **Branch from...**
3. Enter new branch name
4. Gitux creates and switches to it

### Delete Branch
1. Right-click the branch
2. Select **Delete branch**
3. Confirm deletion
4. Optionally delete from remote

::: warning
Cannot delete the branch you're currently on.
:::

## Drag & Drop Merging

The fastest way to merge branches:

1. **Drag** the source branch (with changes you want)
2. **Drop** onto the target branch (where changes should go)
3. Gitux handles the rest

### Visual Feedback
- Hover highlight shows the drop target
- Ring indicator confirms valid drop zone

### What Happens
1. Gitux switches to target branch (if needed)
2. Merges source into target
3. Shows success or conflict notification

## Context Menu

Right-click any branch for options:

### Local Branches
- **Branch from...** — Create new branch
- **Merge into...** — Open merge dialog
- **Delete branch** — Remove the branch

### Remote Branches
- **Delete remote branch** — Remove from server

## Merge Dialog

When using **Merge into...** from context menu:

1. Select the target branch
2. Confirm the merge
3. Handle any conflicts

## Handling Conflicts

When a merge has conflicts:

1. Warning notification appears
2. Conflicted files show in staging panel
3. Open files to resolve conflicts
4. Stage resolved files
5. Commit to complete merge

## Remote Branches

### Viewing
Remote branches appear under **REMOTE**, organized by remote name.

### Tracking
Checkout a remote branch to create a local tracking branch.

### Deleting
Right-click → **Delete remote branch** to remove from server.

## Branch Tree Structure

Branches with `/` in their names are displayed hierarchically:
- `feature/login` appears under `feature/` folder
- Click folders to expand/collapse
- Keeps long branch lists organized

## Push and Pull

### Push
`Ctrl+P` — Push current branch to remote

### Pull
`Ctrl+Shift+P` — Pull changes from remote

### Status
The status bar shows ahead/behind counts.

## Best Practices

### Naming Conventions
```
feature/user-authentication
fix/login-timeout
hotfix/security-patch
release/v2.0
```

### Keep main Clean
- Don't commit directly to main
- Use feature branches
- Merge via pull requests

### Delete Merged Branches
Clean up after merging to keep the sidebar tidy.

### Pull Before Push
Always pull latest changes before pushing to avoid conflicts.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` | Push to remote |
| `Ctrl+Shift+P` | Pull from remote |
| Double-click | Checkout branch |

## Related

- [Branches & Merging Guide](/guide/branches-merging) — Detailed workflows
- [Commit Graph](/features/commit-graph) — Visualizing branches
- [Stash Management](/features/stash-management) — Saving work temporarily
