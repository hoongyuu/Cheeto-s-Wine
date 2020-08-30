<template>
  <section class="product" v-if="data.options">
    <div class="container">
      <div class="product-main">
        <div class="product-main-img">
          <img :src="data.imageUrl" />
        </div>
        <div class="product-main-txt">
          <div class="product-main-favorite" @click.stop="addStared(data)">
            <i v-if="data.stared == true" class="fas fa-bookmark"></i>
            <i v-else class="far fa-bookmark"></i>
          </div>
          <h4 class="item-winery">{{ data.options.winery }}</h4>
          <h2 class="item-title">{{ data.title }}</h2>
          <p class="item-info">
            {{ data.options.year }} | {{ data.category }} |
            {{ data.options.capacity }}
          </p>
          <div class="product-main-box">
            <div class="product-main-price">
              <span class="sale-price">$ {{ data.price | currency }}</span>
              <span class="price">$ {{ data.origin_price | currency }}</span>
            </div>
            <div class="product-main-quantity">
              <button
                type="button"
                @click="data.quantity -= 1"
                :disabled="data.quantity <= 1"
              >
                <i class="fas fa-minus"></i>
              </button>
              <input
                type="text"
                v-model="data.quantity"
                @keyup="checkNum(data)"
              />
              <button type="button" @click="data.quantity += 1">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="product-main-btn">
            <button
              type="button"
              class="btn product-main-cart"
              @click="addCart(data)"
            >
              加入購物車
            </button>
            <button
              type="button"
              class="btn product-main-buy"
              @click="addCart(data, 'buy')"
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
              <h4>{{ data.options.place }}</h4>
            </div>
            <div class="product-info-txt-item">
              <span><i class="fas fa-wine-bottle"></i> 酒廠</span>
              <h4>{{ data.options.winery }}</h4>
            </div>
            <div class="product-info-txt-item">
              <span><i class="fas fa-wine-glass-alt"></i> 年份</span>
              <h4>{{ data.options.year }}</h4>
            </div>
            <div class="product-info-txt-item">
              <span><i class="fas fa-leaf"></i> 品種</span>
              <h4>{{ data.category }}</h4>
            </div>
          </div>
        </div>
        <div class="product-info-item">
          <h3>酒造資訊</h3>
          <p v-html="data.description"></p>
        </div>
        <div class="product-info-item">
          <h3>酒評分享</h3>
          <p v-html="data.content"></p>
        </div>
      </div>
      <div class="product-swiper">
        <h3 class="product-swiper-title">你可能還會喜歡</h3>
        <swiper :product-data="productData" @update="resetProduct"></swiper>
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
export default {
  data() {
    return {
      data: {},
      productData: [],
      id: ""
    };
  },
  mixins: [addCart, checkNum, stare],
  components: { swiper },
  created() {
    // 利用 cookie 來取得商品 ID
    const wineId = this.$route.query.wineId;
    this.getProduct(wineId);
  },
  methods: {
    getProduct(id) {
      // vue loading-show
      let loader = this.$loading.show();
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;

      this.axios
        .get(api)
        .then(res => {
          this.data = res.data.data;
          this.$set(this.data, "stared", false);
          this.$set(this.data, "quantity", 1);
          this.stareData =
            JSON.parse(localStorage.getItem("favoriteWine")) || [];
          // 檢查有無加入收藏
          this.stareData.forEach(item => {
            if (item.title === this.data.title) {
              this.$set(this.data, "stared", true);
            }
          });
          // 取得 swiper 類似商品資料
          api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=100`;
          return this.axios.get(api);
        })
        .then(res => {
          const tempData = res.data.data;
          const tempArray = [];
          tempData.forEach(item => {
            if (this.data.category === item.category) {
              // 不加入重複商品
              if (this.data.title === item.title) {
                return;
              }
              tempArray.push(item);
            }
          });
          this.productData = tempArray;
          // vue loading-hide
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    resetProduct(id) {
      const wineId = id;
      $("html, body").animate({ scrollTop: 0 }, 500);
      this.getProduct(wineId);
    }
  }
};
</script>
