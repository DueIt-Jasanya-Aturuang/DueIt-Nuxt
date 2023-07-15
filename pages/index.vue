<template>
  <NuxtLayout name="minified">
    <SplashScreen
      v-if="state.showSplashScreen"
      @close-splash="skipSplashScreen"
    />
    <div
      class="container relative max-w-sm mx-auto flex place-items-center h-screen"
    >
      <AuthForm>
        <template #page-title>Masuk Akun</template>
        <template #form-input>
          <form action="/auth/otp">
            <UFormGroup label="Email / Username" class="mb-6">
              <UInput
                v-model="username"
                placeholder="Masukkan email atau username"
                size="md"
              />
            </UFormGroup>
            <UFormGroup label="Kata Sandi">
              <UInput
                v-model="password"
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
                      state.showPassword
                        ? 'dicon-eye-opened'
                        : 'dicon-eye-closed'
                    "
                    class="py-2 px-3"
                  ></i>
                </div>
              </UInput>
            </UFormGroup>
            <div class="w-full flex justify-end mt-4">
              <NuxtLink to="/" class="text-[#B6AE03] text-sm"
                >Lupa Password?</NuxtLink
              >
            </div>
            <ButtonsCommon class="w-full mt-[34px]"></ButtonsCommon>
          </form>
        </template>
      </AuthForm>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { reactive } from 'vue'
import SplashScreen from '~/components/SplashScreen.vue'

// v-model untuk menampung data form
const username = ref('')
const password = ref('')

// state untuk menampilkan password
const state = reactive({
  showPassword: false,
  showSplashScreen: true,
})

const skipSplashScreen = () => {
  state.showSplashScreen = false
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 33px;
}
</style>
