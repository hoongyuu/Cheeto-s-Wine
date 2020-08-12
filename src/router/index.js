import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/intro",
        name: "Intro",
        component: () => import("../views/Intro.vue")
      },
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/Products.vue")
      },
      {
        path: "/product",
        name: "Product",
        component: () => import("../views/Product.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue")
      },
      {
        path: "/cart-form",
        name: "Cart-form",
        component: () => import("../views/Cart-form.vue")
      },
      {
        path: "/cart-complete",
        name: "Cart-complete",
        component: () => import("../views/Cart-complete.vue")
      },
      {
        path: "/coupon",
        name: "Coupon-front",
        component: () => import("../views/Coupon-front.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Dashboard/Login.vue")
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: () => import("../views/Dashboard/Dashboard.vue"),
    children: [
      {
        path: "/admin/backProducts",
        name: "BackProducts",
        component: () => import("../views/Dashboard/BackProducts.vue")
      },
      {
        path: "/admin/coupon",
        name: "Coupon",
        component: () => import("../views/Dashboard/Coupon.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
