<template>
  <Swiper
    :slides-per-view="'auto'"
    :free-mode="true"
    :space-between="5"
    :grab-cursor="true"
    :pagination="{ el: '.slider-pagination', clickable: true }"
    :modules="[SwiperFreeMode, SwiperPagination]"
  >
    <SwiperSlide v-for="data in dataSpending" :key="data">
      <HomepageCategory :data-category="data" />
    </SwiperSlide>

    <div class="slider-control">
      <div class="slider-pagination"></div>
    </div>
  </Swiper>
</template>

<script setup>
const dataSpending = [
  {
    id: 1,
    kategori: 'Konsumsi',
    total: 100000,
    terpakai: 5000,
  },
  {
    id: 2,
    kategori: 'Kendaraan',
    total: 150000,
    terpakai: 30000,
  },
  {
    id: 3,
    kategori: 'Kesehatan',
    total: 300000,
    terpakai: 170000,
  },
]
</script>

<style lang="scss" scoped>
.swiper {
  // margin-right: -22px;

  .swiper-slide {
    width: auto !important;
  }
}

.slider-control {
  position: relative;
  z-index: 12;
  padding-top: 12px;

  .slider-pagination {
    text-align: center;

    :deep(.swiper-pagination-bullet) {
      width: 15px;
      height: 5px;
      display: inline-block;
      // background: #dad9d9;
      margin: 0 3px;
      -webkit-border-radius: 6px;
      border-radius: 6px;
      -webkit-transition: opacity 0.5s, background-color 0.5s, width 0.5s;
      -o-transition: opacity 0.5s, background-color 0.5s, width 0.5s;
      transition: opacity 0.5s, background-color 0.5s, width 0.5s;
      -webkit-transition-delay: 0.5s, 0.5s, 0s;
      -o-transition-delay: 0.5s, 0.5s, 0s;
      transition-delay: 0.5s, 0.5s, 0s;
    }
  }

  :deep(.swiper-pagination-clickable .swiper-pagination-bullet) {
    cursor: pointer;
  }

  .slider-pagination :deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background: $primary600;
    width: 31px;
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
  }
}
</style>
