<template>
  <div class="flex flex-col gap-5">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Ubah Kata Sandi </span>
      </template>
      <div class="flex flex-col px-2 text-[14px] font-semibold">
        <UForm class="flex flex-col gap-[2rem]">
          <div class="flex flex-col gap-[1.5rem]">
            <UFormGroup label="Kata Sandi Lama">
              <UInput
                v-model="state.kataSandiLama"
                class="border-2 border-gray-300 rounded-md"
                variant="none"
                placeholder="Kata Sandi Lama"
              />
              <Icon
                name="mdi:eye"
                color="black"
                size="24"
                class="absolute top-[6px] right-2 cursor-pointer"
              />
            </UFormGroup>

            <UFormGroup label="Kata Sandi Baru">
              <UInput
                v-model="state.kataSandiBaru"
                type="text"
                class="border-2 border-gray-300 rounded-md"
                variant="none"
                placeholder="Kata Sandi Baru"
              />
              <Icon
                name="ph:eye-slash"
                color="#878787"
                size="24"
                class="absolute top-[6px] right-2 cursor-pointer text-[#878787]"
              />
            </UFormGroup>

            <UFormGroup label="Konfirmasi Sandi Baru">
              <UInput
                v-model="state.konfirmasiSandiBaru"
                type="tel"
                class="border-2 border-gray-300 rounded-md"
                variant="none"
                placeholder="Konfirmasi Sandi Baru"
              />
              <Icon
                name="ph:eye-slash"
                size="24"
                class="absolute top-[6px] right-2 cursor-pointer text-[#878787]"
              />
              <p class="text-[#f21000] text-sm mt-[8px]">Kata sandi salah</p>
            </UFormGroup>
          </div>

          <!-- <UButton type="submit" block class="h-[50px]"> Submit </UButton> -->
          <ButtonsCommon class="w-full h-[40px]">Submit</ButtonsCommon>
        </UForm>
      </div>

      <!-- Upper menu -->
    </HeaderProfile>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  // set ke layout profilePage
  layout: 'profile-page',
})

const imageUrl = ref(null)
const inputs = [
  { id: 1, title: 'Nama Lengkap', type: 'text', placeholder: 'nama lengkap' },
]

const state = ref({
  kataSandiLama: '',
  kataSandiBaru: '',
  konfirmasiSandiBaru: '',
})
</script>
