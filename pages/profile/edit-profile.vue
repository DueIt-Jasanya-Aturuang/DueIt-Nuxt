<template>
  <div class="flex flex-col gap-5">
    <HeaderProfile>
      <template #page-title>
        <span class="block text-center"> Profile </span>
      </template>
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-center">
          <div class="w-96">
            <div class="relative">
              <img
                v-if="imageUrl"
                :src="imageUrl"
                alt="Profile Image"
                class="w-20 h-20 mx-auto rounded-full"
              />
              <div
                v-else
                class="w-20 h-20 mx-auto bg-gray-300 rounded-full flex items-center justify-center"
              ></div>
              <label
                for="image-upload"
                class="absolute bottom-0 right-[150px] cursor-pointer"
              >
                <input
                  id="image-upload"
                  type="file"
                  class="hidden"
                  @change="handleImageUpload"
                />
                <span class="flex items-center space-x-2">
                  <Icon
                    name="material-symbols:add-a-photo"
                    color="black"
                    size="20"
                  />
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-col px-2 text-[14px] font-semibold">
          <UForm class="flex flex-col gap-[2rem]" @submit.prevent="submit">
            <div class="flex flex-col gap-[1rem]">
              <UFormGroup label="Nama Lengkap" name="namaLengkap">
                <UInput
                  v-model="state.namaLengkap"
                  class="border-b-2 border-gray-300"
                  variant="none"
                  placeholder="Nama Lengkap"
                />
              </UFormGroup>

              <UFormGroup label="Tanggal Lahir" name="tanggalLahir">
                <UInput
                  v-model="state.tanggalLahir"
                  type="date"
                  class="border-b-2 border-gray-300"
                  variant="none"
                  placeholder="Nama Lengkap"
                />
              </UFormGroup>

              <UFormGroup label="NomorTelepon" name="nomorTelepon">
                <UInput
                  v-model="state.nomorTelepon"
                  type="tel"
                  class="border-b-2 border-gray-300"
                  variant="none"
                  placeholder="Nama Lengkap"
                />
              </UFormGroup>

              <UFormGroup label="Profesi" name="profesi">
                <UInput
                  v-model="state.profesi"
                  type="text"
                  class="border-b-2 border-gray-300"
                  variant="none"
                  placeholder="Nama Lengkap"
                />
              </UFormGroup>

              <UFormGroup label="Jenis Kelamin" name="profesi">
                <URadio label="Laki-laki" />
                <URadio label="Perempuan" />
              </UFormGroup>
            </div>

            <!-- <UButton type="submit" block class="h-[50px]"> Submit </UButton> -->
            <ButtonsCommon class="w-full h-[40px]">Submit</ButtonsCommon>
          </UForm>
        </div>
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
  namaLengkap: '',
  tanggalLahir: '',
  nomorTelepon: '',
  profesi: '',
})

const handleImageUpload = event => {
  const file = event.target.files[0]

  if (file) {
    imageUrl.value = URL.createObjectURL(file)
  }
}
</script>
