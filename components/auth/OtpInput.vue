<template>
  <div class="input-otp">
    <input
      v-for="(digit, index) in otpDigits"
      :key="index"
      ref="otpInput"
      v-model="otp[index]"
      :class="`border border-[${colors.PRIMARY_700}]`"
      type="text"
      maxlength="1"
      @input="handleInput(index)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as colors from '~/utils/colorsConstant'

const otpDigits = [1, 2, 3, 4, 5, 6]
const otp = ref(['', '', '', '', '', ''])
const otpInput = ref([])

function handleInput(index) {
  if (otp.value[index] !== '') {
    const nextIndex = index + 1
    if (nextIndex < otp.value.length) {
      const nextInput = otpInput.value[nextIndex]
      nextInput.focus()
      nextInput.select()
    }
  }
}
</script>

<style lang="scss" scoped>
.input-otp {
  display: flex;
  input {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 8px;
    border-radius: 8px;
  }
}
</style>
