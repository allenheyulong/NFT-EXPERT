<template>
  <div class="category-box">
    <span class="circle _1"></span>
    <span class="circle _2"></span>
    <span class="circle _3"></span>
    <div class="market-text">
      <h2>{{ title }}</h2>
      <p>
        {{ desc }}
      </p>
    </div>

    <div class="category-list">
      <Item v-for="item of 4" :key="item" class="item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "Category",

  props: {
    title: String,
    desc: String,
  },

  components: {
    Item,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.category-box {
  padding: 21px;
  position: relative;
  overflow: hidden;
  .circle {
    position: absolute;
    display: inline-block;
  }
  ._1 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    left: -150px;
    top: 50px;
    background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        #db39fa 0%,
        #b932d5 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.6;
    filter: blur(150px);
    transform: rotate(13.97deg);
  }
  ._2 {
    width: 254px;
    height: 254px;
    right: -150px;
    top: 150px;
    background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.6;
    filter: blur(150px);
  }
  ._3 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    left: -10.54px;
    bottom: 0px;
    background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.15;
    filter: blur(100px);
    transform: rotate(13.97deg);
  }
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
  .category-list {
    display: flex;
    flex-flow: column;
    width: 100%;
    .item {
      margin-bottom: 7.5px;
    }
  }
}
</style>