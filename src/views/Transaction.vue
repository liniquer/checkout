<template>
  <div class="main">
    <header class="main__header">
      <QCLogo class="main__header--logo" />
      <div class="main__header--title">
        <Title :text="currentPhrase" />

        <transition name="slide-fade">
          <div v-if="lastStep" class="success-transaction">
            <p class="success-transaction--text">
              Please note that your order payment using [Card Brand] ending in
              [****Last 4] will appear on your card statement as:
            </p>
            <h4 class="success-transaction--user-name">[{{ userName }}]</h4>
          </div>
        </transition>
      </div>
    </header>
    <div class="main__warning-box" @click="nextStep()">
      <radial-progress-bar
        class="main__warning-box__circle"
        :diameter="240"
        :completed-steps="completedSteps"
        :total-steps="totalSteps"
        :strokeWidth="strokeWidth"
        :innerStrokeColor="innerStrokeColor"
        :startColor="startColor"
        :stopColor="stopColor"
      >
      </radial-progress-bar>
      <div class="main__warning-box__circle-warning">
        <transition name="fade">
          <img
            v-if="completedSteps === 0"
            class="icon-warning"
            src="@/assets/images/icons/lock.png"
            alt="Lock"
          />

          <img
            v-if="completedSteps === 1"
            class="icon-warning"
            src="@/assets/images/icons/lock-key.png"
            alt="Lock"
          />
          <img
            v-if="completedSteps === 2"
            class="icon-warning"
            src="@/assets/images/icons/card-success.png"
            alt="Success"
          />
        </transition>
      </div>
      <transition name="slide-fade">
        <div v-if="lastStep" class="main__warning-box__buttons">
          <button class="round-btn btn-yellow-fill">
            Continue Shopping
          </button>
        </div>
      </transition>
    </div>
    <div class="main__footer">
      <FooterClean />
    </div>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import Title from "@/components/atoms/Title";
import FooterClean from "@/components/atoms/FooterClean";
import QCLogo from "@/components/atoms/QCLogo";

export default {
  name: "Transaction",
  components: {
    Title,
    FooterClean,
    QCLogo,
    RadialProgressBar
  },
  data: () => {
    return {
      userName: "Guilherme Zaffari",
      lastStep: false,
      stepPhrases: [
        "Securing transaction",
        "Creating access to your portal",
        "Transaction Successful!"
      ],
      currentPhrase: "",
      completedSteps: 0,
      totalSteps: 2,
      strokeWidth: 10,
      innerStrokeColor: "#fff",
      startColor: "#00cc6e",
      stopColor: "#00cc6e"
    };
  },
  watch: {
    completedSteps: {
      immediate: true,
      handler(val) {
        this.currentPhrase = this.stepPhrases[0];
        if (val === 1) {
          this.currentPhrase = this.stepPhrases[1];
        }
        if (val === 2) {
          this.currentPhrase = this.stepPhrases[2];
          this.lastStep = true;
        }
      }
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {},
    nextStep() {
      if (this.completedSteps < 2) {
        this.completedSteps = this.completedSteps + 1;
      }
    }
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

  &__header {
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

    .success-transaction {
      width: 100%;
      text-align: center;
      margin-top: 16px;
      font-size: $text;
      color: $gray-600;
      line-height: 1.36;
      letter-spacing: 0.22px;

      &--text {
        max-width: 455px;
        margin: 0 auto;
      }

      &--user-name {
        font-weight: 700;
        font-size: $text-medium;
        padding-top: 6px;
        @include media("<=tablet") {
          margin-bottom: 16px;
        }
      }
    }
  }

  &__warning-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;

    .icon-warning {
      width: 160px;
    }

    &__circle {
      position: absolute;
      z-index: 2;
      top: -5px;
    }

    &__circle-warning {
      width: 230px;
      height: 230px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 0;
      margin-bottom: 32px;
    }

    &__buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @include media("<=tablet") {
        margin-bottom: 24px;
      }
    }
  }

  &__footer {
    width: 100%;
    margin-bottom: 26px;
  }
}
</style>
