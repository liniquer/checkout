<template>
  <div class="footer-clean">
    <img
      src="./../../assets/images/icons/greenbox-logo.png"
      alt="Powered by GreenBox"
    />
  </div>
</template>

<script>
export default {
  name: "FooterClean"
};
</script>

<style lang="scss" scoped>
.footer-clean {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @include media("<=tablet") {
    display: none;
  }

  img {
    width: 181px;
  }
}
</style>
s
