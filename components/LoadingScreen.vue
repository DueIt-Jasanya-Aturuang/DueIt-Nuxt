<template>
  <div class="splash-screen h-full w-full absolute p-6">
    <div class="max-w-sm mx-auto h-full flex flex-col justify-between">
      <img
        class="m-auto w-1/2 animate-pulse"
        src="~assets/img/logo-dueit.svg"
        alt=""
      />
      <div class="text-center">
        <p class="mb-0">
          Dibuat oleh <span class="text-[#1F7CB7]">Jasanya.Tech</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.splash-screen {
  background: linear-gradient(180deg, #ffffff -18.12%, #fffdd6 328.31%);
  z-index: 2;
}
</style>
