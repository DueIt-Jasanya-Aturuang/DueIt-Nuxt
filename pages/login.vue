<template>
  <main class="site-main w-full h-screen">
    <div class="container max-w-sm mx-auto flex place-items-center h-full">
      <div class="w-full">
        <!-- title -->
        <div class="text-black text-center mb-14">
          <div class="flex justify-center items-center mb-4 gap-3">
            <img src="~assets/img/logo-dueit.svg" width="40" />
            <span class="page-title">Masuk Akun</span>
          </div>
          <div>
            Belum punya akun?
            <NuxtLink to="/" class="text-[#B6AE03]">Daftar disini</NuxtLink>
          </div>
        </div>
        <!-- form -->
        <form action="">
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
                    state.showPassword ? 'dicon-eye-opened' : 'dicon-eye-closed'
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

        <div class="liner mt-7 mb-4 text-center relative">
          <hr class="border-[#FFDC8A]" />
          <span
            class="text-[#B6AE03] absolute left-1/2 top-1/2 bg-[#FFFCF4] px-2"
            >atau masuk dengan</span
          >
        </div>

        <!-- with google -->
        <ButtonsGoogleLogin class="mt-4" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
// v-model untuk menampung data form
const username = ref('')
const password = ref('')

// state untuk menampilkan password
const state = reactive({
  showPassword: false,
})
</script>

<style lang="scss" scoped>
.site-main {
  background: linear-gradient(180deg, #ffffff -18.12%, #fffdd6 328.31%);

  .container {
    padding: 0 33px;
  }
}

.page-title {
  color: #b6ae03;
  font-size: 24px;
  font-weight: 700;
}

.liner {
  padding: 9px 0;
  span {
    transform: translate(-50%, -60%);
  }
}
</style>
