<template>
  <div class="bg-[#FFFD00] h-[80px] p-[10px] flex items-center">
    <div @click="$router.back()">
      <img src="~assets/icons/back-arrow.svg" width="32" />
    </div>
    <h2 class="text-lg font-bold flex-grow self-center">
      <slot name="page-title"> Profile </slot>
    </h2>
  </div>

  <div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
