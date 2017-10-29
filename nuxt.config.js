module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-brands.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-solid.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-light.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-regular.css'},
      { rel: 'stylesheet', href:'/fa/css/fontawesome-pro-core.css'},
      { rel: 'stylesheet', href:'/markdown.css'}
    ],
    script: [
      {type: 'text/javascript', 'src':'discord.min.js'},
      {async: '', src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'},
      {type: 'text/javascript', 'src':'adsenseconfig.js'},
    ]
  },
  /*
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-4649450952406116",
    enable_page_level_ads: true
  });
</script>
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
