<template>
  <div class="content">
    <span class="page-title">Masukan Kode OTP</span>
    <div class="page-desc text-start">
      <p>
        Kode OTP telah dikirimkan melalui email
        <a
          :class="`text-[${colors.INFO_700}]`"
          href="mailto:oktavia123@gmail.com"
          >oktavia123@gmail.com</a
        >.
      </p>
    </div>
    <div class="flex justify-center">
      <img
        src="../../assets//ilustration/undraw_mail_sent_re_0ofv 1.svg"
        alt="logo mail"
        width="150"
      />
    </div>
    <!-- <form @submit.prevent="submitOTP"> -->
    <form action="/">
      <OtpInput />
      <div class="resend-kode text-start mb-5 mt-2">
        <p v-if="!resendDisabled">
          Kirim ulang kode
          <span :class="`text-[${colors.PRIMARY_700}]`">{{ countdown }}s</span>
        </p>
        <a v-else href="#" :class="`text-[${colors.INFO_700}]`"
          >kirim ulang kode</a
        >
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
import { ref, onMounted } from 'vue'
import OtpInput from '~/components/auth/OtpInput.vue'
import * as colors from '~/utils/colorsConstant'

const countdown = ref(60)
const resendDisabled = ref(false)
let timer

const submitOTP = () => {
  // Kirim OTP ke API untuk pengecekan
  // Jika berhasil, lanjut ke halaman berikutnya
  // Jika gagal, berikan pesan kesalahan atau ambil tindakan yang sesuai
}

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

onMounted(() => {
  startCountdown()
})
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
