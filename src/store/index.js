import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import productsModules from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartData: [],
    stareData: [],
    isLoading: false
  },
  actions: {
    getCartData(context) {
      context.commit("ISLOADING", true);
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      let cartData;
      axios
        .get(api)
        .then(res => {
          cartData = res.data.data;
          // 取得商品資料
          api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=100`;
          return axios.get(api);
        })
        .then(res => {
          const tempData = res.data.data;
          tempData.forEach(item => {
            cartData.forEach(cartItem => {
              if (item.id === cartItem.product.id) {
                cartItem.productData = item;
              }
            });
          });
          context.commit("CARTDATA", cartData);
          context.commit("ISLOADING", false);
        })
        .catch(() => {
          context.commit("ISLOADING", false);
        });
    }
  },
  mutations: {
    CARTDATA(state, payload) {
      state.cartData = payload;
    },
    ISLOADING(state, payload) {
      state.isLoading = payload;
    }
  },
  getters: {
    cartData(state) {
      return state.cartData;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },
  modules: {
    productsModules
  }
});
