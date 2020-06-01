<template>
  <h1 class="sub-title">{{ text }}</h1>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-title {
  font-size: $subtitle;
  color: $dark-gray;
  font-weight: 700;
  letter-spacing: 0.26px;
  font-stretch: normal;
  font-style: normal;
}
</style>
