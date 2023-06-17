<template>
  <button class="rounded-lg p-1.5 text-slate-50 font-medium">
    <slot>Masuk</slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  background: linear-gradient(
    270deg,
    #c7b407 -15.75%,
    #c7b407 -15.74%,
    #e3d909 100%
  );
}
</style>
