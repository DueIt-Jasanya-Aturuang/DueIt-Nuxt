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

  modules: ['@nuxthq/ui', '@nuxtjs/eslint-module'],

  css: ['~/assets/css/tailwind.css'],

  eslint: {
    lintOnStart: false,
  },
})
