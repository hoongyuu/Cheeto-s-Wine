<template>
  <div class="back-coupon">
    <h2 class="back-coupon-title">後台優惠卷管理</h2>
    <div class="container">
      <div class="back-coupon-add">
        <button type="button" @click="showCouponModal('new')">
          新增優惠卷
        </button>
      </div>
      <table>
        <tr>
          <th width="20%">名稱</th>
          <th width="18%">折扣百分比</th>
          <th width="27%">到期日</th>
          <th width="15%">是否啟用</th>
          <th width="20%" style="text-align: center;">編輯</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.deadline.datetime }}</td>
          <td>
            <span style="color: #89dd28" v-if="item.enabled">啟用</span>
            <span style="color: #ff1b1b" v-else>未啟用</span>
          </td>
          <td>
            <div class="back-coupon-btn">
              <button
                type="button"
                class="back-coupon-edit"
                @click="showCouponModal('edit', item)"
              >
                編輯
              </button>
              <button type="button" class="back-coupon-del">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </table>

      <div class="back-coupon-modal-wrap" @click.self="closeModal">
        <div class="back-coupon-modal">
          <h2>{{ this.status === "new" ? "建立優惠卷" : "更新優惠卷" }}</h2>
          <div class="back-coupon-modal-item">
            <label for="couponTitle">標題</label>
            <input
              id="couponTitle"
              type="text"
              placeholder="請輸入標題"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="back-coupon-modal-item">
            <label for="couponCode">優惠碼</label>
            <input
              id="couponCode"
              type="text"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="back-coupon-modal-item">
            <label for="couponDate">到期日</label>
            <input
              id="couponDate"
              type="date"
              placeholder="2020/12/31"
              v-model="dueDate"
            />
          </div>
          <div class="back-coupon-modal-item">
            <label for="couponTime">到期時間</label>
            <input
              id="couponTime"
              type="time"
              step="1"
              placeholder="上午 01:00:00"
              v-model="dueTime"
            />
          </div>
          <div class="back-coupon-modal-item">
            <label for="couponPercent">折扣百分比</label>
            <input
              id="couponPercent"
              type="number"
              placeholder="請輸入折扣百分比"
              v-model="tempCoupon.percent"
            />
          </div>
          <div class="back-coupon-modal-check">
            <input
              type="checkbox"
              id="couponEnabled"
              v-model="tempCoupon.enabled"
            />
            <label for="couponEnabled">是否啟用</label>
          </div>
          <div class="back-coupon-modal-btn">
            <button type="button" @click="updateCoupon()">建立優惠卷</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cookie } from "../../components/JS/cookie";
import $ from "jquery";

export default {
  data() {
    return {
      data: [],
      token: "",
      tempCoupon: {
        title: "",
        enabled: false,
        percent: 0,
        deadline_at: 0,
        code: ""
      },
      dueDate: "",
      dueTime: "",
      status: ""
    };
  },
  mixins: [cookie],
  created() {
    this.token = this.getCookie("hexToken");
    this.getCoupon();
  },
  methods: {
    getCoupon() {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons`;

      // 後端驗證
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      this.axios
        .get(api)
        .then(res => {
          this.data = res.data.data;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    showCouponModal(type, item) {
      if (type === "edit") {
        this.status = "edit";
        this.tempCoupon = { ...item };
        const dedlineAt = this.tempCoupon.deadline.datetime.split(" ");
        [this.dueDate, this.dueTime] = dedlineAt;
      } else {
        this.status = "new";
        this.tempCoupon = {
          title: "",
          enabled: false,
          percent: 100,
          deadline_at: 0,
          code: ""
        };
        this.dueDate = "";
        this.dueTime = "";
      }
      $(".back-coupon-modal-wrap").addClass("active");
    },
    updateCoupon() {
      // vue loading-show
      let loader = this.$loading.show();
      let api;
      // 定義 資料傳輸類型
      let updateType;
      // 定義 更新 or 新增
      let status;
      if (this.status === "new") {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`;
        status = "優惠卷新增成功";
        updateType = "post";
      } else {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
        status = "優惠卷更新成功";
        updateType = "patch";
      }
      // 把到期日的日期及時間合併，已符合後端所需格式
      this.tempCoupon.deadline_at = `${this.dueDate} ${this.dueTime}`;

      // 後端驗證
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      this.axios[updateType](api, this.tempCoupon).then(() => {
        this.closeModal();
        this.getCoupon();
        loader.hide();
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: status,
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    closeModal() {
      $(".back-coupon-modal-wrap").removeClass("active");
    }
  }
};
</script>
