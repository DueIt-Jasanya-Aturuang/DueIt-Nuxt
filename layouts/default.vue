<template>
  <div class="sm:max-w-sm sm:mx-auto w-full">
    <!-- body content -->
    <div>
      <slot />
    </div>
    <!-- footer -->
    <div class="footer-wrapper max-w-sm">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
</script>

<style lang="scss" scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: inherit;
  max-width: inherit;
}
</style>
