# Reset & Force Push

Advanced operations for rewriting history. Use with caution.

::: danger Destructive Operations
Reset and force push can permanently lose commits. Only use these on branches that haven't been shared with others, or when you fully understand the consequences.
:::

## Understanding Reset

Reset moves your branch pointer to a different commit, effectively "undoing" commits.

### Reset Types

| Type | Working Directory | Staging Area | Use Case |
|------|------------------|--------------|----------|
| **Soft** | Unchanged | Unchanged | Undo commit, keep changes staged |
| **Mixed** | Unchanged | Cleared | Undo commit, keep changes unstaged |
| **Hard** | Cleared | Cleared | Completely discard changes |

## Resetting in Gitux

### From the Commit Graph
1. Right-click on the commit you want to reset to
2. Select the reset option
3. Confirm the operation

### What Happens
- Your branch moves to the selected commit
- Commits after that point are "removed" from the branch
- Changes may be preserved depending on reset type

## Force Push

After resetting, your local branch differs from the remote. A normal push will fail. Force push overwrites the remote with your local version.

### When to Force Push
- After resetting a branch
- After amending a commit
- After rebasing

### Dangers of Force Push
- Overwrites remote history
- Can cause problems for collaborators
- May lose commits that only existed on remote

## Safe Force Push Workflow

1. **Communicate** — Tell your team you're about to force push
2. **Verify** — Double-check you're on the right branch
3. **Backup** — Consider creating a backup branch first
4. **Force push** — Execute the operation
5. **Verify** — Check that the remote looks correct

## Common Scenarios

### Undo Last Commit (Keep Changes)
```
Scenario: You committed too early and want to add more changes

1. Reset (soft) to the previous commit
2. Your changes are still staged
3. Make additional changes
4. Commit again with a better message
```

### Completely Undo Last Commit
```
Scenario: The last commit was a mistake

1. Reset (hard) to the previous commit
2. All changes from that commit are discarded
3. Force push if already pushed to remote
```

### Fix a Commit Message
```
Scenario: Typo in commit message (not yet pushed)

1. The commit is only local
2. Reset (soft) to previous commit
3. Commit again with correct message
```

### Sync with Remote After Reset
```
Scenario: You reset locally, now need to update remote

1. Verify your local branch is correct
2. Force push to overwrite remote
3. Notify team members to re-pull
```

## Best Practices

### Never Force Push to Shared Branches
- `main`, `master`, `develop` — Never force push
- Feature branches — Only if you're the sole contributor

### Create Backup Branches
Before risky operations:
```bash
git branch backup-branch-name
```

### Use `--force-with-lease`
Safer than regular force push — fails if someone else pushed:
```bash
git push --force-with-lease
```

### Communicate with Your Team
If you must force push a shared branch:
1. Notify everyone first
2. Have them push their changes
3. Force push
4. Have them re-clone or reset their local branches

## Recovery

### Reflog to the Rescue
Git keeps a reflog of all branch movements. If you accidentally reset too far:

```bash
# See recent branch positions
git reflog

# Reset back to a previous position
git reset --hard HEAD@{2}
```

### Backup Branches
If you created a backup branch, simply:
```bash
git checkout backup-branch
# or
git reset --hard backup-branch
```

## When NOT to Use These

- ❌ On shared branches without coordination
- ❌ When you're unsure what will happen
- ❌ To hide mistakes (just make a new commit instead)
- ❌ On commits that are part of pull requests

## Alternatives to Consider

### Revert Instead of Reset
`git revert` creates a new commit that undoes changes, preserving history:
- Safer for shared branches
- Doesn't require force push
- History shows what happened

### New Commits
Often, making a new commit to fix issues is simpler and safer than rewriting history.

## Summary

| Operation | Risk Level | When to Use |
|-----------|------------|-------------|
| Soft Reset | Low | Redo a commit locally |
| Mixed Reset | Medium | Unstage and redo |
| Hard Reset | High | Discard changes completely |
| Force Push | High | After any local history rewrite |

## Next Steps

- [Keyboard Shortcuts](/guide/keyboard-shortcuts) — Master the shortcuts
- [The Commit Graph](/guide/commit-graph) — Understand the visual history
