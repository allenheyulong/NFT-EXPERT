<template>
  <div class="faq">
    <h1>FAQs</h1>
    <div class="list">
      <div
        class="item"
        :class="{ active: idx === item }"
        v-for="item of 5"
        :key="item"
        @click="idx = item"
      >
        <div class="title">
          <h3>Question number 01 goes in here?</h3>
          <span
            class="icon iconfont icon-zhediejiantou_Blackbeifen2x"
            v-if="idx === item"
          ></span>
          <span v-else class="icon iconfont icon-xuanzeqizhankai"></span>
        </div>
        <div class="desc" v-show="idx === item">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is
          simply dummy text of the printing and typesetting.
        </div>
      </div>
      <span class="circle _1"></span>
      <span class="circle _2"></span>
      <span class="circle _3"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",

  data() {
    return {
      idx: 1,
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.faq {
  height: 500px;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  h1 {
    color: #fff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #ffffff;
    margin: 0;
    margin-bottom: 31px;
  }
  .icon {
    color: #fff;
  }
  .circle {
    position: absolute;
    display: inline-block;
  }
  ._1 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    left: -200px;
    top: 20px;
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
    right: -40px;
    top: -40px;
    background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.15;
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
  .list {
    // padding: 0 20px;
    .active {
      margin: 0px !important;
      padding: 20px !important;
      border: none !important;
      background: linear-gradient(
        89.71deg,
        #6929af80 1.95%,
        #3b299980 99.75%
      ) !important;
    }
    .item {
      margin: 0 20px;
      padding: 27px 0;
      border-bottom: 1px solid #ffffff80;
      .title {
        display: flex;
        justify-content: space-between;
        h3 {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 11px;
          line-height: 13px;
          color: #ffffff;
        }
      }
      .desc {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        color: #ffffff80;
        margin-top: 12px;
        text-align: left;
        text-indent: 2em;
      }
    }
    .item:last-child,
    .item:first-child {
      border: none;
    }
  }
}
</style>