# GitHubWebLegacyCompat

A ~~simplistic~~ tweak to make GitHub's website work (accessible) on older versions of WebKit / iOS.

### CSS Cascade Layers and `::backdrop` Support

GitHub website nowadays uses a modern theming system that is not supported by older versions of WebKit, mainly the `::backdrop` pseudo-element and `@layer` at-rules. To mitigate this, this tweak dynamically inserts new stylesheets into the page needed to make the website more accessible, with the unsupported syntax removed, using JavaScript.

Reference: [Safari Release Notes](https://developer.apple.com/documentation/safari-release-notes/safari-15_4-release-notes#New-Features)

Furthermore, this tweak also adds few JavaScript polyfills to make the website more functional on older versions of WebKit.

### Callee and Parameter Name Conflict

As of May or Jun 2025, GitHub pushed the update to its `react-core` JS bundle, minified. This version has the issue on iOS < 16.4, which forbids the callee and the parameter to have the same name. To make this works on lower iOS versions, the entire `react-core` JS bundle is included in this tweak, with the callee and parameter names fixed.

Reference: [WebKit Bug](https://bugs.webkit.org/show_bug.cgi?id=247433)

## Building

The project uses dynamic asset loading for both CSS and JavaScript files. Assets are automatically processed during the build process:

- CSS files in `./styles/` are minified and copied to the layout directory
- JavaScript files in `./scripts/` are processed with Babel and minified
- Assets are loaded dynamically based on iOS version compatibility

Run `make assets` to process CSS and JS files, or simply `make` to build everything.
