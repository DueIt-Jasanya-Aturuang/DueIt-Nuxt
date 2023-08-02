<template>
  <div class="flex flex-col gap-8">
    <div
      class="bg-[#FFFD00] h-[100px] p-[10px] gap-[25px] flex flex-col justify-center"
    >
      <div class="flex items-center w-[23vw]">
        <NuxtLink to="/">
          <img src="~assets/icons/left-arrow.svg" width="40" />
        </NuxtLink>
        <p class="font-bold text-lg mb-1 mx-auto">Profile</p>
      </div>
    </div>
    <div
      class="flex flex-col justify-center bg-[#FFFA6B] h-[114px] border rounded-lg drop-shadow-[0_2px_2px_0px_#00000026] px-5"
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
