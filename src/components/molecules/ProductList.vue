<template>
  <div class="product-list">
    <Subtitle class="product-list--subtitle" text="Product List" />

    <div class="product-list__products">
      <vuescroll :ops="scroll">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="product-list__products__item"
        >
          <span class="product-list__products__item--chip"
            >{{ item.quantity }}x</span
          >
          <div class="product-list__products__item__info">
            <p class="price-item">{{ item.item }}</p>
            <p class="price-value">${{ item.price }}</p>
          </div>
        </div>
      </vuescroll>
    </div>

    <div class="product-list__price-detail">
      <div
        v-for="(item, index) in price"
        :key="index"
        class="product-list__price-detail__line"
      >
        <p class="price-item">{{ item.label }}</p>
        <p class="price-value">{{ item.value | valueToCurrency }}</p>
      </div>
      <TotalPrice text="Grand Total" value="70.50" />
    </div>

    <div class="product-list__agree">
      <div class="product-list__agree__line">
        <input type="checkbox" id="term" v-model="termCheck" />
        <label for="term" class="checkbox-yellow"></label>
        <p class="label-checkbox">
          I Agree with the
          <span @click="modalToggle()">Terms of Service</span>
        </p>
      </div>

      <div class="product-list__agree__line">
        <input type="checkbox" id="policy" v-model="policyCheck" />
        <label for="policy" class="checkbox-yellow"></label>
        <p class="label-checkbox">
          I Accept the
          <span @click="modalToggle()">Privacy Policy</span>
        </p>
      </div>
    </div>
    <router-link to="/transaction">
      <button class="round-btn btn-b-yellow" :disabled="isDisable">
        Pay Now
      </button>
    </router-link>
  </div>
</template>

<script>
import vuescroll from "vuescroll";
import Subtitle from "@/components/atoms/Subtitle";
import TotalPrice from "@/components/atoms/TotalPrice";

export default {
  name: "ProductList",
  components: {
    Subtitle,
    TotalPrice,
    vuescroll
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    price: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    valueToCurrency(value) {
      const val = value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
      return val;
    }
  },
  data: () => {
    return {
      termCheck: false,
      policyCheck: false,
      isDisable: true,
      scroll: {
        rail: {
          background: "#f7f7f7",
          size: "2px",
          keepShow: true,
          opacity: 1
        },
        bar: {
          background: "#919191",
          size: "4px"
        }
      }
    };
  },
  watch: {
    termCheck: {
      immediate: true,
      handler() {
        this.checkTerms();
      }
    },
    policyCheck: {
      immediate: true,
      handler() {
        this.checkTerms();
      }
    }
  },
  methods: {
    checkTerms() {
      if ((this.termCheck === true) & (this.policyCheck === true)) {
        this.isDisable = false;
      } else {
        this.isDisable = true;
      }
    },
    modalToggle() {
      this.$emit("open-modal", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  width: 100%;
  height: 100%;
  padding: 114px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  &--subtitle {
    margin-bottom: 30px;
  }

  &__products {
    width: 100%;
    border-bottom: solid 1px #cacaca;
    max-height: 40%;
    overflow-y: auto;

    &__item {
      width: 100%;
      display: flex;
      margin-bottom: 24px;
      padding-right: 20px;

      &--chip {
        background: $yellow;
        width: 48px;
        height: 32px;
        color: $dark-gray;
        font-size: $text;
        font-weight: 700;
        border-radius: 20px;
        justify-content: center;
        margin-right: 16px;
        align-items: center;
        display: flex;
      }

      .price-item {
        padding-right: 20px;
      }

      .price-value {
        white-space: nowrap;
      }

      &__info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
      }
    }
  }

  .price-item {
    color: $dark-gray;
    font-size: $text;
    font-weight: 400;
  }

  .price-value {
    color: $dark-gray;
    font-size: $text;
    font-weight: 700;
  }

  &__price-detail {
    width: 100%;
    margin-top: 24px;

    &__line {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      align-items: center;
    }
  }

  .round-btn {
    width: 100%;
  }

  &__agree {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;

    &__line {
      width: 100%;
      display: flex;
      margin-bottom: 16px;
    }
  }
}
</style>
