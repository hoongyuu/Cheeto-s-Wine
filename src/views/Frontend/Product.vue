<template>
  <section class="product" v-if="productData.options">
    <loading
      loader="dots"
      :active.sync="isLoading"
      background-color="rgb(173, 92, 0)"
    ></loading>
    <div class="container">
      <div class="product-main">
        <div class="product-main-img">
          <img :src="productData.imageUrl" />
        </div>
        <div class="product-main-txt">
          <div
            class="product-main-favorite"
            @click.stop="addStared(productData)"
          >
            <i v-if="productData.stared == true" class="fas fa-bookmark"></i>
            <i v-else class="far fa-bookmark"></i>
          </div>
          <h4 class="item-winery">{{ productData.options.winery }}</h4>
          <h2 class="item-title">{{ productData.title }}</h2>
          <p class="item-info">
            {{ productData.options.year }} | {{ productData.category }} |
            {{ productData.options.capacity }}
          </p>
          <div class="product-main-box">
            <div class="product-main-price">
              <span class="sale-price"
                >$ {{ productData.price | currency }}</span
              >
              <span class="price"
                >$ {{ productData.origin_price | currency }}</span
              >
            </div>
            <div class="product-main-quantity">
              <button
                type="button"
                @click="productData.quantity -= 1"
                :disabled="productData.quantity <= 1"
              >
                <i class="fas fa-minus"></i>
              </button>
              <input
                type="text"
                v-model="productData.quantity"
                @keyup="checkNum(productData)"
              />
              <button type="button" @click="productData.quantity += 1">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="product-main-btn">
            <button
              type="button"
              class="btn product-main-cart"
              @click="addCart(productData)"
            >
              加入購物車
            </button>
            <button
              type="button"
              class="btn product-main-buy"
              @click="addCart(productData, 'buy')"
            >
              立即購買
            </button>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div class="product-info-item">
          <h3>酒款介紹</h3>
          <div class="product-info-txt">
            <div class="product-info-txt-item">
              <span> <i class="fas fa-map-marker-alt"></i> 產地 </span>
              <h4>{{ productData.options.place }}</h4>
            </div>
            <div class="product-info-txt-item">
              <span><i class="fas fa-wine-bottle"></i> 酒廠</span>
              <h4>{{ productData.options.winery }}</h4>
            </div>
            <div class="product-info-txt-item">
              <span><i class="fas fa-wine-glass-alt"></i> 年份</span>
              <h4>{{ productData.options.year }}</h4>
            </div>
            <div class="product-info-txt-item">
              <span><i class="fas fa-leaf"></i> 品種</span>
              <h4>{{ productData.category }}</h4>
            </div>
          </div>
        </div>
        <div class="product-info-item">
          <h3>酒造資訊</h3>
          <p v-html="productData.description"></p>
        </div>
        <div class="product-info-item">
          <h3>酒評分享</h3>
          <p v-html="productData.content"></p>
        </div>
      </div>
      <div class="product-swiper">
        <h3 class="product-swiper-title">你可能還會喜歡</h3>
        <swiper :product-data="swiperData" @update="resetProduct"></swiper>
      </div>
    </div>
  </section>
</template>

<script>
// jQuery
import $ from "jquery";
import addCart from "@/assets/JS/addCart";
import checkNum from "@/assets/JS/checkNum";
import stare from "@/assets/JS/stare";
import swiper from "@/components/Swiper.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      id: ""
    };
  },
  mixins: [addCart, checkNum, stare],
  components: { swiper },
  created() {
    // 透過傳 URL 取得ID
    const wineId = this.$route.query.wineId;
    this.getProduct(wineId);
    this.getProductsData();
  },
  methods: {
    ...mapActions("productsModules", ["getProductsData"]),
    getProduct(id) {
      this.$store.dispatch("productsModules/getProductData", id);
    },
    resetProduct(id) {
      const wineId = id;
      $("html, body").animate({ scrollTop: 0 }, 500);
      this.getProduct(wineId);
    }
  },
  computed: {
    ...mapGetters("productsModules", ["productData", "productsData"]),
    ...mapGetters(["isLoading"]),
    swiperData() {
      const tempArray = [];
      const tempData = this.$store.state.productsModules.productsData;
      const productData = this.$store.state.productsModules.productData;
      tempData.forEach(item => {
        if (productData.category === item.category) {
          // 不加入重複商品
          if (productData.title === item.title) {
            return;
          }
          tempArray.push(item);
        }
      });

      return tempArray;
    }
  }
};
</script>
