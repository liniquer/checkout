<template>
  <div class="main">
    <header class="main__leaving-header">
      <QCLogo class="main__leaving-header--logo" />
      <div class="main__leaving-header--title">
        <Title
          class="break-title"
          text="Are you sure you want to leave the checkout?"
        />
      </div>
    </header>
    <div class="main__warning-box">
      <div class="main__warning-box__circle-warning">
        <WarningIcon />
      </div>
      <div class="main__warning-box__buttons">
        <router-link to="/">
          <button class="round-btn btn-b-yellow">
            Yes
          </button>
        </router-link>
        <router-link to="/checkout">
          <button class="round-btn btn-yellow-fill">
            No
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
import WarningIcon from "@/assets/images/icons/warning2.svg";

export default {
  name: "Leaving",
  components: {
    Title,
    FooterClean,
    QCLogo,
    WarningIcon
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
  padding: 0 24px;

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
    }

    .break-title {
      max-width: 390px;
      margin: 0 auto;
      text-align: center;
    }
  }

  &__warning-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__circle-warning {
      width: 230px;
      height: 230px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
      margin-bottom: 32px;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      a:first-child {
        margin-right: 34px;
      }
    }
  }

  &__footer {
    width: 100%;
    margin-bottom: 26px;
  }
}
</style>
