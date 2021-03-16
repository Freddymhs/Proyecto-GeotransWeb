module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"geotrans","short_name":"GEOTRANS","theme_color":"#f8f8ff","background_color":"#f8f8ff","display":"fullscreen","start_url":"/","icon":"src/favicons/android-chrome-192x192.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"d125e14400234dc0e48b483c07471536"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-react-i18next/gatsby-browser.js'),
      options: {"plugins":[],"path":"/Users/fmarcos/Desktop/apps/running/Proyecto-GeotransWeb/locales","languages":["es","en"],"defaultLanguage":"es","i18nextOptions":{"interpolation":{"escapeValue":false},"keySeparator":".","nsSeparator":false},"pages":[{"matchPath":"/:lang?/blog/:uid","getLanguageFromPath":true,"excludeLanguages":["es"]},{"matchPath":"/preview","languages":["es"]}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
