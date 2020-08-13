<template>
  <section class="cart">
    <div class="container">
      <div class="cart-header">
        <h2>購物車</h2>
        <router-link to="/products">
          <i class="fas fa-angle-left"></i>
          繼續選購
        </router-link>
      </div>
      <div class="cart-main" v-if="readyLoad">
        <div
          class="cart-main-item"
          v-for="item in cartData"
          :key="item.product.id"
        >
          <div class="cart-main-info">
            <img :src="item.product.imageUrl" />
            <div class="cart-main-txt">
              <h4>{{ item.productData.options.winery }}</h4>
              <h3>{{ item.product.title }}</h3>
              <span>
                {{ item.productData.options.year }} |
                {{ item.productData.options.capacity }} |
                {{ item.product.category }}
              </span>
            </div>
          </div>
          <div class="cart-main-quantity">
            <button
              type="button"
              @click="updateData(item, 'reduce')"
              :disabled="item.quantity === 1"
            >
              -
            </button>
            <input
              type="text"
              v-model="item.quantity"
              @keyup="checkNum(item)"
              @change="updateData(item)"
            />
            <button type="button" @click="updateData(item, 'increment')">
              +
            </button>
          </div>
          <div class="cart-main-del">
            <button type="button" @click="showDel(item.productData)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <span class="cart-main-price">
            $ {{ (item.product.price * item.quantity) | currency }}
          </span>
        </div>
        <div class="cart-main-confirm">
          <router-link to="/cart-form">確認購物單</router-link>
        </div>
        <!-- delModal -->
        <delModel
          :class="{ active: showModal }"
          :item="delData"
          @close="showModal = false"
          @update="getCartData()"
        ></delModel>
      </div>
    </div>
  </section>
</template>

<script>
import { checkNum } from "../components/JS/checkNum";
import delModel from "../components/DelModal";
export default {
  data() {
    return {
      cartData: [],
      delData: {
        product: {
          title: ""
        }
      },
      readyLoad: false,
      showModal: false
    };
  },
  components: {
    delModel
  },
  created() {
    this.getCartData();
  },
  mixins: [checkNum],
  methods: {
    getCartData() {
      // vue loading-show
      let loader = this.$loading.show();
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.readyLoad = false;
      this.axios.get(api).then(res => {
        this.cartData = res.data.data;

        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=100`;
        this.axios
          .get(api)
          .then(res => {
            const tempData = res.data.data;
            // vue loading-hide
            loader.hide();
            tempData.forEach(item => {
              this.cartData.forEach(cartItem => {
                this.$set(cartItem, "showModal", false);
                if (item.id === cartItem.product.id) {
                  this.$set(cartItem, "productData", item);
                  setTimeout(() => {
                    this.readyLoad = true;
                  }, 0);
                }
              });
            });
          })
          .catch(() => {
            loader.hide();
          });
      });
    },
    updateData(item, type) {
      // vue loading-show
      let loader = this.$loading.show();
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      switch (type) {
        case "increment":
          item.quantity += 1;
          break;
        case "reduce":
          item.quantity -= 1;
          break;
      }

      const cart = {
        product: item.product.id,
        quantity: item.quantity
      };

      this.axios
        .patch(api, cart)
        .then(() => {
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    showDel(item) {
      this.delData = item;
      this.showModal = true;
    }
  }
};
</script>
