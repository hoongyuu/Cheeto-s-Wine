<template>
  <div class="index-wrap">
    <!-- hero start -->
    <section class="index-hero">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2FindexHero.jpeg?alt=media&token=33405c05-d0ba-46a8-8f29-8a26e8f5510d"
        class="index-hero-img"
      />
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Fwine1.png?alt=media&token=1caf5f99-6b5f-40fd-888b-b0004c1a4df4"
          />
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Fwine2.png?alt=media&token=67aa6afd-a74d-46c9-98d9-13827646390f"
          />
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Fwine3.png?alt=media&token=a1a9c657-f829-4ef8-9a48-1bd2c240ea96"
          />
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Fwine4.png?alt=media&token=7a3e8528-c4af-4803-a3db-5b1ed9fe9ee0"
          />
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Fwine5.png?alt=media&token=4274621e-348b-423b-90fb-59c4c310bbf2"
          />
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
      <router-link to="/products" class="btn-init">查看所有酒類</router-link>
    </section>

    <!-- event start -->
    <section class="index-event">
      <div class="index-event-item">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Findex-sparkwine.png?alt=media&token=da6d561c-8ea2-48b4-a0b9-b7d4b66bb2ba"
        />
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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Findex-redwine.png?alt=media&token=bb99da7e-3413-4ebe-b1de-a01fcefa3f12"
        />
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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Findex-whiskey.png?alt=media&token=d3865353-3617-4778-9b0c-7440e093a6e7"
        />
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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cheetoblog-8edf4.appspot.com/o/%E9%9B%BB%E5%95%86%E7%B6%B2%E7%AB%99%2Findex-other.png?alt=media&token=4b9d1418-6765-40c2-9e2d-5829c2f20de0"
        />
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
      this.$router.push({ path: "/product", query: { wineId: id } });
    },
    filterWine(type) {
      this.$router.push({ path: "/products", query: { wineStyle: type } });
    }
  }
};
</script>
