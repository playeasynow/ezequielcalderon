const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/ezequiel/Projects/Web-Projects/gatsby-portfolio/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/ezequiel/Projects/Web-Projects/gatsby-portfolio/src/pages/index.jsx")))
}

