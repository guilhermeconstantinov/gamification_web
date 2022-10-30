export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    middleware: ['auth'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gamification-web',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/services.js',
    '@/plugins/vue-tailwind.js',
    '@/plugins/vuelidate.js',
    '@/plugins/vue-the-mask.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/svg'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NUXT_ENV_API_URL
      ? process.env.NUXT_ENV_API_URL
      : 'http://localhost:8000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    strategies: {
      local: {
        scheme: '@/modules/nuxtAuthSchema',
        token: {
          property: 'access_token',
        },
        user: {
          property: '',
        },
        endpoints: {
          login: {
            url: 'oauth/token',
            method: 'post',
          },
          user: {
            url: 'user',
            method: 'get',
          },
        },
        client_id: process.env.NUXT_ENV_API_CLIENT_ID,
        client_secret: process.env.NUXT_ENV_API_CLIENT_SECRET,
        redirect: {
          login: '/login',
          logout: '/login',
          home: '/register',
        },
      },
    },
  },
}
