<template>
  <transition name="fade">
    <div class="modal" v-if="open === true">
      <Card class="modal__card">
        <div class="close-button" @click="modalToggle()">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
        <div class="modal__card__body">
          <vuescroll :ops="scroll">
            <slot></slot>
          </vuescroll>
        </div>
      </Card>
    </div>
  </transition>
</template>

<script>
import vuescroll from "vuescroll";
import Card from "@/components/atoms/Card";

export default {
  name: "Modal",
  components: {
    Card,
    vuescroll
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
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
  methods: {
    modalToggle() {
      this.$emit("close-modal", false);
    }
  }
};
</script>

<style lang="scss" scoped>
$button-size: 20px;
$close-width: ($button-size / 10);

.modal {
  background-color: rgba(74, 74, 74, 0.7);
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: absolute;
  z-index: 10;
  padding-top: 90px;

  .close-button {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;

    .leftright {
      height: 3px;
      width: 20px;
      position: absolute;
      background-color: #000;
      border-radius: 2px;
      transform: rotate(45deg);
      transition: all 0.3s ease-in;
    }

    .rightleft {
      height: 3px;
      width: 20px;
      position: absolute;
      background-color: #000;
      border-radius: 2px;
      transform: rotate(-45deg);
      transition: all 0.3s ease-in;
    }
  }
  .close-button:hover .leftright {
    transform: rotate(-45deg);
    background-color: $yellow;
  }
  .close-button:hover .rightleft {
    transform: rotate(45deg);
    background-color: $yellow;
  }

  &__card {
    width: 60%;
    height: 90%;
    position: relative;
    z-index: 11;
    margin: 0 auto;
    padding: 40px 48px;

    @include media("<=tablet") {
      width: 90%;
      padding: 40px 24px 20px 24px;
    }

    &__body {
      height: 100%;
    }
  }
}
</style>
