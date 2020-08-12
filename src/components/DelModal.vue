<template>
  <transition name="fade">
    <div class="modal" @click.self="$emit('close')">
      <div class="modal-del">
        <div class="modal-del-header">
          刪除商品
        </div>
        <div class="modal-del-body">
          是否確認刪除
          <span>{{ item.title }}</span>
          商品(刪除後將無法復原)
        </div>
        <div class="modal-del-footer">
          <button
            type="button"
            @click="
              $emit('close');
              delCart();
            "
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["item", "isDel", "token"],
  methods: {
    delCart() {
      // vue loading-show
      let loader = this.$loading.show();
      let api;
      if (this.isDel === true) {
        // 刪除後臺產品資料
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.item.id}`;
        // token 驗證
        this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      } else {
        // 刪除購物車資料
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${this.item.id}`;
      }

      this.axios.delete(api).then(() => {
        this.$emit("update");
        this.$bus.$emit("cartUpdate");
        // vue loading-hide
        loader.hide();
      });
    }
  }
};
</script>
