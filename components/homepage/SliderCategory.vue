<template>
  <Swiper
    :slides-per-view="'auto'"
    :free-mode="true"
    :space-between="5"
    :pagination="{ clickable: true }"
  >
    <SwiperSlide v-for="data in dataSpending" :key="data">
      <HomepageCategory :data-category="data" />
    </SwiperSlide>
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
  margin-right: -22px;

  .swiper-slide {
    width: auto !important;
  }
}
</style>
