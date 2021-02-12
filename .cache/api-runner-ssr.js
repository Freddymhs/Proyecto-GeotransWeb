var plugins = [{
      plugin: require('C:/Users/fmarc/OneDrive/Escritorio/EnDesarrollo/Proyecto-GeotransWeb/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/fmarc/OneDrive/Escritorio/EnDesarrollo/Proyecto-GeotransWeb/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"geotrans","short_name":"GEOTRANS","theme_color":"#f8f8ff","background_color":"#f8f8ff","display":"fullscreen","start_url":"/","icon":"src/favicons/android-chrome-192x192.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"d125e14400234dc0e48b483c07471536"},
    },{
      plugin: require('C:/Users/fmarc/OneDrive/Escritorio/EnDesarrollo/Proyecto-GeotransWeb/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/fmarc/OneDrive/Escritorio/EnDesarrollo/Proyecto-GeotransWeb/node_modules/gatsby-plugin-react-i18next/gatsby-ssr'),
      options: {"plugins":[],"path":"C:\\Users\\fmarc\\OneDrive\\Escritorio\\EnDesarrollo\\Proyecto-GeotransWeb/locales","languages":["es","en"],"defaultLanguage":"es","i18nextOptions":{"interpolation":{"escapeValue":false},"keySeparator":".","nsSeparator":false},"pages":[{"matchPath":"/:lang?/blog/:uid","getLanguageFromPath":true,"excludeLanguages":["es"]},{"matchPath":"/preview","languages":["es"]}]},
    },{
      plugin: require('C:/Users/fmarc/OneDrive/Escritorio/EnDesarrollo/Proyecto-GeotransWeb/node_modules/gatsby-plugin-facebook-customer-chat/gatsby-ssr'),
      options: {"plugins":[],"sdk":{"appId":"775159989996689"},"chat":{"pageId":"106572004521097","loggedInGreeting":"Hi! How can I help you?","loggedOutGreeting":"Hi! How can I help you?"}},
    },{
      plugin: require('C:/Users/fmarc/OneDrive/Escritorio/EnDesarrollo/Proyecto-GeotransWeb/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
