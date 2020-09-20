export default {
  methods: {
    addCart(item, type) {
      this.$store.state.isLoading = true;
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
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
          this.$store.dispatch("getCartData");
          this.$store.state.isLoading = false;
        })
        .catch(() => {
          if (type === "buy") {
            api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
            this.axios
              .patch(api, cartData)
              .then(() => {
                this.$router.push("/cart");
              })
              .catch(() => {
                this.$router.push("/cart");
              });
          } else {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: "重複加入購物車",
              showConfirmButton: false,
              timer: 1000
            });
            this.$store.state.isLoading = false;
          }
          this.spannerStatus = "";
        });
    }
  }
};
