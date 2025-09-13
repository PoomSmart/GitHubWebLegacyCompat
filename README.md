# GitHubWebLegacyCompat

A ~~simplistic~~ CydiaSubstrate tweak to make GitHub website work (accessible) on older versions of WebKit / iOS.

### CSS Cascade Layers and `::backdrop` Support

GitHub website nowadays uses a modern theming system that is not supported by older versions of WebKit, e.g. `@layer` at-rules. Anything inside `@layer` won't be recognized. Furthermore, the pseudoselector `::backdrop`, which is widely used when defining CSS variables for colors, is not supported. When it is present, the old WebKit engines will discard the ensire style rules under it.

To mitigate this, this tweak dynamically inserts new stylesheets into the page needed to make the website more accessible, with the unsupported syntax removed, using JavaScript.

Reference: [Safari Release Notes](https://developer.apple.com/documentation/safari-release-notes/safari-15_4-release-notes#New-Features)

### Callee and Parameter Name Conflict

As of May or Jun 2025, GitHub pushed the update to certain some JS bundles (e.g. `react-core`), minified. This version has the issue on iOS < 16.4, which forbids the callee and the parameter to have the same name. To make this works on lower iOS versions, those JS bundles are included in this tweak, with the callee and parameter names fixed.

Reference: [WebKit Bug](https://bugs.webkit.org/show_bug.cgi?id=247433)

### RegExp Lookbehind Support

Some of the JS bundles include the literal RegEx with lookbehind pattern. The old WebKit engines will simply refuse to execute the entire bundle, leading to broken functionalities that would otherwise have been available. Similar to above, the entire JS bundles are included in this tweak, with the lookbehind pattern replaced with the regular pattern with few extra JS code to retain the same behavior.

Reference: [Lookbehind assertion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)

## Building

The project uses dynamic asset loading for both CSS and JavaScript files. To build the complete project:

1. **Update JavaScript assets** (when GitHub updates their bundles):
   ```bash
   npm install
   node update-scripts.js
   ```

2. **Process and build assets**:
   ```bash
   make assets
   ```

This workflow:
- Downloads and patches the latest GitHub JavaScript bundles for compatibility
- Processes CSS files in `./styles/` (minified and copied to layout directory)
- Processes JavaScript files in `./scripts/` (processed with Babel and minified)
- Assets are loaded dynamically based on iOS version compatibility

### Updating JavaScript Assets

The automation script handles updating GitHub's JavaScript assets when they change:

```bash
# Download latest assets and apply compatibility patches
node update-scripts.js

# Preview changes without modifying files
node update-scripts.js --dry-run
```

The automation script:
- Scrapes GitHub's issues page to discover current asset URLs
- Downloads the latest JavaScript bundles (issues-react, issue-viewer, list-view, react-core)
- Applies compatibility patches for iOS < 16.4 (callee/parameter conflicts, lookbehind regex)
- Updates the bundled script files automatically

This eliminates the need for manual patching when GitHub updates their assets.
