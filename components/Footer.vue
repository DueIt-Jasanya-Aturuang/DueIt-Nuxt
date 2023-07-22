<template>
  <footer class="footer flex justify-between">
    <div class="flex">
      <NuxtLink to="/" class="footer-nav">
        <Icon
          name="ic:round-home"
          :color="$route.path === '/' ? '#c7b407' : ''"
          size="2em"
        />
        <!-- <img src="~assets/icons/home-fill.svg" alt="" /> -->
        <span>Home</span>
      </NuxtLink>
      <NuxtLink to="/history" class="footer-nav">
        <i class="dicon-history"></i>
        <span>Riwayat</span>
      </NuxtLink>
    </div>
    <div
      class="plus-circle bg-[#fffdcd] flex justify-center items-center relative"
    >
      <img src="~/assets/icons/plus-colored.svg" />
      <div class="bottom-line absolute bottom-[-24px] bg-[#FFFDCD]"></div>
    </div>
    <div class="flex">
      <NuxtLink to="/report" class="footer-nav">
        <i class="dicon-statistic"></i>
        <span>Laporan</span>
      </NuxtLink>
      <NuxtLink to="/login" class="footer-nav">
        <i class="dicon-profile"></i>
        <span>Profil</span>
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 0px 7px 14px;
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
  padding: 0 15px;

  span {
    font-size: 12px;
  }
}

.plus-circle {
  min-height: 65px;
  min-width: 65px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px);

  .bottom-line {
    height: 3px;
    width: 140%;
  }
}

[class^='dicon-'] {
  font-size: 1.55em;
  padding-bottom: 3px;
}

a {
  &.router-link-active {
    [class^='dicon-'] {
      color: #c7b407;
    }
  }
}
</style>
