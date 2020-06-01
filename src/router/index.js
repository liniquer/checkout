import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue")
  },
  {
    path: "/transaction",
    name: "Transaction",
    component: () => import("../views/Transaction.vue")
  },
  {
    path: "/leaving",
    name: "Leaving",
    component: () => import("../views/Leaving.vue")
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("../views/Error.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
