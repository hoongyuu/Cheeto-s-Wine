import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Frontend/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Index",
        component: () => import("../views/Frontend/Index.vue")
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/Frontend/Products.vue")
      },
      {
        path: "/product",
        name: "Product",
        component: () => import("../views/Frontend/Product.vue")
      },
      {
        path: "/intro",
        name: "Intro",
        component: () => import("../views/Frontend/Intro.vue")
      },
      {
        path: "/coupon",
        name: "Coupon-front",
        component: () => import("../views/Frontend/Coupon-front.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Frontend/Cart.vue")
      },
      {
        path: "/cart-form",
        name: "Cart-form",
        component: () => import("../views/Frontend/Cart-form.vue")
      },
      {
        path: "/cart-complete",
        name: "Cart-complete",
        component: () => import("../views/Frontend/Cart-complete.vue")
      },
      {
        path: "/favorite",
        name: "Favorite",
        component: () => import("../views/Frontend/Favorite.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Backend/Login.vue")
  },
  {
    path: "/admin",
    component: () => import("../views/Backend/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "BackProducts",
        component: () => import("../views/Backend/BackProducts.vue")
      },
      {
        path: "/admin/coupon",
        name: "Coupon",
        component: () => import("../views/Backend/Coupon.vue")
      }
    ]
  },
  {
    path: "*",
    redirect: "/",
    component: () => import("../views/Frontend/Index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
