# Branches & Merging

Learn how to work with branches and merge changes in Gitux.

## The Sidebar

The left sidebar shows your repository's branch structure:

- **Local** — Branches on your machine
- **Remote** — Branches on remote servers (origin, etc.)
- **Stashes** — Saved work-in-progress

## Viewing Branches

### Branch Tree
Branches are displayed in a tree structure. Folders group related branches:
```
Local
├── main
├── develop
└── feature/
    ├── login
    └── dashboard
```

### Current Branch
The current branch (HEAD) is highlighted with a special badge and accent color.

### Branch Counts
Each section shows the total number of branches.

## Switching Branches

### Double-Click to Checkout
Double-click any local branch to switch to it (checkout).

### Single-Click to Highlight
Single-click a branch to scroll the commit graph to that branch's latest commit without switching.

## Creating Branches

### From Context Menu
1. Right-click any branch
2. Select **Branch from...**
3. Enter the new branch name
4. Gitux creates and switches to the new branch

### Branch Naming Tips
- Use prefixes: `feature/`, `fix/`, `hotfix/`
- Keep names descriptive but concise
- Avoid spaces (use hyphens or underscores)

## Merging Branches

### Drag & Drop Merge
The fastest way to merge:

1. **Drag** the source branch (the one with changes)
2. **Drop** it onto the target branch (where you want the changes)
3. Gitux will:
   - Switch to the target branch if needed
   - Perform the merge
   - Show success or conflict notification

### Context Menu Merge
1. Right-click the branch you want to merge FROM
2. Select **Merge into...**
3. Choose the target branch
4. Confirm the merge

### Merge Results

| Result | What Happens |
|--------|--------------|
| **Success** | Changes merged, commit graph updates |
| **Fast-forward** | Branch pointer moves, no merge commit |
| **Conflicts** | Files with conflicts shown in staging panel |

## Handling Merge Conflicts

When a merge has conflicts:

1. Gitux shows a warning notification
2. Conflicted files appear in the staging panel
3. Open each file in your editor to resolve conflicts
4. Stage the resolved files
5. Commit to complete the merge

::: tip Conflict Markers
Look for these markers in conflicted files:
```
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name
```
:::

## Deleting Branches

### Delete Local Branch
1. Right-click the branch
2. Select **Delete branch**
3. Confirm deletion
4. Optionally delete from remote too

::: warning Cannot Delete Current Branch
You cannot delete the branch you're currently on. Switch to another branch first.
:::

### Delete Remote Branch
1. Right-click a remote branch
2. Select **Delete remote branch**
3. Confirm deletion
4. Optionally delete the local tracking branch

## Pushing and Pulling

### Push to Remote
Press `Ctrl+P` or use the header button to push your current branch to the remote.

### Pull from Remote
Press `Ctrl+Shift+P` to pull changes from the remote into your current branch.

### Behind/Ahead Indicators
The status bar shows if your branch is behind or ahead of the remote.

## Working with Remotes

### Remote Branches
Remote branches appear under the **Remote** section in the sidebar, organized by remote name (usually `origin`).

### Tracking
When you checkout a remote branch, Gitux creates a local tracking branch automatically.

## Best Practices

### Keep main/master Clean
- Don't commit directly to main
- Use feature branches for new work
- Merge via pull requests when possible

### Merge Often
- Regularly merge main into your feature branch
- Smaller, frequent merges are easier than big ones

### Delete Merged Branches
- Clean up branches after merging
- Keeps the sidebar tidy

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` | Push to remote |
| `Ctrl+Shift+P` | Pull from remote |

## Next Steps

- [Viewing Diffs](/guide/viewing-diffs) — Understand file changes
- [Stashing Changes](/guide/stashing) — Save work temporarily
