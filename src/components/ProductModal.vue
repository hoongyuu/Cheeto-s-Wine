<template>
  <transition name="fade">
    <div class="modal" @click.self="$emit('close')">
      <div class="modal-add">
        <h2 class="modal-add-header">
          {{ isNew === true ? "新增商品" : "修改商品" }}
        </h2>
        <div class="modal-add-body">
          <div class="modal-add-img">
            <label for="creatImage">輸入圖片網址</label>
            <input
              type="text"
              id="creatImage"
              placeholder="請輸入圖片連結"
              v-model="newProduct.imageUrl[0]"
            />
            <img :src="newProduct.imageUrl[0]" />
          </div>
          <div class="modal-add-info">
            <div class="modal-add-whole">
              <div class="modal-add-item">
                <label for="creatTitle">標題</label>
                <input
                  type="text"
                  id="creatTitle"
                  placeholder="請輸入標題"
                  v-model="newProduct.title"
                />
              </div>
            </div>
            <div class="modal-add-split">
              <div class="modal-add-item">
                <label for="creatWinery">酒莊</label>
                <input
                  type="text"
                  id="creatWinery"
                  placeholder="請輸入酒莊"
                  v-model="newProduct.options.winery"
                />
              </div>
              <div class="modal-add-item">
                <label for="creatPlace">產地</label>
                <input
                  type="text"
                  id="creatPlace"
                  placeholder="請輸入產地"
                  v-model="newProduct.options.place"
                />
              </div>
            </div>
            <div class="modal-add-split">
              <div class="modal-add-item">
                <label for="creatYear">年份</label>
                <input
                  type="text"
                  id="creatYear"
                  placeholder="請輸入年份"
                  v-model="newProduct.options.year"
                />
              </div>
              <div class="modal-add-item">
                <label for="creatCapacity">容量</label>
                <input
                  type="text"
                  id="creatCapacity"
                  placeholder="請輸入容量"
                  v-model="newProduct.options.capacity"
                />
              </div>
            </div>
            <div class="modal-add-split">
              <div class="modal-add-item">
                <label for="creatCategory">分類</label>
                <input
                  type="text"
                  id="creatCategory"
                  placeholder="請輸入分類"
                  v-model="newProduct.category"
                />
              </div>
              <div class="modal-add-item">
                <label for="creatUnit">單位</label>
                <input
                  type="text"
                  id="creatUnit"
                  placeholder="請輸入單位"
                  v-model="newProduct.unit"
                />
              </div>
            </div>
            <div class="modal-add-split">
              <div class="modal-add-item">
                <label for="creatOrigin">原價</label>
                <input
                  type="number"
                  id="creatOrigin"
                  placeholder="請輸入原價"
                  v-model="newProduct.origin_price"
                />
              </div>
              <div class="modal-add-item">
                <label for="creatPrice">售價</label>
                <input
                  type="number"
                  id="creatPrice"
                  placeholder="請輸入售價"
                  v-model="newProduct.price"
                />
              </div>
            </div>
            <div class="modal-add-whole">
              <div class="modal-add-item">
                <label for="creatDes">品牌描述</label>
                <textarea
                  id="creatDes"
                  rows="3"
                  v-model="newProduct.description"
                ></textarea>
              </div>
            </div>
            <div class="modal-add-whole">
              <div class="modal-add-item">
                <label for="creatContent">產品敘述</label>
                <textarea
                  id="creatContent"
                  rows="3"
                  v-model="newProduct.content"
                ></textarea>
              </div>
            </div>
            <div class="modal-add-checkbox">
              <div class="modal-add-item">
                <input
                  type="checkbox"
                  id="creatEnabled"
                  v-model="newProduct.enabled"
                />
                <label for="creatEnabled">是否啟用</label>
              </div>
              <div class="modal-add-item">
                <input
                  type="checkbox"
                  id="creatPopular"
                  v-model="newProduct.options.popular"
                />
                <label for="creatPopular">熱門商品</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-add-footer">
          <button type="button" @click="updateProduct">確認送出</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["data", "token", "isNew"],
  data() {
    return {
      newProduct: {
        imageUrl: [""],
        options: {}
      }
    };
  },
  methods: {
    getData(id, type) {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;

      switch (type) {
        case "new":
          this.newProduct = {
            imageUrl: [""],
            options: {}
          };
          loader.hide();
          break;

        default:
          this.axios.get(api).then(res => {
            this.newProduct = res.data.data;
            loader.hide();
          });
          break;
      }
    },
    updateProduct() {
      // vue loading-show
      let loader = this.$loading.show();
      let api;
      let updateType;
      if (this.isNew === false) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.newProduct.id}`;
        updateType = "patch";
      } else {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
        updateType = "post";
      }
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      this.axios[updateType](api, this.newProduct)
        .then(() => {
          this.$emit("update");
          this.$emit("close");
          loader.hide();
        })
        .catch(() => {
          this.$emit("close");
          loader.hide();
        });
    }
  }
};
</script>
