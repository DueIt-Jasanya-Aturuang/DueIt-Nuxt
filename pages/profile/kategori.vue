<template>
  <section class="flex flex-col gap-3">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Kategori </span>
      </template>
      <main class="flex flex-col bg-white gap-[219px]">
        <div class="flex flex-col gap-3">
          <div
            v-for="menu in menuKategori"
            :key="menu.id"
            class="flex gap-4 p-3 border-b shadow-sm"
          >
            <img :src="menu.src" :alt="menu.alt" />
            <p>{{ menu.title }}</p>
          </div>
        </div>
        <ButtonsCommon class="w-full h-[40px]">Submit</ButtonsCommon>
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

const menuKategori = [
  {
    id: 1,
    title: 'Makanan & Minuman',
    src: '/assets/img/makanan.svg',
    alt: 'logo akanan & minuman',
  },
  {
    id: 2,
    title: 'Transportasi',
    src: '/assets/img/transportasi.svg',
    alt: 'logo transportasi',
  },
  {
    id: 3,
    title: 'Uang Saku',
    src: '/assets/img/uang-saku.svg',
    alt: 'logo uang dan saku',
  },
  {
    id: 4,
    title: 'Kesehatan',
    src: '/assets/img/kesehatan.svg',
    alt: 'logo kesehatan',
  },
  {
    id: 5,
    title: 'Sedekah',
    src: '/assets/img/sedekah.svg',
    alt: 'logo sedekah',
  },
]
</script>
