<template>
  <div class="wrap">
    <div class="header"></div>
    <div class="login">
      <h2>LOGIN</h2>
      <div class="login-user">
        <form @submit.prevent="signin">
          <div class="login-item">
            <label for="username">帳號</label>
            <input
              type="email"
              placeholder="username"
              id="username"
              v-model="user.email"
              required
            />
          </div>
          <div class="login-item">
            <label for="password">密碼</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              v-model="user.password"
              required
            />
          </div>
          <div class="login-btn">
            <button type="submit">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      token: ""
    };
  },
  methods: {
    signin() {
      // vue loading-show
      let loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.axios
        .post(api, this.user)
        .then(res => {
          this.token = res.data.token;
          const expired = res.data.expired;
          // 設定 cookie
          document.cookie = `hexToken=${this.token}; expires=${new Date(
            expired * 1000
          )}; path=/`;
          // alert show
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "登入成功",
            showConfirmButton: false,
            timer: 1500
          });
          // vue loading-hide
          loader.hide();
          // 頁面轉換
          this.$router.push("/admin/backProducts");
        })
        .catch(() => {
          // alert show
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: "帳號或密碼輸入錯誤",
            showConfirmButton: false,
            timer: 1500
          });
          // vue loading-hide
          loader.hide();
        });
    }
  }
};
</script>
