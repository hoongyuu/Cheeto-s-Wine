<template>
  <div class="home">
    <navbar></navbar>
    <a href="#" id="goTop" class="go-top active" @click.prevent="scrollTop">
      <i class="fas fa-arrow-up"></i>
    </a>
    <transition name="fade"><router-view /></transition>
    <indexFooter class="home-footer"></indexFooter>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import indexFooter from "@/components/Footer.vue";
// jQuery
import $ from "jquery";

$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
    $("#goTop").addClass("active");
  } else {
    $("#goTop").removeClass("active");
  }
});

export default {
  name: "Home",
  components: {
    navbar,
    indexFooter
  },
  methods: {
    scrollTop() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    }
  }
};
</script>
