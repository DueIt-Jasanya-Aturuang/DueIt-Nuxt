<template>
  <section class="flex flex-col gap-3">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Metode Pembayaran </span>
      </template>
      <main class="flex flex-col bg-white gap-[100px] relative">
        <div class="flex flex-col gap-3">
          <div
            v-for="menu in menuBank"
            :key="menu.id"
            class="flex justify-between p-3"
          >
            <div class="flex gap-3">
              <img :src="menu.src" :alt="menu.alt" />
              <p>{{ menu.title }}</p>
            </div>
            <div class="cursor-pointer">
              <Icon
                name="ant-design:delete-outlined"
                class="opacity-50 hover:opacity-100"
              />
            </div>
          </div>
        </div>
        <ButtonsCommon class="w-full h-[40px]"
          >Tambah Kategori Baru</ButtonsCommon
        >
      </main>
    </HeaderProfile>
  </section>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  // set ke layout profilePage
  layout: 'profile-page',
})
const menuBank = [
  {
    id: 1,
    title: 'BRI',
    src: '/assets/img/BRI.svg',
    alt: 'bri',
  },
  {
    id: 2,
    title: 'BNI',
    src: '/assets/img/BNI.svg',
    alt: 'bni',
  },
  {
    id: 3,
    title: 'BCA',
    src: '/assets/img/BCA.svg',
    alt: 'bca',
  },
  {
    id: 4,
    title: 'Bank Mandiri',
    src: '/assets/img/MANDIRI.svg',
    alt: 'bank mandiri',
  },
  {
    id: 5,
    title: 'Bank Permata',
    src: '/assets/img/PERMATA.svg',
    alt: 'bank permata',
  },
  {
    id: 6,
    title: 'Ovo',
    src: '/assets/img/ovo.svg',
    alt: 'ovo',
  },
  {
    id: 5,
    title: 'Bank Permata',
    src: '/assets/img/sedekah.svg',
    alt: 'logo sedekah',
  },
]
</script>
