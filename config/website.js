const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Ezequiel Calderon Jr', // Navigation and Site Title
  siteTitleAlt: 'Ezequiel Calderon Jr', // Alternative Site title for SEO
  siteTitleShort: 'Ezequiel', // short_name for manifest
  siteHeadline: "Ezequiel Calderon Jr\'s Web Portfolio", // Headline for schema.org JSONLD
  siteUrl: 'https://www.ezequielcalderon.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/ezequiel_nobackground.png', // Used for SEO and manifest
  siteDescription: 'Ezequiel Calderon Jr is a Product and Project Manager in the software industry.',
  author: 'Ezequiel Calderon Jr', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@playeasynow', // Twitter Username
  ogSiteName: 'Ezequiel Calderon Jr', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
