// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Due It: Jasanya Atur Uang',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
    // dapat menggunakan semua icon di https://icones.js.org/
    'nuxt-icon',
    'nuxt-swiper',
  ],

  eslint: {
    lintOnStart: false,
  },

  pages: true,

  // set dark mode atau light mode
  colorMode: {
    preference: 'light',
  },

  // main file scss
  // css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
})
