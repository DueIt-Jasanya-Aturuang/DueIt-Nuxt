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
              v-model="loginData.email_or_username"
              placeholder="Masukkan email atau username"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Kata Sandi">
            <UInput
              v-model="loginData.password"
              :type="state.showPassword ? 'text' : 'password'"
              placeholder="Masukkan kata sandi akun"
              size="md"
              class="relative"
            >
              <!-- set icon password tampil/tidak -->
              <div
                class="absolute right-0 top-0 cursor-pointer"
                @click="state.showPassword = !state.showPassword"
              >
                <i
                  :class="
                    state.showPassword ? 'dicon-eye-opened' : 'dicon-eye-closed'
                  "
                  class="py-2 px-3"
                ></i>
              </div>
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
const axios = useNuxtApp().$axiosInstance

definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'minified',
})

// v-model untuk menampung data form
const loginData = reactive({
  email_or_username: 'bregsiaju@gmail.com',
  password: '12345678',
  remember_me: false,
})

const token = ref('')

const login = async () => {
  try {
    const response = await axios.post('/auth/login', loginData)
    token.value = await response.data.data.token
    localStorage.setItem('Token', response.data.data.token.token)
    console.log(token.value)
  } catch (error) {
    console.log(error)
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
