<template>
  <!-- <SplashScreen
    v-if="state.showSplashScreen"
    @close-splash="skipSplashScreen"
  /> -->

  <LoadingSkeleton v-if="state.loading" />

  <div v-else class="relative p-4">
    <!-- header public -->
    <div
      v-if="!state.isLoggedIn"
      class="header flex justify-between items-center mb-3"
    >
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
    <!-- end header public -->

    <!-- header logged in -->
    <div
      v-if="state.isLoggedIn"
      class="header flex justify-between items-center mb-3"
    >
      <div class="flex gap-[10px] items-center">
        <img src="~assets/img/avatar.png" class="avatar" alt="avatar" />
        <div>
          <p>Hello, <b>Oktaviani</b></p>
          <p class="text-xs">Kelola keuanganmu atau ia akan meninggalkanmu!</p>
        </div>
      </div>
      <NuxtLink to="/notification" class="notif relative">
        <i class="dicon-notif-no-fill text-[25px]"></i>
        <div class="notif-amount flex justify-center items-center">99</div>
      </NuxtLink>
    </div>
    <!-- end header -->

    <!-- circle chart -->
    <div id="stepone" class="flex justify-between items-center mb-3">
      <div class="text-left">
        <p class="mb-[10px] text-sm">Rencana Pengeluaran</p>
        <button
          class="border rounded-lg border-[#DC4C55] text-[#DC4C55] p-2 font-semibold text-xs"
        >
          Bulan ini
        </button>
        <div class="text-[#B6AE03] mt-5">
          <p class="text-2xl font-semibold">
            Rp{{ state.showSaldo ? '1.000.000' : ' •••• •••• ' }}
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

    <!-- carousel / slider -->
    <HomepageSliderCategory />
    <!-- end carousel -->

    <!-- catatan keuangan -->
    <div id="stepthree" class="mt-5">
      <div class="flex justify-between items-center mb-4">
        <div class="font-medium">Catatan Keuangan</div>
        <div>
          <NuxtLink to="/" class="text-[#938C02] font-medium text-xs"
            >Lihat Detail</NuxtLink
          >
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="card-catatan">
          <div class="flex justify-between items-center mb-[10px]">
            <i class="dicon-rupiahs text-3xl text-[#1F7CB7]"></i>
            <span class="text-[#7C7C7C] text-2xl">•••</span>
          </div>
          <p class="text-sm mb-[10px]">Jumlah Anggaran</p>
          <p class="text-[#67BE20] font-medium">
            <span class="text-sm">Rp</span>550.000
          </p>
        </div>
        <div class="card-catatan">
          <div class="flex justify-between items-center mb-[10px]">
            <i class="dicon-circle-wallet text-3xl text-[#1F7CB7]"></i>
            <span class="text-[#7C7C7C] text-2xl">•••</span>
          </div>
          <p class="text-sm mb-[10px]">Sisa Anggaran</p>
          <p class="text-[#DC4C55] font-medium">
            <span class="text-sm">Rp</span>450.000
          </p>
        </div>
      </div>
    </div>

    <v-tour name="tourHomepage" :steps="steps" :options="vTourOptions"></v-tour>
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
  isLoggedIn: true,
  loading: true,
})

onMounted(() => {
  setTimeout(() => {
    state.loading = false
  }, 1500)
})

const skipSplashScreen = () => {
  state.showSplashScreen = false
}
</script>

<script>
export default {
  data() {
    return {
      vTourOptions: {
        highlight: true,
        labels: {
          buttonSkip: 'Lewati',
          buttonPrevious: 'Kembali',
          buttonNext: 'Lanjut',
          buttonStop: 'Selesai',
        },
      },
      steps: [
        {
          target: '#stepone',
          content: `Fitur ini menampilkan rencana anggaran pengeluaran yang akan anda pakai.`,
        },
        {
          target: '#steptwo',
          content: `Fitur ini menampilkan detail rencana pengeluaran anda yang sebelumnya
            sudah anda pikirkan dengan matang.`,
        },
        {
          target: '#stepthree',
          content: `Fitur ini merupakan catatan keuangan anda yang mana terlihat jumlah anggaran 
            yang dikeluarkan dan sisa anggaran yang telah dipakai.`,
          params: {
            placement: 'top',
          },
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.$tours.tourHomepage.start()
    }, 2000)
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 33px;
}

.card-catatan {
  background-color: #f9ffeb;
  box-shadow: 0px 1px 3px 0px #00000026;
  padding: 12px;
  border-radius: 16px;
}

img.avatar {
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.notif-amount {
  background-color: #dc4c55;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: 2px;
  right: 0px;
  height: 12px;
  width: 12px;
  font-size: 8px;
}
</style>
