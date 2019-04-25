// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/ezequiel/Projects/Web-Projects/gatsby-portfolio/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-index-jsx": () => import("/Users/ezequiel/Projects/Web-Projects/gatsby-portfolio/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ezequiel/Projects/Web-Projects/gatsby-portfolio/.cache/data.json")

