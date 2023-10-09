<!-- eslint-disable no-console -->
<!-- eslint-disable require-await -->
<template>
  <div
    class="container relative max-w-sm mx-auto flex place-items-center h-screen"
  >
    <AuthForm>
      <template #page-title>Masuk Akun</template>
      <template #form-input>
        <form @submit.prevent="login">
          <UFormGroup label="Email / Username" class="mb-6">
            <UInput
              v-model="name"
              placeholder="Masukkan email atau username"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Kata Sandi">
            <UInput
              v-model="image"
              type="file"
              placeholder="Pilih Gambar"
              size="md"
              class="relative"
            >
              <!-- set icon password tampil/tidak -->
              <!-- <div
                class="absolute right-0 top-0 cursor-pointer"
                @click="state.showPassword = !state.showPassword"
              >
                <i
                  :class="
                    state.showPassword ? 'dicon-eye-opened' : 'dicon-eye-closed'
                  "
                  class="py-2 px-3"
                ></i>
              </div> -->
            </UInput>
          </UFormGroup>
          <div class="w-full flex justify-end mt-4">
            <NuxtLink to="/lupa-password" class="text-[#B6AE03] text-sm"
              >Lupa Password?</NuxtLink
            >
          </div>
          <ButtonsCommon class="w-full mt-[34px] bg-[#B6AE03]"
            >Login</ButtonsCommon
          >
        </form>
      </template>
    </AuthForm>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
// const axios = useNuxtApp().$axiosInstance

definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'minified',
})

// v-model untuk menampung data form
// const loginData = reactive({
//   email_or_username: 'bregsiaju@gmail.com',
//   password: '12345678',
//   remember_me: false,
// })

const name = ref('')
const image = ref('')

// const loginData = reactive({
//   name: '',
//   image: '',
// })

// const login = async () => {
//   const { data } = await useFetch('https://dueit.my.id/api/auth/login', {
//     method: 'post',
//     headers: {
//       'App-ID': '5410801c-faaf-4776-95be-56472e044820',
//       'X-Key': 'key',
//     },
//     body: loginData,
//   })
//   console.log(data)
// }

// const login = async () => {
//   try {
//     await axios.post('https://dueit.my.id/api', loginData, {
//       headers: {
//         'User-Id': 'a8d88984-e5f5-4e61-8c5f-9ffbf0872786',
//         'App-ID': '5410801c-faaf-4776-95be-56472e044820',
//         Authorization:
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY4NTgyODUsInN1YiI6ImE4ZDg4OTg0LWU1ZjUtNGU2MS04YzVmLTlmZmJmMDg3Mjc4NiJ9.9fBotlFvIoJHMWucvR2eYCI98KmWwYRdoThvifYuB0A',
//         'X-Key': 'secretkeyjasanyaauth',
//       },
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

const login = async () => {
  try {
    const payload = { name: name.value, image: image.value }
    const config = {
      headers: {
        'Content-Type': 'multipart/form-dat',
        'User-Id': 'a8d88984-e5f5-4e61-8c5f-9ffbf0872786',
        'App-ID': '5410801c-faaf-4776-95be-56472e044820',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY4NTgyODUsInN1YiI6ImE4ZDg4OTg0LWU1ZjUtNGU2MS04YzVmLTlmZmJmMDg3Mjc4NiJ9.9fBotlFvIoJHMWucvR2eYCI98KmWwYRdoThvifYuB0A',
        'X-Key': 'secretkeyjasanyaauth',
      },
    }
    const url = 'https://dueit.my.id/api/finance/payment'
    const response = await axios.post(url, payload, config)
    const data = response.data
    if (data) {
      console.log(data)
    } else {
      alert(data)
      console.log(data)
    }
  } catch (err) {
    alert(err)
  }
}

// state untuk menampilkan password
const state = reactive({
  showPassword: false,
})
</script>

<style lang="scss" scoped>
.container {
  padding: 0 33px;
}
</style>
