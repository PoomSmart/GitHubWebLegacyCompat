# Automated Script Updates

There is an automated script (`update-scripts.js`) to update JS files in case GitHub changed their JS, causing the tweak to no longer work.

## How it works

The automation script:

1. **Fetches GitHub assets**: Accesses `https://github.com/microsoft/vscode/issues` to find JavaScript asset URLs
2. **Downloads matching files**: Finds and downloads JS files matching patterns for:
    - `issues-react-*.js`
    - `issue-viewer-*.js`
    - `list-view-*.js`
    - `react-core-*.js`
3. **Formats with Prettier**: Runs Prettier on downloaded files to format the minified code
4. **Applies patches**:
    - For `issues-react`, `issue-viewer`, and `list-view`: Uses find-replace patterns from `.txt` files
    - For `react-core`: Applies the `react-core.diff` patch file
5. **Replaces script files**: Updates the corresponding files in the `scripts/` directory
6. **Creates backups**: Automatically backs up existing files before replacement

## Usage

```bash
# Run the automation script
npm run update-scripts

# Run in dry-run mode (preview changes without applying them)
npm run update-scripts:dry-run

# Or directly with node
node update-scripts.js
node update-scripts.js --dry-run
```

## What gets updated

The script updates these files in the `scripts/` directory:

- `16.4-issues-react.js`
- `16.4-issue-viewer.js`
- `16.4-list-view.js`
- `16.4-react-core.js`

## Error handling

- Creates backups of existing files before replacement
- Fails gracefully if assets can't be found or downloaded
- Validates that diff patches apply successfully
- Provides detailed logging of all operations

## Requirements

- Node.js (the script uses built-in modules, no additional dependencies)
- `patch` command available in PATH (for applying `.diff` files)
- Prettier (included as dev dependency for formatting downloaded files)

**First time setup:**

```bash
npm install  # Install dev dependencies including Prettier
```
