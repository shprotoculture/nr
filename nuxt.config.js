module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Natalia Romanova',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Natalia Romanova' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;subset=cyrillic'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&amp;subset=cyrillic'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700&amp;subset=cyrillic'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Amatic+SC:400,700&amp;subset=cyrillic'},
    ]
  },
  css: [
    {src: '~/assets/scss/import.scss', lang: 'scss'},
  ],
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  plugins: [{ src: '~/plugins/swiper.js', ssr: false }, { src: '~/plugins/vfancybox.js', ssr: false }],
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
}

