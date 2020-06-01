<template>
  <div class="shipping">
    <h2 class="shipping--subtitle">Shipping Information</h2>
    <Card class="shipping__user-information">
      <div class="shipping__user-information__warning">
        <div class="shipping__user-information__warning--icon">
          <WarningIcon />
        </div>
        <div class="shipping__user-information__warning--text">
          <h3>
            Before placing your order, please review the information below.
          </h3>
        </div>
      </div>
      <div class="shipping__user-information__data">
        <div v-for="(user, index) in userData" :key="index" class="user-line">
          <span class="user-line--label label-small">{{ user.label }}</span>
          <p class="user-line--text input-text">{{ user.value }}</p>
        </div>
        <router-link to="/leaving">
          <button class="round-btn btn-b-yellow">Edit Information</button>
        </router-link>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/atoms/Card";
import WarningIcon from "@/assets/images/icons/warning.svg";

export default {
  name: "ShippingInformation",
  components: {
    Card,
    WarningIcon
  },
  props: {
    userData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.shipping {
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  &--subtitle {
    font-size: $text-medium;
    color: $dark-gray;
    font-weight: 700;
    letter-spacing: 0.26px;
    font-stretch: normal;
    font-style: normal;
    margin-bottom: 16px;
  }

  &__user-information {
    flex: 1 1 auto;

    &__warning {
      border-bottom: solid 1px #cacaca;
      padding-bottom: 20px;
      margin-bottom: 24px;
      display: flex;

      &--icon {
        margin-right: 13px;
        min-width: 40px;
        object-fit: contain;
        align-self: flex-start;

        svg {
          width: 100%;
          @include media("<=tablet") {
            width: 40px;
          }
        }
      }

      &--text {
        flex: 1 1 auto;
        h3 {
          font-size: $text;
          color: $dark-gray;
          line-height: 1.43;
        }
      }
    }

    &__data {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;

      .user-line {
        width: 100%;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
