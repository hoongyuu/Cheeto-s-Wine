<template>
  <div class="back-products">
    <h2 class="back-products-title">產品管理列表</h2>
    <div class="container">
      <div class="back-products-add">
        <button type="button" @click="showModal('new')">新增產品</button>
      </div>
      <table>
        <tr>
          <th width="15%">分類</th>
          <th width="25%">產品</th>
          <th width="10%">原價</th>
          <th width="10%">售價</th>
          <th width="10%">容量</th>
          <th width="15%">是否上架</th>
          <th width="15%">編輯</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td style="text-align: left">{{ item.category }}</td>
          <td style="line-height: 1.4">{{ item.title }}</td>
          <td>{{ item.origin_price | currency }}</td>
          <td>{{ item.price | currency }}</td>
          <td>{{ item.options.capacity }}</td>
          <td>
            <span style="color: #89dd28" v-if="item.enabled">啟用</span>
            <span style="color: #ff1b1b" v-else>未啟用</span>
          </td>
          <td>
            <div class="back-products-btn">
              <button
                type="button"
                class="back-products-edit"
                @click="showModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="back-products-del"
                @click="showModal('del', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </table>

      <productModal
        :class="{ active: showProductModal }"
        :data="newData"
        :token="token"
        :is-new="isNew"
        @close="showProductModal = false"
        ref="modal"
        @update="getProducts"
      >
      </productModal>
      <delModel
        :class="{ active: showDelModal }"
        :item="newData"
        :token="token"
        :is-del="isDel"
        @close="showDelModal = false"
        @update="getProducts()"
      >
      </delModel>
      <pagination :pages="pages" @update="getProducts"></pagination>
    </div>
  </div>
</template>

<script>
import productModal from "@/components/ProductModal.vue";
import delModel from "@/components/DelModal.vue";
import pagination from "@/components/Pagination.vue";
import cookie from "@/assets/JS/cookie";
export default {
  data() {
    return {
      data: [],
      token: "",
      newData: {
        product: {
          title: ""
        }
      },
      pages: {},
      isNew: false,
      showProductModal: false,
      showDelModal: false,
      isDel: true
    };
  },
  mixins: [cookie],
  components: { productModal, delModel, pagination },
  created() {
    // 取得 token
    this.token = this.getCookie("hexToken");
    this.checkToken();
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;

      this.axios
        .get(api)
        .then(res => {
          this.data = res.data.data;
          this.pages = res.data.meta.pagination;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    showModal(type, item) {
      switch (type) {
        case "new":
          this.isNew = true;
          this.newData = {
            imageUrl: [""],
            options: {}
          };
          this.$refs.modal.getData(this.newData.id, type);
          this.showProductModal = true;
          break;
        case "edit":
          this.newData = item;
          this.isNew = false;
          this.$refs.modal.getData(this.newData.id, type);
          this.showProductModal = true;
          break;
        default:
          this.newData = item;
          this.showDelModal = true;
          break;
      }
    },
    checkToken() {
      const api = `${process.env.VUE_APP_APIPATH}auth/check`;
      const apiToken = {
        api_token: this.token
      };
      this.axios
        .post(api, apiToken)
        .then(() => {})
        .catch(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>
