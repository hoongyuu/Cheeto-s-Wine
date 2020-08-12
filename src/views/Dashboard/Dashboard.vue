<template>
  <div class="backend">
    <div class="backend-header header">
      <h1>後台管理</h1>
      <ul class="backend-header-list">
        <li>
          <router-link to="/index">前台頁面</router-link>
        </li>
        <li>
          <router-link to="/admin/backProducts">產品列表</router-link>
        </li>
        <li>
          <router-link to="/admin/coupon">優惠卷管理</router-link>
        </li>
      </ul>
    </div>
    <transition name="fade"><router-view /></transition>
  </div>
</template>

<script>
export default {};
</script>
