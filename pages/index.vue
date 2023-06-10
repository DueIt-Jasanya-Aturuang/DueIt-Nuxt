<template>
  <main class="w-full h-screen">
    <div class="container mx-auto bg-slate-50 flex place-items-center h-full">
      <!-- title -->
      <div class="text-black w-1/2 text-center mx-auto">
        <div class="flex justify-center items-center mb-2 gap-2">
          <img src="~assets/img/logo-dueit.png" width="30" />
          <span class="page-title">Daftar Akun</span>
        </div>
        <span
          >Sudah punya akun?
          <NuxtLink to="/login" class="text-orange-400"
            >Masuk di sini</NuxtLink
          ></span
        >
      </div>
      <!-- form -->

      <!-- with google -->
    </div>
  </main>
</template>

<script setup>
// const axios = useNuxtApp().$axios

// onMounted(() => {
//   axios.get('/api/hello').then((response) => {
//     console.log('response:', response)
//   })
// })
</script>

<style lang="scss" scoped>
main {
  background: linear-gradient(183.06deg, #ffffff -15.68%, #fffdd6 137.87%);
}

.page-title {
  color: #b6ae03;
  font-size: 20px;
  font-weight: 700;
}
</style>
