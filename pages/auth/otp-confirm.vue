<template>
  <div class="content">
    <span class="page-title">Masukan Kode OTP</span>
    <div class="page-desc text-start">
      <p>
        Kode OTP telah dikirimkan melalui email
        <span :class="`text-[${colors.INFO_700}]`">{{ state.user.email }}</span>
      </p>
    </div>
    <div class="flex justify-center">
      <img
        src="./../../assets/ilustration/undraw_mail_sent_re_0ofv1.svg"
        alt="logo mail"
        width="150"
      />
    </div>
    <form class="w-full px-10" @submit.prevent="submitOTP">
      <!-- <OtpInput @otp-code="getInputOTP" /> -->
      <UFormGroup
        class="mb-6"
        required
        :error="state.error !== false ? state.error : null"
      >
        <UInput
          v-model="state.otpCode"
          type="text"
          placeholder="Masukkan Kode OTP (6 digit)"
          size="md"
        />
      </UFormGroup>
      <div class="resend-kode text-start mb-5 mt-2">
        <p v-if="!resendDisabled">
          Kirim ulang kode
          <span :class="`text-[${colors.PRIMARY_700}]`">{{ countdown }}s</span>
        </p>
        <p v-else :class="`text-[${colors.INFO_700}]`" @click="resendOtp">
          kirim ulang kode
        </p>
      </div>
      <button
        type="submit"
        class="button-submit-otp text-white"
        :style="`background : ${colors.GRADIENT_BACKGROUND_02}`"
      >
        Verifikasi Kode
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
// import OtpInput from '~/components/auth/OtpInput.vue'
import * as colors from '~/utils/colorsConstant'
const axios = useNuxtApp().$axiosInstance
const router = useRouter()

definePageMeta({
  layout: 'minified',
})

const countdown = ref(60)
const resendDisabled = ref(false)
let timer

const startCountdown = () => {
  let count = countdown.value

  timer = setInterval(() => {
    count--
    countdown.value = count

    if (count === 0) {
      clearInterval(timer)
      resendDisabled.value = true
    }
  }, 1000)
}

const state = reactive({
  user: {},
  otpCode: undefined,
  error: false,
})

onMounted(() => {
  startCountdown()
  getUser()
})

const getUser = () => {
  state.user = JSON.parse(localStorage.getItem('user'))
}

const resendOtp = async () => {
  try {
    await axios.post(
      '/auth/otp',
      { email: state.user.email },
      {
        headers: {
          Type: 'activasi-account',
          'User-ID': state.user.id,
        },
      }
    )
    countdown.value = 60
    startCountdown()
    resendDisabled.value = false
  } catch (err) {
    state.error = err.response
  }
}

const submitOTP = async () => {
  // Kirim OTP ke API untuk pengecekan
  // Jika berhasil, lanjut ke halaman berikutnya
  // Jika gagal, berikan pesan kesalahan atau ambil tindakan yang sesuai
  try {
    await axios.put(
      '/auth/activasi-account',
      {
        email: state.user.email,
        otp: state.otpCode,
      },
      {
        headers: {
          Authorization: localStorage.getItem('Token'),
          'User-ID': state.user.id,
        },
      }
    )
    router.push('/')
  } catch (err) {
    console.log(err)
    state.error = err.response.data.errors.otp[0]
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  padding-top: 105px;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 20px;
  margin: 0 24px;
}

.page-title {
  color: #b6ae03;
  font-size: 24px;
  font-weight: 700;
}

.button-submit-otp {
  width: 100%;
  padding: 12px 0;
  border-radius: 8px;
}
</style>
