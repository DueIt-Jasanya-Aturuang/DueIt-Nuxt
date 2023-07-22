<template>
  <div class="bg-home">
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

.bg-home {
  background: linear-gradient(168.62deg, #ffffff 0%, #f7ffc2 122.31%);
}
</style>
