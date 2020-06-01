<template>
  <h1 class="main-title">{{ text }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.main-title {
  font-size: $title;
  color: $dark-gray;
  font-weight: 600;
  letter-spacing: 0.48px;
  line-height: 1.33;
  font-stretch: normal;
  font-style: normal;
}
</style>
