# GitHubWebLegacyCompat

A simplistic tweak to make GitHub's website work (accessible) on older versions of WebKit / iOS.

GitHub website nowadays uses a modern theming system that is not supported by older versions of WebKit, mainly the `::backdrop` pseudo-element and `@layer` at-rules. To mitigate this, this tweak dynamically inserts new stylesheets into the page needed to make the website more accessible, with the unsupported syntax removed, using JavaScript.

Reference: [Safari Release Notes](https://developer.apple.com/documentation/safari-release-notes/safari-15_4-release-notes#New-Features)

Furthermore, this tweak also adds few JavaScript polyfills to make the website more functional on older versions of WebKit.

## TODO

- [ ] Improve how CSS files are declared
- [ ] Fix layout issues in the website?
