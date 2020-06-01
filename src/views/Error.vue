<template>
  <div class="main">
    <header class="main__leaving-header">
      <QCLogo class="main__leaving-header--logo" />
      <div class="main__leaving-header--title">
        <Title text="Your transaction was declined." />
        <p>Please contact your card holder.</p>
      </div>
    </header>
    <div class="main__warning-box">
      <div class="main__warning-box__circle-error">
        <img src="@/assets/images/icons/error.png" alt="Error" />
      </div>
      <div class="main__warning-box__buttons">
        <router-link to="/checkout">
          <button class="round-btn btn-yellow-fill">
            Back to Checkout
          </button>
        </router-link>
      </div>
    </div>
    <div class="main__footer">
      <FooterClean />
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title";
import FooterClean from "@/components/atoms/FooterClean";
import QCLogo from "@/components/atoms/QCLogo";

export default {
  name: "Error",
  components: {
    Title,
    FooterClean,
    QCLogo
  },
  data: () => {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 0 10px;

  &__leaving-header {
    width: 100%;
    padding-top: 110px;
    @include media("<=tablet") {
      padding-top: 48px;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &--title {
      width: 100%;
      margin-top: 80px;
      @include media("<=tablet") {
        margin-top: 48px;
      }
      text-align: center;
    }

    p {
      font-size: $text;
      color: $gray-600;
      margin-top: 16px;
    }
  }

  &__warning-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__circle-error {
      width: 230px;
      height: 230px;
      background: #d45858;
      border-radius: 50%;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
      margin-bottom: 32px;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90px;
      }
    }

    &__buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  &__footer {
    width: 100%;
    margin-bottom: 26px;
  }
}
</style>
