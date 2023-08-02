<template>
  <div class="w-full">
    <!-- title -->
    <div class="text-black text-center mb-14">
      <div class="flex justify-center items-center mb-4 gap-3">
        <NuxtLink to="/">
          <img src="~assets/img/logo-dueit.svg" width="40" />
        </NuxtLink>
        <span class="page-title">
          <slot name="page-title">Masuk Akun</slot>
        </span>
      </div>
      <slot name="cto">
        <div>
          Belum punya akun?
          <NuxtLink to="/register" class="text-[#B6AE03]"
            >Daftar disini</NuxtLink
          >
        </div>
      </slot>
    </div>
    <!-- form -->
    <slot name="form-input"></slot>

    <div class="liner mt-7 mb-4 text-center relative">
      <hr class="border-[#FFDC8A]" />
      <span
        class="text-[#B6AE03] absolute left-1/2 top-1/2 bg-[#FFFCF4] px-2 whitespace-nowrap"
        >atau {{ path === '/regsiter' ? 'daftar' : 'masuk' }} dengan</span
      >
    </div>

    <!-- with google -->
    <GoogleLogin class="mt-4" />
  </div>
</template>

<script setup>
import GoogleLogin from './buttons/GoogleLogin.vue'

const path = useRoute().path
</script>

<style lang="scss" scoped>
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
