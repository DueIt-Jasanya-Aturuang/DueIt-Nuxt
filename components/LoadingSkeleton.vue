<template>
  <div class="py-4 overflow-hidden">
    <div class="flex items-center space-x-4 px-4">
      <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2">
        <USkeleton class="h-3 w-20" />
        <USkeleton class="h-3 w-40" />
      </div>
    </div>
    <div class="flex justify-between items-center mb-6 px-4">
      <div class="text-left">
        <USkeleton class="h-3 w-20 mb-5" />
        <USkeleton class="h-4 w-32" />
      </div>
      <div class="relative">
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="55" cy="55" r="53" stroke="#D9D9D9" stroke-width="4" />
        </svg>
        <USkeleton
          class="h-3 w-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
    <div class="flex gap-2 relative z-50 pl-4">
      <div
        v-for="x in 3"
        :key="x"
        class="h-[118px] w-[119px] bg-[#F0F0F0] rounded-lg flex flex-col justify-between py-4 px-1"
      >
        <div>
          <USkeleton class="h-3 w-[73px] mb-4" />
          <USkeleton class="h-3 w-[73px]" />
        </div>
        <USkeleton class="h-3 w-[73px]" />
      </div>
    </div>
    <div class="mt-12 px-4 relative z-50">
      <div class="flex justify-between items-center mb-4">
        <USkeleton class="h-3 w-[73px]" />
        <USkeleton class="h-3 w-[73px]" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div
          v-for="x in 2"
          :key="x"
          class="h-[118px] w-full bg-[#F0F0F0] rounded-lg flex flex-col justify-between py-4 px-[6px]"
        >
          <USkeleton class="h-3 w-[73px]" />
          <USkeleton class="h-3 w-[73px]" />
          <USkeleton class="h-3 w-[108px]" />
        </div>
      </div>
    </div>
  </div>
</template>
