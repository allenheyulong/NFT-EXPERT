<template>
  <div class="steps">
    <div class="item" :class="{ active: idx === 1 }" @click="idx = 1">
      <img src="../../assets/images/step-1.png" alt="" srcset="" />
      <p>1. Create your account and add a wallet</p>
    </div>
    <div class="item" :class="{ active: idx === 2 }" @click="idx = 2">
      <img src="../../assets/images/step-2.png" alt="" srcset="" />
      <p>2. Access to our review team standards</p>
    </div>
    <div class="item" :class="{ active: idx === 3 }" @click="idx = 3">
      <img src="../../assets/images/step-3.png" alt="" srcset="" />
      <p>3. Create your NFT and list it for sale</p>
    </div>
    <div class="item" :class="{ active: idx === 4 }" @click="idx = 4">
      <img src="../../assets/images/step-4.png" alt="" srcset="" />
      <p>4.Sell your item and get rewarded</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",

  data() {
    return {
      idx: 1,
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.steps {
  padding: 0 21px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .active {
    background: linear-gradient(
      89.71deg,
      #6929af 1.95%,
      #3b2999 99.75%
    ) !important;
  }
  .item {
    width: 160px;
    height: 153px;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    background: #ffffff14;
    img {
      max-height: calc(100% - 17px - 30px);
    }
    p {
      font-size: 11px;
      line-height: 17px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
    }
  }
  .item:first-child {
    margin-right: 12px;
    margin-bottom: 12px;
  }
  .item:nth-child(2) {
    margin-bottom: 12px;
  }
  .item:nth-child(3) {
    margin-right: 12px;
  }
}
</style>