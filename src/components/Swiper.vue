<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in productData" :key="item.id">
      <div class="card-wrap" @click="postId(item)">
        <div class="card-img">
          <img :src="item.imageUrl" />
        </div>
        <div class="card-txt">
          <h4 class="item-winery">{{ item.options.winery }}</h4>
          <h3 class="item-title">{{ item.title }}</h3>
          <div class="card-info">
            <span class="item-info">
              {{ item.options.year }} | {{ item.options.capacity }} |
              {{ item.category }}
            </span>
          </div>
          <div class="card-price">
            <span class="sale-price">$ {{ item.price | currency }}</span>
            <span class="price">$ {{ item.origin_price | currency }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        freeMode: true,
        slidesPerView: 5,
        spaceBetween: 5
      }
    };
  },
  props: ["productData"],
  methods: {
    postId(item) {
      this.$emit("update", item.id);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="scss">
.swiper {
  display: none;
}
@media (min-width: 769px) {
  .swiper {
    display: block;
    &-wrap {
      text-align: left;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        box-shadow: 1px 2px 10px 3px rgba(202, 202, 202, 0.6);
      }
    }
    &-img {
      img {
        width: 100%;
        background-color: #fff;
        margin-bottom: 10px;
      }
    }
    &-txt {
      h4 {
        font-size: 14px;
        color: #515151;
        margin-bottom: 5px;
      }
      h3 {
        color: #292245;
        line-height: 1.4;
        height: 50px;
      }
    }
    &-info {
      margin-bottom: 8px;
      span {
        color: #7b7b7b;
        font-weight: 300;
        font-size: 14px;
      }
    }
    &-price {
      span {
        display: inline-block;
        vertical-align: middle;
      }
      .sale-price {
        color: #ff6645;
        font-size: 18px;
        margin-right: 10px;
      }
      .price {
        color: #909090;
        font-size: 14px;
        text-decoration: line-through;
      }
    }
  }
}
</style>
