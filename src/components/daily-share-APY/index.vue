<template>
  <div class="item">
    <div class="item-top">
      <div class="text">Daily share APY 30%</div>
    </div>
    <div class="item-bottom">
      <div class="item-group">
        <div class="group-top">
          <span>Lorem Ipsum</span>
          <span class="erc">ERC</span>
        </div>

        <div class="group-center">
          <div>
            <span class="level">Lowest:</span>
            <span class="money">5USDT</span>
          </div>
          <div>
            <span class="level">Highest:</span>
            <span class="money">199USDT</span>
          </div>
        </div>
      </div>

      <div class="item-btns">
        <div class="btn">GEST STARTED</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyShareAPY",

  data() {
    return {};
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.item {
  width: 160px;
  height: 300px;
  .item-top {
    background-image: url("../../assets/images/daily-share.jpg");
    width: 160px;
    height: 157px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    .text {
      width: 140px;
      height: 30px;
      line-height: 30px;
      margin-top: 4px;
      background: #1f34e7;
      border-radius: 5px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 8px;
      text-align: center;
      color: #ffffff;
    }
  }
  .item-bottom {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: 11px 11px 15px 11px;
    width: 160px;
    height: 143px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #fff;
    .item-group {
      width: 140px;
      .group-top {
        padding: 10px 0;
        border-bottom: 1px solid rgba(196, 196, 196, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        span {
          color: #fff;
        }
        .erc {
          width: 29px;
          height: 14.5px;
          background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
          border-radius: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e2e2e2;
          font-size: 9px;
        }
      }
      .group-center {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          text-align: left;
        }
        .level {
          font-weight: 700;
          font-size: 10px;
          color: #ffffff;
          opacity: 0.5;
          margin-bottom: 5px;
        }
        .money {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 11px;
          color: #ffffff;
        }
      }
    }
    .item-btns {
      .btn {
        border-radius: 5px;
        padding: 8px 12px;
        border: 0.8px solid;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 9px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #ffffff;
        border-color: #6929af;
      }
    }
  }
}
</style>