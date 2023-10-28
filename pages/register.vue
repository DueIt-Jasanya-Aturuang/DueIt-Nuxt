<template>
  <div class="container max-w-sm mx-auto flex place-items-center h-full">
    <AuthForm>
      <template #page-title>Daftar Akun</template>
      <template #cto>
        <div>
          Sudah punya akun?
          <NuxtLink to="/login" class="text-[#B6AE03]">Masuk disini</NuxtLink>
        </div>
      </template>
      <template #form-input>
        <form @submit.prevent="onRegister">
          <UFormGroup
            label="Nama Lengkap"
            class="mb-6"
            required
            :error="state.formErrors.full_name"
          >
            <UInput
              v-model="registData.full_name"
              placeholder="Masukkan nama lengkap"
              size="md"
              @keyup="state.formErrors.full_name = null"
            />
          </UFormGroup>
          <UFormGroup
            label="Username"
            class="mb-6"
            required
            :error="state.formErrors.username"
          >
            <UInput
              v-model="registData.username"
              placeholder="Masukkan username"
              size="md"
              @keyup="state.formErrors.username = null"
            />
          </UFormGroup>
          <UFormGroup
            label="Email"
            class="mb-6"
            required
            :error="state.formErrors.email"
          >
            <UInput
              v-model="registData.email"
              type="email"
              placeholder="youremail@gmail.com"
              size="md"
              @keyup="state.formErrors.email = null"
            />
          </UFormGroup>
          <UFormGroup
            label="Kata Sandi"
            class="mb-6"
            required
            :error="state.formErrors.password"
          >
            <UInput
              v-model="registData.password"
              :type="state.showPassword ? 'text' : 'password'"
              placeholder="Masukkan kata sandi"
              size="md"
              class="relative"
              @keyup="state.formErrors.password = null"
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
          <UFormGroup
            label="Konfirmasi Kata Sandi"
            required
            :error="state.formErrors.re_password"
          >
            <UInput
              v-model="registData.re_password"
              :type="state.showConfirmPass ? 'text' : 'password'"
              placeholder="Masukkan ulang kata sandi"
              size="md"
              class="relative"
              @keyup="state.formErrors.re_password = null"
            >
              <!-- set icon password tampil/tidak -->
              <div
                class="absolute right-0 top-0 cursor-pointer"
                @click="state.showConfirmPass = !state.showConfirmPass"
              >
                <i
                  :class="
                    state.showConfirmPass
                      ? 'dicon-eye-opened'
                      : 'dicon-eye-closed'
                  "
                  class="py-2 px-3"
                ></i>
              </div>
            </UInput>
          </UFormGroup>
          <ButtonsCommon type="submit" class="w-full mt-6"
            >Daftar</ButtonsCommon
          >
        </form>
      </template>
    </AuthForm>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const router = useRouter()
const axios = useNuxtApp().$axiosInstance

definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'minified',
})

const state = reactive({
  showPassword: false,
  showConfirmPass: false,
  formErrors: {
    full_name: null,
    username: null,
    email: null,
    password: null,
    re_password: null,
  },
})

// v-model untuk menampung data form
const registData = reactive({
  full_name: '',
  username: '',
  email: '',
  password: '',
  re_password: '',
})

const onRegister = async () => {
  try {
    if (registData.password !== registData.re_password) {
      state.formErrors.re_password =
        'Password tidak sesuai. Silakan cek kembali!'
    } else {
      await axios.post('/auth/register', registData)
      await axios.post('/auth/otp', { email: registData.email })
      localStorage.setItem('Token', response.data.data.token.token)
      localStorage.setItem('user', JSON.stringify(response.data.data.user))
      router.push({
        path: '/auth/otp-confirm',
        query: { email: registData.email },
      })
    }
  } catch (err) {
    const fullError = err.response.data.errors
    if (fullError.full_name) {
      state.formErrors.full_name = fullError.full_name.join(', ')
    }
    if (fullError.username) {
      state.formErrors.username = fullError.username.join(', ')
    }
    if (fullError.email) {
      state.formErrors.email = fullError.email.join(', ')
    }
    if (fullError.password) {
      state.formErrors.password = fullError.password.join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 33px;

  @media (min-width: 1024px) {
    padding: 400px 33px;
  }
}
</style>
