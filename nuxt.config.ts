export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-module-eslint-config',
    'nuxt-gtag'
  ],
  content: {},
  tailwindcss: {
    viewer: false,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  eslintConfig: {
    setup: false,
  },
  gtag: {
    id: 'G-ES97Z45R6G'
  }
})
