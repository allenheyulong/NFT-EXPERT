<template>
  <div class="market-makting" :style="'height:' + height">
    <div class="market-text">
      <h2>{{ title }}</h2>
      <p>
        {{ desc }}
      </p>
    </div>
    <div class="market-list">
      <slot name="swiper" />
    </div>

    <swiper-bottom />
  </div>
</template>

<script>
import TotalAPY from "../total-apy";
import SwiperBottom from "@/components/swiper-bottom";

export default {
  name: "TextSwiper",

  props: {
    title: String,
    desc: String,
    height: String,
  },

  components: {
    TotalAPY,
    SwiperBottom,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.market-makting {
  .market-text {
    padding: 35px 20px;
    height: 152px;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 15px;
      color: #ffffff;
    }
    p {
      text-indent: 2em;
      font-weight: 700;
      font-size: 11px;
      color: #ffffff;
      font-family: "Inter";
      font-style: normal;
      opacity: 0.5;
    }
  }
  .market-list {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    .item {
      margin-left: 21px;
    }
  }
}
</style>