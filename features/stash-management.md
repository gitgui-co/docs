# Stash Management

Save work-in-progress without committing using Gitux's stash feature.

## What is Stashing?

Stashing saves your uncommitted changes temporarily:
- Switch branches without losing work
- Pull updates without conflicts
- Set aside changes for later

## The Stash Section

Stashes appear in the sidebar under **STASHES**:

```
┌─────────────────────────┐
│ ▼ STASHES (2)           │
│   ├─ WIP: login page    │
│   └─ temp: quick save   │
└─────────────────────────┘
```

## Creating a Stash

1. Click the **stash button** (📦) in the staging panel
2. Enter a descriptive message
3. Click **Stash**

### What Gets Stashed
- All unstaged changes
- All staged changes
- Working directory becomes clean

## Stash Actions

Right-click any stash for options:

### Apply
Restores changes, **keeps** the stash:
- Changes appear in staging panel
- Stash remains in list
- Can apply again later

### Pop
Restores changes, **removes** the stash:
- Changes appear in staging panel
- Stash deleted from list
- Use when done with stash

### Drop
Deletes stash **without** applying:
- Changes are lost
- Cannot be undone
- Use to clean up old stashes

## Stash Messages

Good messages help you remember:
- ✅ "WIP: user authentication flow"
- ✅ "Half-done: API integration"
- ❌ "stuff"
- ❌ "asdf"

## Common Workflows

### Quick Branch Switch
```
1. Working on feature with changes
2. Need to check main branch
3. Stash: "WIP: feature work"
4. Switch to main
5. Do your work
6. Switch back to feature
7. Pop the stash
8. Continue working
```

### Pull Without Conflicts
```
1. Have local changes
2. Need to pull updates
3. Stash changes
4. Pull from remote
5. Pop the stash
6. Resolve any conflicts
```

### Multiple WIPs
```
1. Stash: "WIP: login page"
2. Start different work
3. Stash: "WIP: signup page"
4. Now have two stashes
5. Apply whichever needed
```

## Handling Conflicts

If applying a stash conflicts with current changes:
1. Gitux shows warning
2. Conflicted files in staging panel
3. Resolve conflicts manually
4. Stage resolved files
5. Commit to complete

## Tips

### Stash Often
Stashing is safe and fast. Use it liberally.

### Clean Up Old Stashes
Periodically drop stashes you no longer need.

### Use Branches for Long Work
For work spanning days, create a branch instead.

### Stash Before Risky Operations
Before rebasing or complex merges, stash as backup.

## Limitations

- Stashes are local only (not pushed)
- Large stashes may be slow to apply
- Conflicts possible when applying

## Related

- [Stashing Guide](/guide/stashing) — Detailed workflows
- [Branch Management](/features/branch-management) — Working with branches
- [Staging Panel](/features/staging-panel) — Managing changes
