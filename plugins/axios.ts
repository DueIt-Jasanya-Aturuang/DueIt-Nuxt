import axios from 'axios'

export default defineNuxtPlugin(_nuxtApp => {
  const config = useRuntimeConfig().public

  const axiosInstance = axios.create({
    baseURL: 'https://dueit.my.id/api',
    headers: {
      'App-ID': config.APP_ID,
      'X-Key': config.KEY,
    },
  })

  return {
    provide: {
      axiosInstance,
    },
  }
})
