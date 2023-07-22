<template>
  <SplashScreen
    v-if="state.showSplashScreen"
    @close-splash="skipSplashScreen"
  />
  <div class="relative py-4 px-[22px]">
    <!-- header -->
    <div class="header flex justify-between items-center">
      <div class="flex gap-[10px] items-center">
        <div
          class="w-[50px] h-[50px] bg-[#F0F0F0] rounded-full flex justify-center items-center text-xl"
        >
          <i class="dicon-camera text-[#D3D3D3]"></i>
        </div>
        <div>
          <p class="text-xs">Hello, Your Name</p>
          <p>Motivation desc.</p>
        </div>
      </div>
      <div class="notif">
        <i class="dicon-notif-no-fill text-2xl"></i>
      </div>
    </div>

    <!-- end header -->

    <!-- circle chart -->

    <!-- carousel -->

    <!-- catatan keuangan -->
  </div>
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
