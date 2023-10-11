<template>
  <main class="flex flex-col gap-2 relative">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Profile </span>
      </template>
      <div class="px-8 py-2">
        <div
          class="flex flex-col justify-center bg-gradient-to-r from-[rgba(255,250,107,1.00)] to-[rgba(255,250,107,0.53)] h-[100px] border rounded-2xl drop-shadow-[0_2px_2px_0px_#00000026] px-5"
        >
          <div class="flex items-center gap-5">
            <span class="rounded-full bg-slate-300 w-[60px] h-[60px]"></span>
            <div class="flex flex-col">
              <p class="font-bold">Kevin Aditama</p>
              <p>Kevin_2000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col px-3">
          <h3 class="text-[#636161] text-sm">Pengaturan</h3>
          <div class="border border-gray-300 rounded-2xl shadow-sm bg-white">
            <NuxtLink to="/profile/akun-dan-keamanan">
              <div class="flex justify-between items-center">
                <div
                  class="flex w-[316px] h-[40px] p-2 gap-3 items-center rounded-md"
                >
                  <Icon
                    name="teenyicons:password-solid"
                    color="#DCD106"
                    size="20"
                  />
                  <p class="font-semibold">Akun & Keamanan</p>
                </div>
                <span
                  ><Icon name="iconamoon:arrow-right-2" color="black" size="24"
                /></span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- Mid menu -->
        <div class="flex flex-col px-3">
          <h3 class="text-[#636161] text-sm">Pengingat Dompetmu</h3>
          <div class="border border-gray-300 bg-white rounded-2xl shadow-sm">
            <div class="flex justify-between items-center">
              <div class="flex w-[316px] h-[40px] p-2 gap-3 items-center">
                <Icon name="uis:calender" color="#DCD106" size="20" />
                <p class="font-semibold">Pengatur harian</p>
              </div>
              <div>
                <button class="cursor-pointer" @click="showModal">
                  <Icon
                    name="iconamoon:arrow-right-2"
                    color="black"
                    size="24"
                  />
                </button>

                <UModal v-model="modalReminder" :ui="{ width: 'w-[27%]' }">
                  <DaySetPopUp />
                </UModal>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex w-[316px] h-[40px] p-2 gap-3 items-center">
                <Icon
                  name="iconamoon:category-fill"
                  color="#DCD106"
                  size="20"
                />
                <p class="font-semibold">Pengaturan kategori</p>
              </div>
              <NuxtLink to="/profile/kategori">
                <span
                  ><Icon name="iconamoon:arrow-right-2" color="black" size="24"
                /></span>
              </NuxtLink>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex w-[316px] h-[40px] p-2 gap-3 items-center">
                <Icon
                  name="mdi:clipboard-text-history"
                  color="#DCD106"
                  size="20"
                />
                <p class="font-semibold">Pengaturan periode</p>
              </div>
              <div>
                <button class="cursor-pointer" @click="showModalPeriod">
                  <Icon
                    name="iconamoon:arrow-right-2"
                    color="black"
                    size="24"
                  />
                </button>

                <UModal v-model="modalPeriod" :ui="{ width: 'w-[27%]' }">
                  <PeriodSetPopUp />
                </UModal>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex w-[316px] h-[40px] p-2 gap-3 items-center">
                <Icon name="solar:wallet-bold" color="#DCD106" size="20" />
                <p class="font-semibold">Ubah metode pembayaran</p>
              </div>
              <NuxtLink to="/profile/metode-pembayaran">
                <span
                  ><Icon name="iconamoon:arrow-right-2" color="black" size="24"
                /></span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Lower menu -->
        <div class="flex flex-col px-3">
          <div class="border border-gray-300 rounded-2xl bg-white shadow-sm">
            <div class="flex items-center justify-between">
              <div class="flex w-[316px] h-[40px] p-2 gap-3 items-center">
                <Icon name="ion:log-out" color="#DCD106" size="20" />
                <p class="font-semibold">Keluar</p>
              </div>
              <span
                ><Icon name="iconamoon:arrow-right-2" color="black" size="24"
              /></span>
            </div>
          </div>
        </div>
      </div>
      <!-- Upper menu -->
    </HeaderProfile>
  </main>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'header',
})

const modalReminder = ref(false)
const modalPeriod = ref(false)

const showModal = () => {
  modalReminder.value = true
}

const hideModal = () => {
  modalReminder.value = false
}

const showModalPeriod = () => {
  modalPeriod.value = true
}

const hideModalPeriod = () => {
  modalPeriod.value = false
}

const midMenu = [
  {
    id: 1,
    title: 'Pengatur harian',
    icon: 'uis:calender',
    link: '/profile/kategori',
  },
  {
    id: 2,
    title: 'Pengaturan kategori',
    icon: 'iconamoon:category-fill',
    link: '/profile/kategori',
  },
  {
    id: 3,
    title: 'Pengaturan periode',
    icon: 'mdi:clipboard-text-history',
    link: '/profile/kategori',
  },
  {
    id: 4,
    title: 'Ubah metode pembayaran',
    icon: 'solar:wallet-bold',
    link: '/profile/kategori',
  },
]
</script>
