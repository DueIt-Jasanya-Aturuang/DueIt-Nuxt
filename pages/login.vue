<template>
  <main class="site-main w-full h-screen">
    <div class="container max-w-sm mx-auto flex place-items-center h-full">
      <div class="w-full">
        <!-- title -->
        <div class="text-black text-center">
          <div class="flex justify-center items-center mb-2 gap-2">
            <img src="~assets/img/logo-dueit.png" width="30" />
            <span class="page-title">Masuk Akun</span>
          </div>
          <div class="text-xs">
            Belum punya akun?
            <NuxtLink to="/" class="text-orange-400">Daftar disini</NuxtLink>
          </div>
        </div>
        <!-- form -->
        <form action="">
          <ButtonsCommon class="w-full mt-[34px]"></ButtonsCommon>

          <!-- custom content dalam button -->
          <ButtonsCommon class="w-full mt-4">Daftar</ButtonsCommon>
        </form>

        <!-- with google -->
        <ButtonsGoogleLogin class="mt-4" />
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-main {
  background: linear-gradient(180deg, #ffffff -18.12%, #fffdd6 328.31%);

  .container {
    padding: 0 33px;
  }
}

.page-title {
  color: #b6ae03;
  font-size: 20px;
  font-weight: 700;
}
</style>
