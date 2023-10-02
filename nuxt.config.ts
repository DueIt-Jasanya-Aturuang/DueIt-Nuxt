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
    BASE_URL: process.env.BASE_URL,
    APP_ID: process.env.APP_ID,
    KEY: process.env.KEY,
    // proxy: {
    //   options: {
    //     target: 'https://dueit.my.id',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api',
    //     },
    //     pathFilter: ['/api'],
    //   },
    // },
  },

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
    // dapat menggunakan semua icon di https://icones.js.org/
    'nuxt-icon',
    'nuxt-swiper',
    // '@nuxt-alt/proxy',
    // 'nuxt-proxy',
  ],

  routeRules: {
    '/api/**': {
      proxy: {
        to: 'https://dueit.my.id/api/**',
      },
    },
  },

  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'https://dueit.my.id',
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Headers': '*',
  //       },
  //       prependPath: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },

  // proxy: {
  //   options: {
  //     target: 'https://dueit.my.id',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '/api',
  //     },
  //     pathFilter: ['/api'],
  //   },
  // },

  // proxy: {
  //   proxies: {
  //     '/api': {
  //       target: process.env.API_URL,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //       changeOrigin: true,
  //       configure: (proxy, options) => {
  //         options.headers = {
  //           accept: 'application/json',
  //         }
  //       },
  //     },
  //   },
  // },

  // proxy: {
  //   proxies: {
  //     '/api': {
  //       target: 'https://dueit.my.id/api',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },

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
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'https://dueit.my.id',
    //       changeOrigin: true,
    //     },
    //   },
    // },
  },
})
