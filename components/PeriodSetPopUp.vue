<template>
  <div class="flex flex-col gap-7 p-3 bg-white">
    <h1>Atur Periode Berdasarkan Tanggal</h1>
    <USelect
      v-model="selectedOptionDate"
      :options="dateOptions"
      option-attribute="label"
      value-attribute="value"
    />
    <div class="flex gap-5 items-center justify-center">
      <ButtonsCommon
        class="px-4 py-2 rounded bg-yellow-300 text-white w-full"
        @click="submit"
      >
        Batal
      </ButtonsCommon>
      <ButtonsCommon
        class="px-4 py-2 rounded bg-yellow-400 text-white w-full"
        @click="submit"
      >
        Simpan
      </ButtonsCommon>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedOptionDate = ref('Pilih tanggal')

const dateOptions = [
  { label: 'Pilih tanggal', value: 'Pilih tanggal' },
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
]

const submit = () => {
  if (selectedOptionDate.value) {
    alert('Selected Option: ' + selectedOptionDate.value)
    // You can perform further actions with the selected option here
  } else {
    alert('Please select an option.')
  }
}
</script>
