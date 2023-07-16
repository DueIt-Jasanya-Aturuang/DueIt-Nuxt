<template>
  <NuxtLayout name="minified">
    <SplashScreen
      v-if="state.showSplashScreen"
      @close-splash="skipSplashScreen"
    />
    <div
      class="container relative max-w-sm mx-auto flex place-items-center h-screen"
    >
      <p>Ini homepage sebelum login</p>
      <button
        class="ml-8 border bg-amber-300 p-2 rounded hover:bg-slate-700 hover:text-white"
      >
        <NuxtLink to="/login"> Login </NuxtLink>
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { reactive } from 'vue'
import SplashScreen from '~/components/SplashScreen.vue'

// state untuk menampilkan password
const state = reactive({
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
