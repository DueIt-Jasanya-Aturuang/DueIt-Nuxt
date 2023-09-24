<template>
  <section class="flex flex-col gap-3">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Kategori </span>
      </template>
      <main class="flex flex-col bg-white gap-[219px] relative">
        <div class="flex flex-col gap-3">
          <div
            v-for="menu in menuKategori"
            :key="menu.id"
            class="flex justify-between p-3 border-b shadow-sm"
          >
            <div class="flex gap-3">
              <img :src="menu.src" :alt="menu.alt" />
              <p>{{ menu.title }}</p>
            </div>
            <div class="cursor-pointer">
              <button @click="showModal">
                <Icon
                  name="ant-design:delete-outlined"
                  class="opacity-50 hover:opacity-100"
                />
              </button>
            </div>
          </div>
          <div
            v-show="modalVisible"
            class="absolute bg-white bottom-0 w-full h-full"
          >
            <div class="flex flex-col justify-center items-center gap-4">
              <img src="/assets/img/bro.svg" alt="ask-image" />
              <h1>Anda Yakin ingin menghapusnya</h1>
              <div class="flex gap-4">
                <button
                  class="bg-[#fef9ce] rounded-md hover:bg-[#e3d909] w-[100px] px-3 py-1 text-center"
                  @click="hideModal"
                >
                  Tidak
                </button>
                <button
                  class="bg-[#fef9ce] rounded-md hover:bg-[#e3d909] w-[100px] px-3 py-1 text-center"
                >
                  Ya
                </button>
              </div>
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

const modalVisible = ref(false)

const showModal = () => {
  modalVisible.value = true
}

const hideModal = () => {
  modalVisible.value = false
}

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
