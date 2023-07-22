<template>
  <SplashScreen
    v-if="state.showSplashScreen"
    @close-splash="skipSplashScreen"
  />
  <div class="relative py-4 px-[22px]">
    <!-- header -->
    <div class="header flex justify-between items-center mb-3">
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
    <div class="flex justify-between items-center">
      <div class="text-left">
        <p class="mb-[10px] text-sm">Rencana Pengeluaran</p>
        <button
          class="border rounded-lg border-[#DC4C55] text-[#DC4C55] p-2 font-semibold text-xs"
        >
          Bulan ini
        </button>
        <div class="text-[#B6AE03] mt-5">
          <p class="text-2xl font-semibold">
            Rp{{ state.showSaldo ? '1.000.000' : '•••••••' }}
            <i
              class="pb-2"
              :class="state.showSaldo ? 'dicon-eye-closed' : 'dicon-eye-opened'"
              @click="state.showSaldo = !state.showSaldo"
            ></i>
          </p>
        </div>
      </div>
      <div>
        <CircleChart />
      </div>
    </div>
    <!-- end circle chart -->

    <!-- carousel -->

    <!-- catatan keuangan -->
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import CircleChart from '~/components/homepage/CircleChart.vue'
import SplashScreen from '~/components/SplashScreen.vue'

// state untuk menampilkan password
const state = reactive({
  showSplashScreen: true,
  showSaldo: true,
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
