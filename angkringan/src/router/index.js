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
    path: "/makanan",
    name: " Makanan",
    component: () =>
      import(/* webpackChunkName: "makanan" */ "../views/Makanan.vue")
  },
  {
    path: "/minuman",
    name: " Minuman",
    component: () =>
      import(/* webpackChunkName: "makanan" */ "../views/Minuman.vue")
  },
  {
    path: "/makanan",
    name: "makanan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Makanan.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Cart.vue")
  },
  {
    path: "/transaction_success",
    name: "Transaction_Success",
    component: () =>
      import(
        /* webpackChunkName: "snack" */ "../components/FinishedTransaction.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
