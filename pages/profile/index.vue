<template>
  <div class="flex flex-col gap-2 relative">
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
            <NuxtLink
              v-for="menu in midMenu"
              :key="menu.id"
              :to="menu.urlPage ? `/profile${menu.urlPage}` : ''"
            >
              <div class="flex justify-between items-center">
                <div class="flex w-[316px] h-[40px] p-2 gap-3 items-center">
                  <Icon :name="menu.icon" color="#DCD106" size="20" />
                  <p class="font-semibold">{{ menu.title }}</p>
                </div>
                <span
                  ><Icon name="iconamoon:arrow-right-2" color="black" size="24"
                /></span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- Lower menu -->
        <div class="flex flex-col px-3">
          <div
            class="border border-gray-300 rounded-2xl bg-white shadow-sm cursor-pointer"
            @click="logout"
          >
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
  </div>
</template>

<script setup>
const axios = useNuxtApp().$axiosInstance
const router = useRouter()

definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'header',
})
const midMenu = [
  {
    id: 1,
    title: 'Pengatur harian',
    icon: 'uis:calender',
  },
  {
    id: 2,
    title: 'Pengaturan kategori',
    icon: 'iconamoon:category-fill',
    urlPage: '/kategori',
  },
  {
    id: 3,
    title: 'Pengaturan periode',
    icon: 'mdi:clipboard-text-history',
  },
  {
    id: 4,
    title: 'Ubah metode pembayaran',
    icon: 'solar:wallet-bold',
    urlPage: '/metode-pembayaran',
  },
]

const logout = async () => {
  try {
    const userId = JSON.parse(localStorage.getItem('user')).id
    console.log(userId)
    await axios.post(
      '/auth/logout',
      {},
      {
        headers: {
          Authorization: localStorage.getItem('Token'),
          'User-ID': userId,
        },
      }
    )
    localStorage.removeItem('Token')
    localStorage.removeItem('user')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>
