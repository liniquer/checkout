<template>
  <router-link to="/checkout">
    <button class="button btn-qc button-yellow">
      <div>
        <img src="@/assets/images/icons/logo-qc-2.png" alt="" /> Pay with
        Quickcard
      </div>
    </button>
  </router-link>
</template>

<script>
export default {
  name: "CheckoutButton"
};
</script>

<style lang="scss" scoped>
.btn-qc {
  width: 244px;
  font-size: 14px;
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 20px;
    margin-right: 5px;
  }
}
</style>
