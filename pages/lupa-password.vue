<template>
  <div class="container max-w-sm mx-auto flex place-items-center h-full">
    <div class="w-full flex flex-col gap-6">
      <div class="text-center flex flex-col gap-5">
        <h3 class="text-[#938C02] font-bold text-[18px]">Lupa Password</h3>
        <p class="text-black">
          Masukkan alamat email yang terhubung dalam akun ini untuk mereset
          password
        </p>
      </div>
      <img src="/assets/img/fp.svg" alt="logo fp" class="m-auto" />
      <form action="">
        <UFormGroup label="Email" class="mb-6">
          <UInput
            v-model="email"
            type="email"
            placeholder="Masukkan email"
            size="md"
          />
        </UFormGroup>
        <ButtonsCommon class="w-full mt-6">Reset</ButtonsCommon>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

definePageMeta({
  // set ke layout custom / tanpa footer
  layout: 'minified',
})

// v-model untuk menampung data form
const fullname = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPass = ref('')

const state = reactive({
  showPassword: false,
  showConfirmPass: false,
})

// const axios = useNuxtApp().$axios

// onMounted(() => {
//   axios.get('/api/hello').then((response) => {
//     console.log('response:', response)
//   })
// })
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 33px;
}
</style>
