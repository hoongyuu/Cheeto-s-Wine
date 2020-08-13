<template>
  <div class="cart-complete">
    <div class="container" v-if="data.products">
      <div class="cart-complete-header">
        <h2>付款成功</h2>
        <span>您好，以下是您的交易資訊</span>
      </div>
      <div class="cart-complete-products">
        <h3>訂單商品</h3>
        <div
          class="cart-complete-item"
          v-for="(item, i) in data.products"
          :key="i"
        >
          <span>{{ item.product.title }}</span>
          <span class="quantity">x {{ item.quantity }}</span>
        </div>
        <div class="cart-complete-products-price">
          <span>總計</span>
          <span v-if="totalMoney === data.amount">
            {{ totalMoney | currency }}
          </span>
          <span v-else>
            {{ Math.floor(totalMoney - data.amount) | currency }}
          </span>
        </div>
      </div>
      <div class="cart-complete-info">
        <div class="cart-complete-item">
          <h3>姓名</h3>
          <p>{{ data.user.name }}</p>
        </div>
        <div class="cart-complete-item">
          <h3>信箱</h3>
          <p>{{ data.user.email }}</p>
        </div>
        <div class="cart-complete-item">
          <h3>地址</h3>
          <p>{{ data.user.address }}</p>
        </div>
        <div class="cart-complete-item">
          <h3>付款狀態</h3>
          <p style="color: green">已完成付款</p>
        </div>
      </div>
      <div class="cart-complete-btn">
        <a href="#" @click.prevent="continueShopping">
          繼續購物 <i class="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { cookie } from "../components/JS/cookie";
export default {
  data() {
    return {
      data: {}
    };
  },
  mixins: [cookie],
  created() {
    // 利用 cookie 來取得訂單 ID
    const orderId = this.getCookie("orderId");
    this.getOrder(orderId);
    this.$bus.$emit("cartUpdate");
  },
  methods: {
    getOrder(id) {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${id}`;

      this.axios.get(api).then(res => {
        this.data = res.data.data;
        loader.hide();
      });
    },
    continueShopping() {
      this.$router.push("/products");
    }
  },
  computed: {
    totalMoney() {
      const products = this.data.products;
      const total = products.reduce((prev, item) => {
        return prev + item.product.price * item.quantity;
      }, 0);
      return total;
    }
  }
};
</script>
