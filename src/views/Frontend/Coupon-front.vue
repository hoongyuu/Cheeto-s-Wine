<template>
  <div class="coupon-front">
    <div class="coupon-front-header">
      <h2>Coupon Choice Game</h2>
      <p>等著你來試試手氣！！！</p>
    </div>
    <div class="coupon-front-game">
      <div class="bg-main"></div>
      <div class="bg-sec" v-show="lampShow"></div>
      <div class="start" @click="move">
        <p>抽獎</p>
      </div>
      <ul>
        <li v-for="(item, i) in list" :key="i" :class="{ active: index == i }">
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "六折",
          text: "不錯唷！：cheeto666"
        },
        {
          name: "謝謝惠顧",
          text: "下次記得拜拜QQ：cheetoQQ"
        },
        {
          name: "七折",
          text: "小小優待：cheeto777"
        },
        {
          name: "幫你QQ",
          text: "幫你QQ安慰獎9折：cheetoQQ"
        },
        {
          name: "五折",
          text: "運氣真好！：cheeto555"
        },
        {
          name: "再次QQ",
          text: "QQ到不行，沒有優惠"
        },
        {
          name: "三折",
          text: "運氣真好：cheeto333"
        },
        {
          name: "一折",
          text: "最大獎啦！：cheetoMAX"
        }
      ],
      index: 0, // 用來對應 css，對應的 item 發光
      count: 8, // 格子總數
      times: 0, // 格子跑動次數
      cycle: 60, // 跑動生命週期：格子一定會跑超過 60 次
      speed: 250, // 跑動速度
      lampShow: false, // 閃爍功能
      timer: 0, // 設定來能夠關閉 setTimeout 功能
      lamp: 0, // 設定來關閉 setInterval 功能
      prize: 0 // 設定中獎位置，讓效果與功能符合
    };
  },
  methods: {
    move() {
      const random = Math.floor(Math.random() * 8) + 1;
      this.speed = 250; // 每次開始前初始化轉動速度
      this.prize = random - 1; // 1-8 隨機抽獎
      this.startRoll();
      this.lamp = setInterval(() => {
        this.lampShow = !this.lampShow;
      }, 500);
    },
    startRoll() {
      this.times += 1; //每次轉動都加 1
      this.oneRoll();
      this.usePrize();
    },
    oneRoll() {
      let index = this.index;
      // 每轉動一次 index +1
      index += 1;
      // 只要 index 到 8 就重置
      if (index > this.count - 1) {
        index = 0;
      }
      this.index = index;
    },
    usePrize() {
      if (this.times > this.cycle && this.prize === this.index) {
        clearTimeout(this.timer); // 關閉轉動
        clearTimeout(this.lamp); // 關閉閃爍
        this.lampShow = false;
        this.times = 0; // 重置轉動次數
        setTimeout(() => {
          this.$swal.fire({
            icon: "success",
            title: `恭喜 ${this.list[this.prize].name} 優惠！！！`,
            text: `${this.list[this.prize].text}`
          });
        }, 500);
      } else {
        if (this.times <= this.cycle - 15) {
          this.speed -= 5; // 在轉動 45 次前持續加快轉動速度
        } else {
          this.speed += 10; // 45次後遞減轉動速度
        }
        // 利用 speed 調節速度
        this.timer = setTimeout(() => {
          this.startRoll();
        }, this.speed);
      }
    }
  }
};
</script>

<style lang="scss"></style>
