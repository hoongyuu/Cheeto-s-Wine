<template>
  <div class="index-wrap">
    <!-- hero start -->
    <section class="index-hero">
      <img src="../assets/images/indexHero.jpeg" class="index-hero-img" />
      <div class="container">
        <div class="index-hero-txt">
          <h2>Cheeto's Wine</h2>
          <h3>
            讓你的每一天都
            <span>充滿驚喜</span>
          </h3>
          <div class="index-hero-btn-wrap">
            <router-link to="/products">商品列表</router-link>
            <router-link to="/intro">酒廠介紹</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- wine start -->
    <section class="index-wine">
      <div class="container">
        <div class="index-wine-item">
          <img src="../assets/images/wine1.png" />
          <div class="index-wine-txt">
            <h4>Boizel</h4>
            <h3>
              寶尚香檳
              <span>女王粉鑽頂級年份香檳</span>
            </h3>
            <p>
              起初是新鮮野草莓細膩香氣，接著而來的大黃和肉桂香味更加激化，最後帶出酸櫻桃，黑醋栗及薄荷風味。
            </p>
            <span class="price origin-price">$8,800</span>
            <span class="price">SALE $7,920</span>
            <a
              href="#"
              class="btn-init"
              @click.prevent="
                productDetail(
                  'XQnWcKSwC0ImdkZLy5102X0hN4gcGwedtztxvDkLov9cnGJDo4M0nWlyRTf3oUdX'
                )
              "
            >
              前往商品頁面
            </a>
          </div>
        </div>
        <div class="index-wine-item">
          <img src="../assets/images/wine2.png" />
          <div class="index-wine-txt">
            <h4>Boizel</h4>
            <h3>
              寶尚香檳
              <span>頂級年份2007香檳</span>
            </h3>
            <p>
              歷經13年的窖藏，暖金色酒體襯托著細緻綿密持久的氣泡，是支強而有力、罕見的香檳傑作。
            </p>
            <span class="price origin-price">$5,800</span>
            <span class="price">SALE $5,200</span>
            <a
              href="#"
              class="btn-init"
              @click.prevent="
                productDetail(
                  'NKcbnYKb98Lp6ZLg6fv9X6PO3R0pTAG4sFACEGYHt6G5vAJKNQjyANn5tj82LXqp'
                )
              "
            >
              前往商品頁面
            </a>
          </div>
        </div>
        <div class="index-wine-item">
          <img src="../assets/images/wine3.png" />
          <div class="index-wine-txt">
            <h4>Boizel</h4>
            <h3>
              寶尚香檳
              <span>特級陳釀黑中白香檳</span>
            </h3>
            <p>
              清脆與清新活潑的口感微妙結合，優雅的尾韻持久完整無瑕，是支清爽動人、心曠神怡的作品。
            </p>
            <span class="price origin-price">$3,680</span>
            <span class="price">SALE $3,300</span>
            <a
              href="#"
              class="btn-init"
              @click.prevent="
                productDetail(
                  'O2XIrrtg5krS3CLCKMFKQQXhncrY6n6YxHikzEkBWjnqK73vcJ05GBOUji2OCoaM'
                )
              "
            >
              前往商品頁面
            </a>
          </div>
        </div>
        <div class="index-wine-item index-wine-mobile">
          <img src="../assets/images/wine4.png" />
          <div class="index-wine-txt">
            <h4>Boizel</h4>
            <h3>
              寶尚香檳
              <span>特級陳釀粉紅香檳</span>
            </h3>
            <p>
              天鵝絨般圓潤的口感，是精緻的柑橘水果味，香料和優雅礦物質和諧地融為一體，尾韻清新流暢。
            </p>
            <span class="price origin-price">$3,480</span>
            <span class="price">SALE $3,180</span>
            <a
              href="#"
              class="btn-init"
              @click.prevent="
                productDetail(
                  'S9t8X2lvrEPcEB5FxOXSHfkVT6ktaV3JRxUdQ3XqlO3bvr5tJVfK04pUMzasktDv'
                )
              "
            >
              前往商品頁面
            </a>
          </div>
        </div>
        <div class="index-wine-item index-wine-mobile">
          <img src="../assets/images/wine5.png" />
          <div class="index-wine-txt">
            <h4>Boizel</h4>
            <h3>
              寶尚香檳
              <span>特級陳釀香檳</span>
            </h3>
            <p>
              經過至少36個月二次發酵，燦爛的金黃酒色，充滿著炫麗的微小氣泡，尾韻豐富持久，令人難以忘懷。
            </p>
            <span class="price origin-price">$3,480</span>
            <span class="price">SALE $3,180</span>
            <a
              href="#"
              class="btn-init"
              @click.prevent="
                productDetail(
                  'lbp5RKVuLeoqFbINdKEuwolkHTDwORXCl8WtqYCzqqpgrVMoRDg5eqWvhdsSJeiI'
                )
              "
            >
              前往商品頁面
            </a>
          </div>
        </div>
      </div>
      <a href="#" class="btn-init">查看所有酒類</a>
    </section>

    <!-- event start -->
    <section class="index-event">
      <div class="index-event-item">
        <img src="../assets/images/index-sparkwine.png" />
        <div class="index-event-txt">
          <h2>氣泡酒 Sparkling Wine</h2>
          <h4>
            願所有的未完成，
            <span>都將來可期。</span>
          </h4>
          <a
            href="#"
            class="btn-init"
            @click.prevent="filterWine('香檳氣泡酒')"
          >
            查看全部氣泡酒
          </a>
        </div>
      </div>
      <div class="index-event-item">
        <img src="../assets/images/index-redwine.png" />
        <div class="index-event-txt">
          <h2>葡萄酒 Grape Wine</h2>
          <h4>
            享受紅酒的美妙，坐擁生活樂趣
            <span>享受才剛剛開始。</span>
          </h4>
          <a href="#" class="btn-init" @click.prevent="filterWine('葡萄酒')">
            查看全部葡萄酒
          </a>
        </div>
      </div>
      <div class="index-event-item">
        <img src="../assets/images/index-whiskey.png" />
        <div class="index-event-txt">
          <h2>威士忌 Whiskey</h2>
          <h4>
            品味成功，享受真情；
            <span>魅力無限，典雅之藏。</span>
          </h4>
          <a href="#" class="btn-init" @click.prevent="filterWine('威士忌')">
            查看所有威士忌
          </a>
        </div>
      </div>
      <div class="index-event-item">
        <img src="../assets/images/index-other.png" />
        <div class="index-event-txt">
          <h2>其他酒類 Other Wine</h2>
          <h4>
            魅力生活，不要太迷醉
            <span>就要這個味。</span>
          </h4>
          <a href="#" class="btn-init" @click.prevent="filterWine('其他酒類')">
            查看全部其他酒類
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    productDetail(id) {
      document.cookie = `wineId=${id}; expires=/; path=/`;
      this.$router.push("/product");
    },
    filterWine(type) {
      document.cookie = `wineType=${type}; expires=/; path=/`;
      this.$router.push("/products");
    }
  }
};
</script>
