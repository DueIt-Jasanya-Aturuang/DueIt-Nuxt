import axios from 'axios'

export default defineNuxtPlugin(() => {
  // const defaultUrl = "http://103.82.92.34:8080";

  // const api = axios.create({
  // 	baseURL: defaultUrl,
  // 	headers: {
  // 		common: {},
  // 	},
  // });

  return {
    provide: {
      axios,
    },
  }
})
