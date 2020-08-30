<template>
  <div class="favorite">
    <div class="container">
      <div class="favorite-header">
        <h2>我的收藏</h2>
        <span v-if="data.length >= 1">{{ data.length }}件商品</span>
        <span v-else>沒有收藏的商品</span>
      </div>
      <div class="favorite-main" v-if="data.length !== 0">
        <div
          class="card-wrap"
          v-for="item in data"
          :key="item.id"
          @click.stop="goDetail(item)"
        >
          <div class="card-favorite" @click.stop="addStared(item)">
            <i v-if="item.stared == true" class="fas fa-bookmark"></i>
            <i v-else class="far fa-bookmark"></i>
          </div>
          <div class="card-img">
            <img :src="item.imageUrl" />
          </div>
          <div class="card-txt">
            <h4 class="item-winery">{{ item.options.winery }}</h4>
            <h3 class="item-title">{{ item.title }}</h3>
          </div>
          <div class="card-info">
            <span class="item-info">
              {{ item.options.year }} | {{ item.options.capacity }} |
              {{ item.category }}
            </span>
          </div>
          <div class="card-box">
            <div class="card-price">
              <span class="sale-price">$ {{ item.price | currency }}</span>
              <span class="price">$ {{ item.origin_price | currency }}</span>
            </div>
            <div class="card-quantity">
              <button type="button" @click.stop="quantity(item, 'reduce')">
                <i class="fas fa-minus"></i>
              </button>
              <input
                type="text"
                v-model="item.quantity"
                @keyup="checkNum(item)"
                @click.stop=""
              />
              <button type="button" @click.stop="quantity(item, 'incre')">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="card-btn">
            <a href="#" class="btn" @click.prevent.stop="addCart(item)">
              加入購物車
            </a>
          </div>
        </div>
      </div>
      <div class="favorite-main" v-else>
        <h3 class="favorite-main-empty">您的收藏列表目前是空的</h3>
      </div>
    </div>
  </div>
</template>

<script>
import addCart from "@/assets/JS/addCart";
import stare from "@/assets/JS/stare";
import checkNum from "@/assets/JS/checkNum";
export default {
  data() {
    return {
      data: []
    };
  },
  mixins: [stare, addCart, checkNum],
  created() {
    this.getFavorite();
  },
  methods: {
    getFavorite() {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=100`;

      this.axios
        .get(api)
        .then(res => {
          const tempData = res.data.data;
          const tempArray = [];
          this.stareData =
            JSON.parse(localStorage.getItem("favoriteWine")) || [];
          tempData.forEach(item => {
            this.stareData.forEach(stareItem => {
              if (item.title === stareItem.title) {
                tempArray.push(item);
                this.$set(item, "stared", true);
                this.$set(item, "quantity", 1);
              }
            });
          });
          this.data = tempArray;
          // vue loading-hide
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    goDetail(item) {
      this.$router.push({ path: "/product", query: { wineId: item.id } });
    },
    quantity(item, type) {
      switch (type) {
        case "incre":
          item.quantity++;
          break;
        default:
          if (item.quantity === 1) {
            return;
          } else {
            item.quantity -= 1;
          }
          break;
      }
    }
  }
};
</script>

<style lang="scss"></style>
