export default {
  methods: {
    addCart(item, type) {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.spannerStatus = item.id;
      const cartData = {
        product: item.id,
        quantity: item.quantity
      };
      this.axios
        .post(api, cartData)
        .then(() => {
          if (type === "buy") {
            this.$router.push("/cart");
          } else {
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "成功加入購物車",
              showConfirmButton: false,
              timer: 1000
            });
          }
          this.spannerStatus = "";
          this.$bus.$emit("cartUpdate");
          // vue loading-hide
          loader.hide();
        })
        .catch(() => {
          if (type === "buy") {
            this.$router.push("/cart");
          } else {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: "重複加入購物車",
              showConfirmButton: false,
              timer: 1000
            });
          }
          this.spannerStatus = "";
          // vue loading-hide
          loader.hide();
        });
    }
  }
};
