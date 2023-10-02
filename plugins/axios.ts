import axios from 'axios'

export default defineNuxtPlugin(_nuxtApp => {
  // const config = useRuntimeConfig()

  const axiosInstance = axios.create({
    baseURL: 'https://dueit.my.id/api',
    headers: {
      'App-ID': '5410801c-faaf-4776-95be-56472e044820',
      'X-Key': 'key',
    },
  })

  return {
    provide: {
      axiosInstance,
    },
  }
})
