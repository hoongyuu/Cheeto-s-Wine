import Vue from "vue";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
// Vue-loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// sweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
// vue-swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
// 表單驗證元件
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
  configure
} from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import TW from "vee-validate/dist/locale/zh_TW.json";
// 自定義元件
import currency from "./components/JS/currency.js";
// vue-router & app
import App from "./App.vue";
import router from "./router";

// event bus
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

// 全域註冊
Vue.filter("currency", currency);

// 加到 VUE 原型
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(Loading, {
  canCancel: false,
  color: "rgb(173, 92, 0)",
  loader: "dots", //spinner/dots/bars
  width: 80,
  height: 60,
  backgroundColor: "#000",
  isFullPage: true,
  opacity: 0.5
});
Vue.use(VueAwesomeSwiper);

// 表單驗證元件
extend("email", email);
extend("min8", {
  validate(value) {
    return value.length >= 8;
  },
  params: ["length"],
  message: `數字長度不得小於 8`
});
extend("required", {
  // 這邊可以改寫我們 email 告知使用者是必填欄位的提示文字
  ...required,
  message: "必須填寫這個欄位"
});
configure({
  classes: {
    valid: "valid",
    invalid: "invalid"
  }
});
localize("zh_TW", TW);

// 表單驗證元件
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
