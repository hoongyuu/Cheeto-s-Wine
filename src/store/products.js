import axios from "axios";

export default {
  namespaced: true,
  state: {
    productsData: [],
    productData: {}
  },
  actions: {
    getProductsData(context) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=100`;
      context.commit("ISLOADING", true, { root: true });

      axios.get(api).then(res => {
        let data = res.data.data;
        data.forEach(item => {
          item.quantity = 1;
          item.stared = false;
          let stareData =
            JSON.parse(localStorage.getItem("favoriteWine")) || [];
          stareData.forEach(stareItem => {
            if (item.title === stareItem.title) {
              item.stared = true;
            }
          });
        });
        context.commit("PRODUCTSDATA", data);
        context.commit("ISLOADING", false, { root: true });
      });
    },
    getProductData(context, id) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;
      context.commit("ISLOADING", true, { root: true });

      axios.get(api).then(res => {
        let data = res.data.data;
        data.stared = false;
        data.quantity = 1;
        let stareData = JSON.parse(localStorage.getItem("favoriteWine")) || [];
        // 檢查有無加入收藏
        stareData.forEach(item => {
          if (item.title === data.title) {
            data.stared = true;
          }
        });
        context.commit("PRODUCTDATA", data);
        context.commit("ISLOADING", false, { root: true });
      });
    }
  },
  mutations: {
    PRODUCTSDATA(state, payload) {
      state.productsData = payload;
    },
    PRODUCTDATA(state, payload) {
      state.productData = payload;
    }
  },
  getters: {
    productsData(state) {
      return state.productsData;
    },
    productData(state) {
      return state.productData;
    }
  }
};
