module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'iOS Haven',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'apple-mobile-web-app-title', content: 'iOS Haven'},
      { name: 'application-name', content:'iOS Haven'},
      { name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-brands.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-solid.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-light.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-regular.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-core.css'},
      { rel: 'stylesheet', href:'/markdown.css'},
      { rel: 'apple-touch-icon', sizes:'180x180', href:'/favicons/apple-touch-icon.png?v=QEMYzE9pb35555'},
      { rel: 'icon', type:'image/png', sizes:'32x32', href:'/favicons/favicon-32x32.png?v=QEMYzE9pb35555'},
      { rel: 'icon', type:'image/png', sizes:'16x16', href:'/favicons/favicon-16x16.png?v=QEMYzE9pb35555'},
      { rel: 'manifest', href:'/favicons/manifest.json?v=QEMYzE9pb35555'},
      { rel: 'mask-icon', href:'/favicons/safari-pinned-tab.svg?v=QEMYzE9pb35555', color:'#e81e1e'},
      { rel: 'shortcut icon', href:'/favicons/favicon.ico?v=QEMYzE9pb35555'}
    ],
    script: [
      {type: 'text/javascript', 'src':'discord.min.js'},
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
