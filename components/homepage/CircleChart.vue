<template>
  <div class="aspect-square h-full w-full">
    <div class="bg-circle relative" :style="`--num: 40`">
      <svg>
        <circle cx="50%" cy="50%" r="70" class="track"></circle>
        <circle cx="50%" cy="50%" r="70" class="progress"></circle>
      </svg>
      <div class="chart-text absolute top-0 w-full h-full">
        <p class="text-2xl font-semibold">40<sup class="text-xs">%</sup></p>
        <p class="font-medium text-xs">Pengeluaran</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-circle {
  width: 100%;
  text-align: center;
  background: url('~/assets/img/chart-bg.svg') no-repeat;
  background-size: cover;

  svg {
    overflow: visible;
    width: 150px;
    height: 150px;
    transform: rotate(270deg);

    circle {
      width: 100%;
      height: 100%;
      fill: transparent;
      stroke-width: 2.5px;

      &.track {
        stroke: transparent;
      }

      &.progress {
        stroke: $primary600;
        stroke-width: 12px;
        stroke-linecap: round;
        stroke-dasharray: 440;
        stroke-dashoffset: calc(-440 - (-440 * var(--num)) / 100);
      }
    }
  }
}

.chart-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: $primary700;
}
</style>
