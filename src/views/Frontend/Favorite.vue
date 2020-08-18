<template>
  <div class="favorite">
    <div class="container">
      <div class="favorite-header">
        <h2>我的收藏</h2>
        <span v-if="data.length >= 1">{{ data.length }}件商品</span>
        <span v-else>沒有收藏的商品</span>
      </div>
      <div class="favorite-main">
        <div class="favorite-main-item" v-for="item in data" :key="item.id">
          <div class="favorite-main-favorite" @click.stop="addStared(item)">
            <i v-if="item.stared == true" class="fas fa-bookmark"></i>
            <i v-else class="far fa-bookmark"></i>
          </div>
          <img :src="item.imageUrl" />
          <h5>{{ item.options.winery }}</h5>
          <h3>{{ item.title }}</h3>
          <div class="favorite-main-info">
            <span>
              {{ item.options.year }} | {{ item.options.capacity }} |
              {{ item.category }}
            </span>
          </div>
          <div class="favorite-main-box">
            <div class="favorite-main-price">
              <span class="sale-price">$ {{ item.price | currency }}</span>
              <span class="price">$ {{ item.origin_price | currency }}</span>
            </div>
            <div class="favorite-main-quantity">
              <button
                type="button"
                @click="item.quantity -= 1"
                :disabled="item.quantity <= 1"
              >
                <i class="fas fa-minus"></i>
              </button>
              <input
                type="text"
                v-model="item.quantity"
                @keyup="checkNum(item)"
              />
              <button type="button" @click="item.quantity += 1">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="favorite-main-btn">
            <a href="#" @click.prevent="addCart(item)">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addCart } from "@/assets/JS/addCart";
import { stare } from "@/assets/JS/stare";
import { checkNum } from "@/assets/JS/checkNum";
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

      this.axios.get(api).then(res => {
        const tempData = res.data.data;
        const tempArray = [];
        this.stareData = JSON.parse(localStorage.getItem("favoriteWine")) || [];
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
      });
    }
  }
};
</script>

<style lang="scss"></style>
