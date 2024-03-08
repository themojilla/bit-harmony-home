import { appDescription } from './constants/app'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-module-eslint-config',
  ],
  content: {},
  tailwindcss: {
    viewer: false,
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
      ],
    },
  },
  eslintConfig: {
    setup: false,
  },
})
