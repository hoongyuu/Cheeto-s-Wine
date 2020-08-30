<template>
  <header class="header">
    <nav class="header-navbar clearfix">
      <div class="header-mobile">
        <h2>Cheeto's Wine</h2>
        <div class="header-mobile-btn">
          <router-link
            to="/cart"
            class="header-mobile-cart"
            @click.native="mobileBtn = false"
          >
            <i class="fas fa-shopping-cart"></i>
          </router-link>
          <button
            type="button"
            class="header-mobile-hamburger"
            @click="mobileBtn = !mobileBtn"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div class="container">
        <ul class="header-navbar-list" :class="{ active: mobileBtn }">
          <li>
            <router-link
              @click.native="mobileBtn = false"
              class="header-navbar-link"
              to="/index"
              :class="{ active: $route.name === 'Index' }"
            >
              回首頁
            </router-link>
          </li>
          <li>
            <router-link
              @click.native="mobileBtn = false"
              class="header-navbar-link"
              to="/products"
              :class="{ active: $route.name === 'Products' }"
            >
              商品列表
            </router-link>
          </li>
          <li>
            <router-link
              @click.native="mobileBtn = false"
              class="header-navbar-link"
              to="/intro"
              :class="{ active: $route.name === 'Intro' }"
            >
              酒廠介紹
            </router-link>
          </li>
          <li>
            <router-link
              @click.native="mobileBtn = false"
              class="header-navbar-link"
              to="/coupon"
              :class="{ active: $route.name === 'Coupon-front' }"
            >
              優惠活動
            </router-link>
          </li>
          <li class="header-navbar-mobile">
            <router-link
              @click.native="mobileBtn = false"
              class="header-navbar-link"
              to="/favorite"
              :class="{ active: $route.name === 'Favorite' }"
            >
              我的收藏
            </router-link>
          </li>
          <li>
            <a href="https://github.com/hoongyuu" class="header-navbar-link">
              關於作者
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="header-main">
      <div class="container">
        <ul class="header-main-social">
          <li>
            <router-link to="">
              <i class="fab fa-facebook-f"></i>
            </router-link>
          </li>
          <li>
            <a href="https://github.com/hoongyuu">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <router-link to>
              <i class="fab fa-instagram"></i>
            </router-link>
          </li>
        </ul>
        <div class="header-main-logo">
          <router-link to="/index">
            <h1>Cheeto's Wine</h1>
          </router-link>
        </div>
        <div class="header-main-btn">
          <router-link to="/login" class="header-main-login">登入</router-link>
          <router-link to="/favorite" class="header-main-favorite">
            <i class="far fa-bookmark"></i> 收藏
          </router-link>
          <router-link
            to="/cart"
            class="header-main-cart"
            v-if="cartData.length === 0"
          >
            <i class="fas fa-shopping-cart"></i> 購物車 ( 沒有商品 )
          </router-link>
          <router-link to="/cart" class="header-main-cart" v-else>
            <i class="fas fa-shopping-cart"></i> 購物車( {{ cartData.length }} )
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// jQuery
import $ from "jquery";

export default {
  name: "Navbar",
  data() {
    return {
      mobileBtn: false,
      cartData: []
    };
  },
  created() {
    this.$bus.$on("cartUpdate", this.getCartData);
    this.getCartData();
  },
  mounted() {
    $(window).scroll(() => {
      const scrollTop = $(".header").offset().top;
      if (scrollTop > 150) {
        $(".header-navbar-list").addClass("scroll");
        $(".header-main").addClass("scroll");
      } else {
        $(".header-navbar-list").removeClass("scroll");
        $(".header-main").removeClass("scroll");
      }
    });
  },
  methods: {
    getCartData() {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      this.axios.get(api).then(res => {
        this.cartData = res.data.data;
      });
    }
  }
};
</script>
