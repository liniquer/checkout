<template>
  <div class="footer">
    <div class="footer--circle">
      <LogoCircle />
    </div>
    <div class="footer__yellow">
      <img
        src="./../../assets/images/icons/greenbox-logo.png"
        alt="Powered by GreenBox"
      />
    </div>
  </div>
</template>

<script>
import LogoCircle from "@/assets/images/logo-circle.svg";

export default {
  name: "Footer",
  components: {
    LogoCircle
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: relative;

  &--circle {
    width: 132px;
    height: 144px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;

    @include media("<=tablet") {
      display: none;
    }

    svg {
      width: 144%;
      left: -60px;
      bottom: -47px;
      position: absolute;
    }
  }

  &__yellow {
    width: 100%;
    background: $yellow;
    padding: 21px 40% 21px 10px;
    display: flex;
    justify-content: flex-end;

    img {
      width: 181px;
    }
  }
}
</style>
