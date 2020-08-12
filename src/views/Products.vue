<template>
  <section class="products">
    <div class="products-hero">
      <img src="../assets/images/products-hero.png" class="products-hero-img" />
      <img
        src="../assets/images/products-hero-mobile.png"
        class="products-hero-img--mobile"
      />
      <div class="products-hero-txt">
        <h2>Cheeto's Wine</h2>
        <h3>
          過人品味
          <span>匠心獨到</span>
        </h3>
      </div>
    </div>
    <h2 class="products-title" v-if="wineStyle">
      {{ wineStyle }}
    </h2>
    <h2 class="products-title" v-else>
      所有酒類
    </h2>
    <div class="products-header">
      <div class="container">
        <button
          class="products-header-hamburger"
          @click="mobile.category = !mobile.category"
        >
          分類
          <i class="fas fa-caret-down"></i>
        </button>
        <ul
          class="products-header-category"
          :class="{ active: mobile.category, style: mobile.style }"
        >
          <li>
            <a href="#" @click.prevent="wineStyle = '所有酒款'">所有酒款</a>
          </li>
          <li>
            <a href="#" @click.prevent="wineStyle = '熱門酒款'">熱門酒款</a>
          </li>
          <li>
            <span @click="mobile.style = !mobile.style">
              酒款分類
              <i class="fas fa-caret-down"></i>
            </span>
            <ul>
              <li>
                <a href="#" @click.prevent="wineStyle = '香檳氣泡酒'">
                  氣泡酒
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="wineStyle = '葡萄酒'">
                  葡萄酒
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="wineStyle = '威士忌'">
                  威士忌
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="wineStyle = '其他酒類'">
                  其他酒類
                </a>
              </li>
            </ul>
          </li>
          <li class="products-header-category-sort">
            <span>
              依價格排序
            </span>
            <ul>
              <li>
                <a href="#" @click.prevent="sortData = 'highToLow'">
                  價格：高到低
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="sortData = 'lowToHigh'">
                  價格：低到高
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="products-main">
      <div class="container">
        <div
          class="products-main-item"
          v-for="item in filterProduct"
          :key="item.id"
        >
          <img :src="item.imageUrl" />
          <div class="products-main-txt">
            <h2>
              <a href="#" @click.prevent="goDetail(item)">{{ item.title }}</a>
            </h2>
            <div class="products-main-price">
              <span class="price"> ${{ item.origin_price | currency }} </span>
              <span class="sale-price">SALE ${{ item.price | currency }}</span>
            </div>
            <div class="products-main-info">
              <span>{{ item.options.capacity }}</span>
              <input
                type="text"
                v-model="item.quantity"
                @keyup="checkNum(item)"
              />
            </div>
            <div class="products-main-btn">
              <a href="#" class="btn-init" @click.prevent="addCart(item)">
                <spanner v-if="spannerStatus === item.id"></spanner>
                加入購物車
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import spanner from "../components/Span";
import { addCart } from "../components/JS/addCart";
import { checkNum } from "../components/JS/checkNum";
import { cookie } from "../components/JS/cookie";
export default {
  data() {
    return {
      data: [],
      filterData: [],
      wineStyle: "",
      sortData: "",
      mobile: {
        category: false,
        style: false
      },
      pages: {},
      spannerStatus: ""
    };
  },
  mixins: [addCart, checkNum, cookie],
  components: { spanner },
  created() {
    // 取得 Cookie
    this.wineStyle = this.getCookie("wineType");
    // 刪除cookie，才不會重新進入時保持 wineType
    this.delCookie("wineType");
    this.getProductData();
  },
  methods: {
    getProductData() {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=50`;

      this.axios.get(api).then(res => {
        this.data = res.data.data;
        // vue loading-hide
        loader.hide();
        this.data.forEach(item => {
          this.$set(item, "quantity", 1);
        });
      });
    },
    goDetail(item) {
      document.cookie = `wineId=${item.id}; expires=/; path=/`;
      this.$router.push("/product");
    }
  },
  computed: {
    filterProduct() {
      let filterData = [];
      switch (this.wineStyle) {
        case "其他酒類":
          this.data.forEach(item => {
            if (
              item.category === "清酒" ||
              item.category === "梅酒" ||
              item.category === "礦泉水"
            ) {
              filterData.push(item);
            }
          });
          break;
        case "香檳氣泡酒":
        case "威士忌":
        case "葡萄酒":
          this.data.forEach(item => {
            if (item.category === this.wineStyle) {
              filterData.push(item);
            }
          });
          break;
        case "熱門酒款":
          this.data.forEach(item => {
            if (item.options.popular === true) {
              filterData.push(item);
            }
          });
          break;
        default:
          filterData = this.data;
          break;
      }
      // 價格排序
      filterData.sort((a, b) => {
        if (this.sortData === "highToLow") {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });
      return filterData;
    }
  }
};
</script>
