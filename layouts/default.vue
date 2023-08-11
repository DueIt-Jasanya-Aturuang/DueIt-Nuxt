<template>
  <div class="bg-home">
    <div class="bg-white-bottom"></div>
    <div class="sm:max-w-sm sm:mx-auto w-full">
      <!-- body content -->
      <div class="mb-[59px]">
        <slot />
      </div>
      <!-- menu nav (mobile) -->
      <div class="menu-wrapper max-w-sm">
        <MainMenu />
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'
</script>

<style lang="scss" scoped>
.bg-home {
  background: linear-gradient(168.62deg, #ffffff 0%, #f7ffc2 122.31%);
}

.bg-white-bottom {
  background-color: #ffffff;
  height: 60vh;
  width: 100%;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
}

.menu-wrapper {
  position: fixed;
  bottom: 0;
  width: inherit;
  max-width: inherit;
}
</style>
