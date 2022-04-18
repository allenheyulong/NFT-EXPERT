<template>
  <div class="swiper-item">
    <div class="top">
      <img src="../../assets/images/bg.jpg" alt="" srcset="" />
      <div class="text">BSC</div>
    </div>
    <div class="bottom">
      <div class="title">3D Space Rocket and Smoke Premiere</div>
      <div class="desc">
        <img src="../../assets/images/header.png" alt="" srcset="" />
        <div class="text">
          <span>Abdew Leark</span>
          <span>The Creator</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperItemSeries",

  data() {
    return {};
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.swiper-item {
  width: 150px;
  //   height: 252px;
  .top {
    // background: url("../../assets/images/bg.jpg") no-repeat;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    display: flex;
    justify-content: flex-end;
    position: relative;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .text {
      position: absolute;
      margin: 7.5px;
      padding: 4px 6px;
      font-size: 9px;
      color: #e2e2e2;
      background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
      border-radius: 45%;
    }
  }
  .bottom {
    background: #ffffff1a;
    border-radius: 5px;
    padding: 12.5px;
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      color: #ffffff;
      text-align: left;
      line-height: 15px;
      margin-bottom: 12.5px;
    }
    .desc {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 30px;
      img {
        width: 26px;
        height: 26px;
        filter: drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.15));
        border-radius: 25px;
        margin-right: 4px;
      }
      .text {
        display: flex;
        flex-flow: column;
        height: 100%;
        justify-content: space-between;
        align-items: flex-start;
        span:first-child {
          font-weight: bold;
          font-size: 10px;
          color: #fff;
        }
        span:last-child {
          color: #ffffff;
          font-size: 9px;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>