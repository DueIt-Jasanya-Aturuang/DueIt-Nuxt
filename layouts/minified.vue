<template>
  <main class="site-main w-full lg:h-screen overflow-auto">
    <!-- <LoadingScreen v-if="state.isLoading" /> -->
    <slot />
  </main>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import LoadingScreen from '~/components/LoadingScreen.vue'

const state = reactive({
  isLoading: true,
})

onMounted(() => {
  setTimeout(() => {
    state.isLoading = false
  }, 2000)
})
</script>

<style lang="scss" scoped>
.site-main {
  background: linear-gradient(180deg, #ffffff -18.12%, #fffdd6 328.31%);
}
</style>
