<template>
  <div>
    <div class="sm:max-w-sm sm:mx-auto w-full bg-gray-50">
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

<style scoped>
.menu-wrapper {
  position: fixed;
  bottom: 0;
  width: inherit;
  max-width: inherit;
}
</style>
