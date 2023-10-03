<template>
  <main class="flex flex-col gap-7 p-3">
    <div class="flex items-center justify-between space-x-2">
      <h1>Aktifkan Pengingat</h1>
      <UToggle v-model="isChecked" color="yellow" />
      <!-- <input
        v-model="isChecked"
        type="checkbox"
        class="w-0 h-0 opacity-0 absolute"
      />
      <span
        class="relative inline-block w-12 h-6 rounded-full"
        :class="{ 'bg-gray-500': !isChecked, 'bg-blue-500': isChecked }"
      >
        <span
          v-if="isChecked"
          class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform translate-x-[150%]"
        ></span>
        <span
          v-else
          class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform"
        ></span>
      </span> -->
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-center gap-3">
        <p>Jam</p>
        <USelect
          v-model="selectedOptionHour"
          :options="hourOptions"
          option-attribute="label"
          value-attribute="value"
          :disabled="!isChecked"
        />
        <span>:</span>
        <USelect
          v-model="selectedOptionMinute"
          :options="minuteOptions"
          option-attribute="label"
          value-attribute="value"
          :disabled="!isChecked"
        />
      </div>
      <div class="flex">
        <UCheckbox
          v-for="day in dayName"
          :key="day.value"
          v-bind="day"
          v-model="selectedDay"
          :label="day.name"
          color="transparent"
          :disabled="!isChecked"
          class="outline-none border-none"
        />
      </div>
      <ButtonsCommon
        class="mt-4 px-4 py-2 rounded bg-green-500 text-white"
        :class="{
          'bg-yellow-300 cursor-not-allowed': !isChecked,
          'bg-yellow-400 cursor-pointer': isChecked,
        }"
        :disabled="!isChecked"
        @click="hideModal"
      >
        Simpan
      </ButtonsCommon>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const isChecked = ref(false)
const countries = [
  {
    name: 'United States',
    value: 'US',
  },
  {
    name: 'Canada',
    value: 'CA',
    disabled: true,
  },
  {
    name: 'Mexico',
    value: 'MX',
  },
]
const country = ref('CA')
const selectedOptionHour = ref('01')
const selectedOptionMinute = ref('01')
const selectedDay = ref([])

const hourOptions = [
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
  { label: '04', value: '04' },
  { label: '05', value: '05' },
  { label: '06', value: '06' },
  { label: '07', value: '07' },
  { label: '08', value: '08' },
  { label: '09', value: '09' },
  { label: '10', value: '10 ' },
  { label: '11', value: '11 ' },
  { label: '12', value: '12 ' },
  { label: '13', value: '13 ' },
  { label: '14', value: '14 ' },
  { label: '15', value: '15 ' },
  { label: '16', value: '16 ' },
  { label: '17', value: '17 ' },
  { label: '18', value: '18 ' },
  { label: '19', value: '19 ' },
  { label: '20', value: '20 ' },
  { label: '21', value: '21 ' },
  { label: '22', value: '22 ' },
  { label: '23', value: '23 ' },
  { label: '24', value: '24 ' },
]
const minuteOptions = [
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
  { label: '04', value: '04' },
  { label: '05', value: '05' },
  { label: '06', value: '06' },
  { label: '07', value: '07' },
  { label: '08', value: '08' },
  { label: '09', value: '09' },
  { label: '10', value: '10 ' },
  { label: '11', value: '11 ' },
  { label: '12', value: '12 ' },
  { label: '13', value: '13 ' },
  { label: '14', value: '14 ' },
  { label: '15', value: '15 ' },
  { label: '16', value: '16 ' },
  { label: '17', value: '17 ' },
  { label: '18', value: '18 ' },
  { label: '19', value: '19 ' },
  { label: '20', value: '20 ' },
  { label: '21', value: '21 ' },
  { label: '22', value: '22 ' },
  { label: '23', value: '23 ' },
  { label: '24', value: '24 ' },
  { label: '25', value: '25 ' },
  { label: '26', value: '26 ' },
  { label: '27', value: '27 ' },
  { label: '28', value: '28 ' },
  { label: '29', value: '29 ' },
  { label: '30', value: '30 ' },
  { label: '31', value: '31 ' },
  { label: '32', value: '32 ' },
  { label: '33', value: '33 ' },
  { label: '34', value: '34 ' },
  { label: '35', value: '35 ' },
  { label: '36', value: '36 ' },
  { label: '37', value: '37 ' },
  { label: '38', value: '38 ' },
  { label: '39', value: '39 ' },
  { label: '40', value: '40 ' },
  { label: '41', value: '41 ' },
  { label: '42', value: '42 ' },
  { label: '43', value: '43 ' },
  { label: '44', value: '44 ' },
  { label: '45', value: '45 ' },
  { label: '46', value: '46 ' },
  { label: '47', value: '47 ' },
  { label: '48', value: '48 ' },
  { label: '49', value: '49 ' },
  { label: '50', value: '50 ' },
  { label: '51', value: '51 ' },
  { label: '52', value: '52 ' },
  { label: '53', value: '53 ' },
  { label: '54', value: '54 ' },
  { label: '55', value: '55 ' },
  { label: '56', value: '56 ' },
  { label: '57', value: '57 ' },
  { label: '58', value: '58 ' },
  { label: '59', value: '59 ' },
  { label: '00', value: '00 ' },
]
const dayName = [
  { name: 'Min', value: 'Minggu' },
  { name: 'Sen', value: 'Senin' },
  { name: 'Sel', value: 'Selasa' },
  { name: 'Rab', value: 'Rabu' },
  { name: 'Kam', value: 'Kamis' },
  { name: 'Jum', value: 'Jumat' },
  { name: 'Sab', value: 'Sabtu' },
]

const submit = () => {
  if (
    selectedOptionHour.value &&
    selectedOptionMinute.value &&
    selectedDay.value
  ) {
    alert(
      'Selected Option: ' +
        selectedOptionHour.value +
        selectedOptionMinute.value +
        selectedDay.value
    )
    // You can perform further actions with the selected option here
  } else {
    alert('Please select an option.')
  }
}
</script>

<script>
export default {
  name: 'Child',
}
</script>
