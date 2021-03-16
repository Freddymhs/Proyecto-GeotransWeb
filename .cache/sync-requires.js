const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/src/pages/404.js"))),
  "component---src-pages-contactus-js": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/src/pages/contactus.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/src/pages/index.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/src/pages/services.js"))),
  "component---src-pages-us-js": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/src/pages/us.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/src/pages/using-typescript.tsx")))
}

