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
          <UFormGroup label="Nama Lengkap" class="mb-6">
            <UInput
              v-model="registData.full_name"
              placeholder="Masukkan nama lengkap"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Username" class="mb-6">
            <UInput
              v-model="registData.username"
              placeholder="Masukkan username"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Email" class="mb-6">
            <UInput
              v-model="registData.email"
              type="email"
              placeholder="Masukkan email"
              size="md"
            />
          </UFormGroup>
          <UFormGroup label="Kata Sandi" class="mb-6">
            <UInput
              v-model="registData.password"
              :type="state.showPassword ? 'text' : 'password'"
              placeholder="Masukkan kata sandi"
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
          <UFormGroup label="Konfirmasi Kata Sandi">
            <UInput
              v-model="registData.re_password"
              :type="state.showConfirmPass ? 'text' : 'password'"
              placeholder="Masukkan ulang kata sandi"
              size="md"
              class="relative"
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
          <ButtonsCommon class="w-full mt-6">Daftar</ButtonsCommon>
        </form>
      </template>
    </AuthForm>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const axios = useNuxtApp().$axiosInstance

definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'minified',
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
    await axios.post('/auth/register', registData)
  } catch (error) {
    console.log(error)
  }
}

const state = reactive({
  showPassword: false,
  showConfirmPass: false,
})
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 33px;
}
</style>
