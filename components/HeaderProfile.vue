<template>
  <div class="bg-[#FFFD00] h-[100px] p-[10px] flex items-center">
    <NuxtLink to="/">
      <img src="~assets/icons/back-arrow.svg" width="40" />
    </NuxtLink>
    <h2 class="text-lg font-semibold flex-grow self-center">
      <slot name="page-title"> Profile </slot>
    </h2>
  </div>

  <div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
