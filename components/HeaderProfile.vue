<template>
  <div class="bg-[#FFFD00] h-[100px] p-[10px] flex gap-[110px] items-center">
    <NuxtLink to="/">
      <img src="~assets/icons/back-arrow.svg" width="40" />
    </NuxtLink>

    <slot name="title">
      <h3 class="font-bold text-lg mb-1">Profile</h3>
    </slot>
  </div>

  <div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
