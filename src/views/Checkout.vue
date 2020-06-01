<template>
  <div class="main">
    <Modal @close-modal="checkModal($event)" :open="modal">
      <Terms />
    </Modal>

    <div class="main__checkout">
      <header class="main__checkout__header">
        <QCLogo class="main__checkout__header--logo" />
        <Title
          class="main__checkout__header--title"
          text="We're almost there..."
        />
      </header>

      <div class="main__checkout__shipping">
        <ShippingInformation :userData="user" />
      </div>
      <div class="main__checkout__credit-card">
        <CreditCard class="checkout__credit-card__box" />
      </div>
    </div>

    <div class="main__product-list">
      <ProductList
        @open-modal="checkModal($event)"
        :products="products"
        :price="price"
      />
    </div>

    <div class="main__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title";
import Footer from "@/components/atoms/Footer";
import ShippingInformation from "@/components/molecules/ShippingInformation";
import CreditCard from "@/components/molecules/CreditCard";
import ProductList from "@/components/molecules/ProductList";
import QCLogo from "@/components/atoms/QCLogo";
import Modal from "@/components/atoms/Modal";
import Terms from "@/components/atoms/Terms";

export default {
  name: "Checkout",
  components: {
    Title,
    Footer,
    QCLogo,
    ShippingInformation,
    CreditCard,
    ProductList,
    Modal,
    Terms
  },
  data: () => {
    return {
      modal: false,
      user: [
        {
          label: "Contact Information",
          value: "Guilherme Zaffari"
        },
        {
          label: "Email",
          value: "guizaffari@fakemail.com"
        },
        {
          label: "Phone",
          value: "+1 809 234 5678"
        },
        {
          label: "Shipping Address",
          value: "1234 Nowhere St, San Diego, CA 91234, USA"
        },
        {
          label: "Billing Address",
          value: "1234 Nowhere St, San Diego, CA 91234, USA"
        }
      ],
      products: [
        {
          quantity: 2,
          item: "CBD Oil 300mg  - Mint Flavorured",
          price: "19.50 /ea"
        },
        {
          quantity: 4,
          item: "Tropical CBD Cream - Fresh one more line",
          price: "32.00 /ea"
        },
        {
          quantity: 2,
          item: "CBD Oil 300mg  - Mint Flavorured",
          price: "19.50 /ea"
        },
        {
          quantity: 2,
          item: "Tropical CBD Cream - Fresh one more line",
          price: "32.00 /ea"
        },
        {
          quantity: 2,
          item: "CBD Oil 300mg  - Mint Flavorured",
          price: "19.50 /ea"
        },
        {
          quantity: 4,
          item: "Tropical CBD Cream - Fresh one more line",
          price: "32.00 /ea"
        }
      ],
      price: [
        {
          label: "Subtotal",
          value: 103
        },
        {
          label: "Shipping & Handling",
          value: 10
        },
        {
          label: "Discounts",
          value: 8.35
        },
        {
          label: "Taxes",
          value: 10
        },
        {
          label: "Fees",
          value: 8.35
        }
      ]
    };
  },
  methods: {
    checkModal(value) {
      this.modal = value;
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
  &__checkout {
    width: 100%;
    padding: 19px 40% 47px 34px;
    display: flex;
    flex-flow: row wrap;
    padding-right: 40%;
    position: relative;
    z-index: 2;
    flex: 1;

    @include media("<=tablet") {
      padding: 48px 24px 0 24px;
    }

    &__header {
      width: 100%;

      &--logo {
        margin-bottom: 53px;
        @include media("<=tablet") {
          margin: 0 auto 40px auto;
        }
      }
    }

    &__shipping {
      width: 50%;
      display: flex;
      @include media("<=tablet") {
        width: 100%;
      }
    }

    &__credit-card {
      width: 50%;
      padding-left: 24px;
      display: flex;
      @include media("<=tablet") {
        width: 100%;
        padding-left: 0px;
      }

      &__box {
        flex: 1 1 auto;
      }
    }
  }

  &__product-list {
    margin-top: 24px;
    @include media(">tablet") {
      width: 40%;
      height: 100%;
      z-index: 3;
      padding-left: 34px;
      position: absolute;
      right: 0;
      top: 0;
      margin: 0;
    }
  }

  &__footer {
    width: 100%;
    display: flex;
  }
}
</style>
