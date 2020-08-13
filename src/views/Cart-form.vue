<template>
  <div class="container">
    <div class="cart-form-wrap">
      <div class="cart-form">
        <div class="cart-form-header">
          <h2>訂購人資料</h2>
          <router-link to="/cart">
            <i class="fas fa-angle-left"></i> 購物車
          </router-link>
        </div>
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="formSubmit">
            <div class="cart-form-split">
              <div class="item">
                <ValidationProvider rules="required" v-slot="{ classes }">
                  <label for="cartName">姓名</label>
                  <input
                    type="text"
                    placeholder="請輸入姓名"
                    id="cartName"
                    name="姓名"
                    :class="classes"
                    v-model="formData.name"
                  />
                </ValidationProvider>
              </div>
              <div class="cart-form-radio">
                <label for="cartMale">先生</label>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  id="cartMale"
                  v-model="formData.sex"
                />
                <label for="cartFemale">小姐</label>
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  id="cartFemale"
                  v-model="formData.sex"
                />
              </div>
            </div>
            <div class="cart-form-split">
              <div class="item">
                <ValidationProvider
                  rules="required|min8"
                  v-slot="{ errors, classes, passed }"
                >
                  <label for="cartPhone">聯絡手機</label>
                  <input
                    type="tel"
                    placeholder="請輸入手機號碼"
                    id="cartPhone"
                    name="聯絡電話"
                    :class="classes"
                    v-model="formData.tel"
                  />
                  <span class="invalid" v-if="passed === false">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>
              </div>
              <div class="item">
                <ValidationProvider v-slot="{ classes }">
                  <label for="cartBirth">生日</label>
                  <input
                    type="date"
                    id="cartBirth"
                    v-model="formData.birthday"
                    :class="classes"
                  />
                </ValidationProvider>
              </div>
            </div>
            <div class="cart-form-whole">
              <div class="item">
                <ValidationProvider
                  rules="required|email"
                  v-slot="{ errors, passed, classes }"
                >
                  <label for="cartEmail">Email</label>
                  <input
                    type="email"
                    id="cartEmail"
                    name="Email"
                    placeholder="請輸入電子郵件"
                    v-model="formData.email"
                    :class="classes"
                  />
                  <span class="invalid" v-if="passed === false">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>
              </div>
            </div>
            <div class="cart-form-whole">
              <div class="item">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors, classes, passed }"
                >
                  <label for="cartAddress">地址</label>
                  <input
                    type="text"
                    id="cartAddress"
                    name="地址"
                    placeholder="請輸入地址"
                    v-model="formData.address"
                    :class="classes"
                  />
                  <span class="invalid" v-if="passed === false">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>
              </div>
            </div>
            <div class="cart-form-whole">
              <div class="item">
                <label for="cartPurchase">購買方式</label>
                <select id="cartPurchase" v-model="formData.payment" required>
                  <option value="" disabled>請選擇付款方式</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="Credit">Credit</option>
                  <option value="GooglePay">GooglePay</option>
                  <option value="ApplePay">ApplePay</option>
                </select>
              </div>
            </div>
            <div class="cart-form-whole">
              <div class="item">
                <label for="cartMessage">備註</label>
                <textarea
                  id="cartMessage"
                  rows="3"
                  placeholder="歡迎留下備註"
                  v-model="formData.message"
                ></textarea>
              </div>
              <div class="cart-form-btn">
                <button type="submit" :disabled="invalid">確認付款</button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div class="cart-info" v-if="readyLoad">
        <p class="cart-info-tips">
          訂單確認完成後，5~7個工作天內宅配到貨或是通知指定門市取貨。
        </p>
        <div class="cart-info-total">
          <ul>
            <li>
              <h3>商品總額</h3>
              <span>$ {{ totalMoney | currency }}</span>
            </li>
            <li>
              <h3>折扣碼</h3>
              <div class="cart-info-coupon">
                <input type="text" v-model="couponCode" />
                <button type="button" @click="getCoupon">確認</button>
              </div>
            </li>
            <li>
              <h3>折價</h3>
              <span v-if="coupon.percent">
                -$
                {{ Math.floor(totalMoney * (coupon.percent / 100)) | currency }}
              </span>
              <span v-else>-$ 0</span>
            </li>
            <li>
              <h3>總計</h3>
              <span v-if="coupon.percent">
                $
                {{
                  Math.floor(totalMoney - totalMoney * (coupon.percent / 100))
                    | currency
                }}
              </span>
              <span v-else>$ {{ totalMoney | currency }}</span>
            </li>
          </ul>
        </div>
        <div class="cart-info-products">
          <h3>購買商品</h3>
          <div
            class="cart-info-item"
            v-for="item in cartData"
            :key="item.product.id"
          >
            <div class="info">
              <img :src="item.product.imageUrl" />
              <div class="txt">
                <h5>{{ item.productData.options.winery }}</h5>
                <h4>{{ item.productData.title }}</h4>
                <span>
                  {{ item.productData.options.year }} |
                  {{ item.productData.options.capacity }} |
                  {{ item.productData.category }}
                </span>
              </div>
            </div>
            <div class="quantity">
              <span>x {{ item.quantity }}</span>
              <span
                >$ {{ (item.quantity * item.product.price) | currency }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readyLoad: false,
      cartData: [],
      couponCode: "",
      coupon: {},
      formData: {
        name: "",
        sex: "",
        tel: "",
        birthday: "",
        email: "",
        address: "",
        payment: "",
        message: ""
      }
    };
  },
  created() {
    this.getCartData();
  },
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
    getCoupon() {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      const code = {
        code: this.couponCode
      };

      this.axios
        .post(api, code)
        .then(res => {
          this.coupon = res.data.data;
          loader.hide();
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "恭喜成功拿到折扣",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(() => {
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: "沒有這個折扣碼唷！",
            showConfirmButton: false,
            timer: 1500
          });
        });
    },
    formSubmit() {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.formData };

      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }

      this.axios
        .post(api, order)
        .then(res => {
          document.cookie = `orderId=${res.data.data.id}; expires=/; path=/`;
          this.$router.push("/cart-complete");
          loader.hide();
        })
        .catch(() => {
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: "建立訂單失敗",
            showConfirmButton: false,
            timer: 1500
          });
          loader.hide();
        });
    }
  },
  computed: {
    totalMoney() {
      const total = this.cartData.reduce((prev, item) => {
        return prev + item.product.price * item.quantity;
      }, 0);
      return total;
    }
  }
};
</script>
