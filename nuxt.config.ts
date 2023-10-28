import { defineNuxtConfig } from 'nuxt/config'

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

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      APP_ID: process.env.APP_ID,
      KEY: process.env.KEY,
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    // dapat menggunakan semua icon di https://icones.js.org/
    'nuxt-icon',
    'nuxt-swiper',
  ],

  routeRules: {
    '/api/**': {
      proxy: {
        to: 'https://dueit.my.id/api/**',
      },
    },
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'https://dueit.my.id',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
        prependPath: true,
        changeOrigin: true,
      },
    },
  },

  eslint: {
    lintOnStart: false,
  },

  pages: true,

  // set dark mode atau light mode
  colorMode: {
    preference: 'light',
  },

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
