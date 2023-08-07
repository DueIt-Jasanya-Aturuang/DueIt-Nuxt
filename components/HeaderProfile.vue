<template>
  <div
    class="bg-[#FFFD00] h-[100px] p-[10px] gap-[25px] flex flex-col justify-center"
  >
    <div class="flex items-center w-[23vw]">
      <NuxtLink to="/">
        <img src="~assets/icons/back-arrow.svg" width="40" />
      </NuxtLink>
      <slot name="title">
        <h3 class="font-bold text-lg mb-1 mx-auto">Profile</h3>
      </slot>
    </div>
  </div>
  <div>
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
