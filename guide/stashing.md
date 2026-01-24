# Stashing Changes

Learn how to save work-in-progress without committing.

## What is Stashing?

Stashing lets you save your uncommitted changes temporarily so you can:
- Switch branches without committing half-done work
- Pull updates without conflicts
- Set aside changes to work on something urgent

Think of it as a clipboard for your Git changes.

## The Stash Section

Stashes appear in the **sidebar** under the "Stashes" section:
- Shows the count of saved stashes
- Lists each stash with its message
- Most recent stash is at the top

## Creating a Stash

### From the Staging Panel
1. Click the **stash button** (box icon) next to the commit button
2. Enter a descriptive message
3. Click **Stash**

### What Gets Stashed
- All unstaged changes
- All staged changes
- Untracked files (optionally)

After stashing, your working directory is clean.

## Stash Messages

Always use descriptive messages:
- ✅ "WIP: user profile page styling"
- ✅ "Half-done: API integration for payments"
- ❌ "stuff"
- ❌ "temp"

Good messages help you remember what each stash contains.

## Applying Stashes

### Apply (Keep Stash)
Right-click a stash and select **Apply**:
- Restores the changes to your working directory
- Keeps the stash in the list (can apply again)

### Pop (Remove Stash)
Right-click a stash and select **Pop**:
- Restores the changes to your working directory
- Removes the stash from the list

### When to Use Each
- **Apply** — When you might need the stash again
- **Pop** — When you're done with the stash

## Dropping Stashes

To delete a stash without applying it:
1. Right-click the stash
2. Select **Drop**
3. Confirm deletion

::: warning Cannot Undo
Dropped stashes cannot be recovered. Make sure you don't need the changes.
:::

## Stash Conflicts

If applying a stash conflicts with your current changes:
1. Gitux shows a warning
2. Conflicted files appear in the staging panel
3. Resolve conflicts manually
4. Stage and commit the resolution

## Common Workflows

### Quick Branch Switch
```
1. Working on feature branch with uncommitted changes
2. Need to check something on main
3. Stash changes: "WIP: feature work"
4. Switch to main
5. Do your work
6. Switch back to feature branch
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

### Save Multiple WIPs
```
1. Stash current work: "WIP: login page"
2. Start new work
3. Stash that too: "WIP: signup page"
4. Now have two stashes
5. Apply whichever you need
```

## Viewing Stash Contents

Currently, Gitux shows stash messages in the list. To see the full contents of a stash, you can use the terminal:

```bash
git stash show -p stash@{0}
```

## Tips

### Stash Often
Don't be afraid to stash frequently. It's a safe operation.

### Clean Up Old Stashes
Periodically review and drop stashes you no longer need.

### Use Branches Instead
For longer work-in-progress, consider creating a branch instead of stashing.

### Stash Before Risky Operations
Before rebasing, merging, or other complex operations, stash your changes as a safety net.

## Limitations

- Stashes are local only (not pushed to remote)
- Large stashes can be slow to apply
- Conflicts may occur when applying to changed code

## Next Steps

- [File History](/guide/file-history) — Track changes over time
- [Reset & Force Push](/guide/reset-force-push) — Advanced operations
