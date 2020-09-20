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
import { mapGetters } from "vuex";
export default {
  props: ["item", "isDel", "token", "isCoupon"],
  methods: {
    delCart() {
      this.$store.state.isLoading = true;
      let api;
      if (this.isDel === true) {
        // 刪除後臺產品資料
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.item.id}`;
      } else if (this.isCoupon === true) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.item.id}`;
      } else {
        // 刪除購物車資料
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${this.item.id}`;
      }

      this.axios.delete(api).then(() => {
        this.$emit("update");
        this.$bus.$emit("cartUpdate");
      });
    }
  },
  computed: {
    ...mapGetters(["isLoading"])
  }
};
</script>
