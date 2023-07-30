<template>
  <div class="bg-home">
    <div class="bg-white-bottom"></div>
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
.bg-home {
  background: linear-gradient(168.62deg, #ffffff 0%, #f7ffc2 122.31%);
}

.bg-white-bottom {
  background-color: #ffffff;
  height: 60vh;
  width: 100%;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
}

.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: inherit;
  max-width: inherit;
}
</style>
