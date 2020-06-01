<template>
  <div class="credit-card">
    <h2 class="credit-card--subtitle">Shipping Information</h2>
    <Card class="credit-card__card">
      <div class="credit-card__card--img">
        <img
          src="./../../assets/images/credit-card.png"
          alt="User Credit Card"
        />
      </div>
      <div class="credit-card__card__form">
        <fieldset class="credit-card__card__form__field field-full">
          <label for="card-number" class="label-gray">Card Number</label>
          <input
            type="text"
            name="card-number"
            class="field-round field-gray field-full"
          />
        </fieldset>
        <fieldset class="credit-card__card__form__field field-full">
          <label for="card-number" class="label-gray">Name on Card</label>
          <input
            type="text"
            name="card-number"
            class="field-round field-gray field-full"
          />
        </fieldset>
        <div class="fields-col">
          <fieldset class="credit-card__card__form__field field-half">
            <label for="card-number" class="label-gray">Valid Thru</label>
            <input
              type="text"
              name="card-number"
              class="field-round field-gray"
            />
          </fieldset>
          <fieldset class="credit-card__card__form__field field-half">
            <label for="card-number" class="label-gray field-icon">
              CVV
              <span class="info-icon">&#x2139;</span>
            </label>
            <input
              type="text"
              name="card-number"
              class="field-round field-gray"
            />
          </fieldset>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/atoms/Card";

export default {
  name: "CreditCard",
  components: {
    Card
  },
  props: {
    cardImg: {
      type: String,
      default: ""
    },
    cardData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.info-icon {
  background: #ffa701;
  width: 20px;
  height: 20px;
  display: flex;
  margin-left: 7px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
}
.field-icon {
  display: flex;
  align-items: center;
}
.credit-card {
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  &--subtitle {
    font-size: $text-medium;
    color: $dark-gray;
    font-weight: 700;
    letter-spacing: 0.26px;
    font-stretch: normal;
    font-style: normal;
    margin-bottom: 16px;
  }

  &__card {
    flex: 1 1 auto;

    &--img {
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: solid 1px #cacaca;

      img {
        width: 100%;
      }
    }

    &__form {
      display: flex;
      flex-flow: row wrap;
      &__field {
        margin-bottom: 20px;
      }
      .fields-col {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
