<template>
  <div class="total">
    <p class="total--text">{{ text }}</p>
    <p class="total--price">{{ value | valueToCurrency }}</p>
  </div>
</template>

<script>
export default {
  name: "TotalPrice",
  props: {
    text: {
      type: String,
      default: ""
    },
    value: {
      type: (Number, String),
      default: 0
    }
  },
  filters: {
    valueToCurrency(value) {
      const val = parseFloat(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
.total {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;

  &--text {
    font-size: 20px;
    color: $dark-gray;
    font-weight: 400;
  }

  &--price {
    font-size: 40px;
    color: $dark-gray;
    font-weight: 700;
  }
}
</style>
