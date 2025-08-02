module.exports = {
  plugins: [
    require('css-has-pseudo')({
      // Transform :has() selectors to use class-based fallbacks
      // This will add .js-has- prefixed classes for browsers that don't support :has()
      preserve: false, // Remove original :has() selectors to ensure compatibility
    })
  ]
}
