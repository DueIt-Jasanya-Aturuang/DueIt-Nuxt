<template>
  <div class="max-w-sm mx-auto">
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
  width: 100%;
}
</style>
