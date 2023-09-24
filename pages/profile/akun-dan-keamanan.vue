<template>
  <div class="flex flex-col gap-2 relative">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Akun & Keamanan </span>
      </template>
      <div class="p-3">
        <div
          class="border flex flex-col gap-4 px-4 py-5 border-gray-300 bg-white rounded-2xl shadow-sm"
        >
          <div
            v-for="menu in menuAkun"
            :key="menu.id"
            class="flex justify-between items-center"
          >
            <div class="flex w-[316px] h-[40px] gap-2 items-center">
              <p class="font-semibold">{{ menu.title }}</p>
            </div>
            <NuxtLink :to="`/profile${menu.urlPage}`">
              <span class="flex gap-3">
                <p class="text-blue-500">{{ menu.subtitle }}</p>
                <Icon name="iconamoon:arrow-right-2" color="black" size="24" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Upper menu -->
    </HeaderProfile>
  </div>
</template>

<script setup>
definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'header',
})
const menuAkun = [
  {
    id: 1,
    title: 'Pengaturan Profile',
    subtitle: '',
    urlPage: '/edit-profile',
  },
  {
    id: 2,
    title: 'Ubah Password',
    subtitle: '',
    urlPage: '/ubah-kata-sandi',
  },
  {
    id: 3,
    title: 'Username',
    subtitle: 'Kevin_2000',
    urlPage: '',
  },
  {
    id: 4,
    title: 'Email',
    subtitle: 'K*****@gmail.com',
    urlPage: '',
  },
]
</script>
