<template>
  <div
    class="card-category text-white flex flex-col justify-between"
    :style="`--terpakai: 5`"
  >
    <div class="flex justify-between items-center">
      <p class="text-xs font-semibold">Konsumsi</p>
      <p class="text-[10px] font-bold">5%</p>
    </div>
    <p class="font-medium">Rp100.000</p>
    <div class="persentase h-[14px] border border-white rounded-lg relative">
      <div
        class="progress h-[14px] border border-white rounded-lg absolute"
      ></div>
    </div>
    <p class="text-[9px] font-bold">terpakai 5.000</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-category {
  width: 118px;
  height: 118px;
  background: linear-gradient(
    146.66deg,
    #ff4b77 -19.94%,
    rgba(244, 62, 171, 0.89) 118.12%
  );
  box-shadow: 0px 1px 3px 0px #00000026;
  border-radius: 20px;
  padding: 14.5px 9px;
}

.progress {
  top: -1px;
  left: -0.5px;
  background: linear-gradient(270deg, #fc4e8e -5.1%, #ffb8d6 172.45%),
    linear-gradient(0deg, #fff2f8, #fff2f8);
  // width: 5%;
  width: calc((5000 / 100000) * 100%);
}
</style>
