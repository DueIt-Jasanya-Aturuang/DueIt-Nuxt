<template>
  <footer class="footer w-full flex justify-between">
    <div class="flex">
      <div class="footer-nav">
        <i class="dicon-home-fill"></i>
        <span>Home</span>
      </div>
      <div class="footer-nav">
        <i class="dicon-history"></i>
        <span>Riwayat</span>
      </div>
    </div>
    <div class="plus-circle bg-[#fffdcd] flex justify-center items-center">
      <img src="~/assets/icons/plus-colored.svg" />
    </div>
    <div class="flex">
      <div class="footer-nav">
        <i class="dicon-statistic"></i>
        <span>Laporan</span>
      </div>
      <div class="footer-nav">
        <i class="dicon-profile"></i>
        <span>Profil</span>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 14px 7px;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 2px 5px 0px rgba(0, 0, 0, 0.1), 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #fefefe;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 70px;
}

.plus-circle {
  height: 65px;
  width: 65px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  transform: translateY(-35px);
}
</style>
