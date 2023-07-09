<template>
  <div class="splash-screen h-full w-full absolute p-6">
    <div class="max-w-sm mx-auto h-full flex flex-col justify-between">
      <!-- header -->
      <div class="flex flex-row justify-between">
        <div>
          <img src="~assets/img/logo-dueit.svg" width="40" />
        </div>
        <div>
          <button class="cursor-pointer" @click="$emit('closeSplash')">
            Skip
          </button>
        </div>
      </div>
      <!-- content -->
      <div class="text-center pb-12">
        <img
          class="m-auto"
          :src="`/assets/img/${getSplashData().img}`"
          alt=""
        />
        <div class="mt-8">
          <h4 class="mb-6 font-bold text-2xl">{{ getSplashData().title }}</h4>
          <p class="mb-0 font-semibold text-neutral-500">
            {{ getSplashData().subtitle }}
          </p>
        </div>
        <div class="splash-screen-nav my-8">
          <button
            v-for="btn in dataSplash"
            :key="btn.id"
            :class="{ active: btn.id === state.activeScreen }"
          ></button>
        </div>
        <button
          class="btn-next h-8 w-8 rounded-full overflow-hidden"
          @click="nextScreen()"
        >
          <img class="m-auto" src="~assets/icons/arrow-forward.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['closeSplash'])

const state = reactive({
  activeScreen: 1,
  showSplashScreen: true,
})

const dataSplash = [
  {
    id: 1,
    img: 'splash-1.svg',
    title: 'Atur Keuangan',
    subtitle:
      'Kami hadir untuk membantu mengelola keuanganmu dengan mudah dan menyenangkan',
  },
  {
    id: 2,
    img: 'splash-2.svg',
    title: 'Kelola Uang',
    subtitle: 'Bebas Atur Kategori dan Dompet sesuai kebutuhanmu',
  },
  {
    id: 3,
    img: 'splash-3.svg',
    title: 'Pengeluaran Pintar',
    subtitle: 'Tambahkan anggaran untuk mengontrol pengeluaran Anda',
  },
]

// filter splash screen data yang active
const getSplashData = () => {
  const filtered = dataSplash.filter(item => item.id === state.activeScreen)
  return filtered[0]
}

// action button / next screen
const nextScreen = () => {
  if (state.activeScreen === 3) {
    return emit('closeSplash')
  }
  return state.activeScreen++
}
</script>

<style lang="scss" scoped>
.splash-screen {
  background: linear-gradient(180deg, #ffffff -18.12%, #fffdd6 328.31%);
  z-index: 1;
}

.splash-screen-nav {
  button {
    height: 4px;
    width: 10px;
    background-color: #d9d9d9;
    border-radius: 3px;

    &:not(:last-child) {
      margin-right: 2px;
    }

    &.active {
      width: 20px;
      background-color: #525252;
    }
  }
}

.btn-next {
  background: linear-gradient(0deg, #91b920 -159%, #ebe11a 100%);

  &:hover {
    background: #ebe11a;
  }
}
</style>
