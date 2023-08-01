<template>
  <div
    class="card-category text-white flex flex-col justify-between"
    :class="getClassBg(dataCategory.id)"
    :style="`--terpakai: ${getPersentase}%`"
  >
    <div class="flex justify-between items-center">
      <p class="text-xs font-semibold">{{ dataCategory.kategori }}</p>
      <p class="text-[10px] font-bold">{{ getPersentase.toFixed(0) }}%</p>
    </div>
    <p class="font-medium">Rp{{ setCurrency(dataCategory.total) }}</p>
    <div class="persentase h-[14px] border border-white rounded-lg relative">
      <div
        class="progress h-[14px] border border-white rounded-lg absolute"
      ></div>
    </div>
    <p class="text-[9px] font-bold">
      terpakai {{ setCurrency(dataCategory.terpakai) }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  dataCategory: {
    type: Object,
    required: true,
  },
})

const setCurrency = number => {
  return Number(number).toLocaleString('id-ID')
}

const getPersentase =
  (props.dataCategory.terpakai / props.dataCategory.total) * 100

const getClassBg = id => {
  if (id % 3 === 0) {
    return 'card-blue'
  } else if (id % 2 === 0) {
    return 'card-purple'
  } else {
    return 'card-pink'
  }
}
</script>

<style lang="scss" scoped>
.card-category {
  width: 118px;
  height: 118px;
  box-shadow: 0px 1px 3px 0px #00000026;
  border-radius: 20px;
  padding: 14.5px 9px;
  .progress {
    top: -0.5px;
    left: -0.5px;
    width: var(--terpakai);
  }
}

.card-pink {
  background: linear-gradient(
    146.66deg,
    #ff4b77 -19.94%,
    rgba(244, 62, 171, 0.89) 118.12%
  );
  .progress {
    background: linear-gradient(270deg, #fc4e8e -5.1%, #ffb8d6 172.45%),
      linear-gradient(0deg, #fff2f8, #fff2f8);
  }
}

.card-purple {
  background: linear-gradient(146.66deg, #3cabff -19.94%, #8284fe 118.12%);
  .progress {
    background: linear-gradient(270deg, #838aff -5.1%, #92afff 172.45%),
      linear-gradient(0deg, #fff2f8, #fff2f8);
  }
}

.card-blue {
  background: linear-gradient(146.66deg, #1a6bec -19.94%, #42bddf 118.12%);
  .progress {
    background: linear-gradient(270deg, #2bbcef -5.1%, #1c6ded 172.45%),
      linear-gradient(0deg, #fff2f8, #fff2f8);
  }
}
</style>
