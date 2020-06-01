<template>
  <div class="main">
    <div class="fake-site">
      <img src="@/assets/images/fake-site.png" alt="" />
      <CheckoutButton class="checkout-button" />
    </div>
  </div>
</template>

<script>
import CheckoutButton from "@/components/atoms/CheckoutButton";

export default {
  name: "Checkout",
  components: {
    CheckoutButton
  }
};
</script>

<style lang="scss" scoped>
.fake-site {
  width: 1280px;
  display: block;
  margin: 0 auto;
  position: relative;

  img {
    width: 100%;
  }

  .checkout-button {
    position: absolute;
    z-index: 2;
    top: 64%;
    left: 61%;
  }
}
</style>
