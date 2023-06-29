<template>
  <NuxtLayout name="minified">
    <div class="container max-w-sm mx-auto flex place-items-center h-full">
      <AuthForm>
        <template #page-title>Daftar Akun</template>
        <template #cto>
          <div>
            Sudah punya akun?
            <NuxtLink to="/" class="text-[#B6AE03]">Masuk disini</NuxtLink>
          </div>
        </template>
        <template #form-input>
          <form action="">
            <UFormGroup label="Nama Lengkap" class="mb-6">
              <UInput
                v-model="fullname"
                placeholder="Masukkan nama lengkap"
                size="md"
              />
            </UFormGroup>
            <UFormGroup label="Username" class="mb-6">
              <UInput
                v-model="username"
                placeholder="Masukkan username"
                size="md"
              />
            </UFormGroup>
            <UFormGroup label="Email" class="mb-6">
              <UInput
                v-model="email"
                type="email"
                placeholder="Masukkan email"
                size="md"
              />
            </UFormGroup>
            <UFormGroup label="Kata Sandi" class="mb-6">
              <UInput
                v-model="password"
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
                      state.showPassword
                        ? 'dicon-eye-opened'
                        : 'dicon-eye-closed'
                    "
                    class="py-2 px-3"
                  ></i>
                </div>
              </UInput>
            </UFormGroup>
            <UFormGroup label="Konfirmasi Kata Sandi">
              <UInput
                v-model="confirmPass"
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
  </NuxtLayout>
</template>

<script setup>
import { reactive } from 'vue'

// v-model untuk menampung data form
const fullname = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPass = ref('')

const state = reactive({
  showPassword: false,
  showConfirmPass: false,
})

// const axios = useNuxtApp().$axios

// onMounted(() => {
//   axios.get('/api/hello').then((response) => {
//     console.log('response:', response)
//   })
// })
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 33px;
}
</style>
