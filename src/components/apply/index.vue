<template>
  <div class="apply">
    <div class="title">Apply for creator rights</div>
    <div class="desc">
      Apply for creator s rights and get 20% of all lower-level friends NFT
      market-making revenue.
    </div>
    <div class="btn">apply</div>
  </div>
</template>

<script>
export default {
  name: "Apply",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.apply {
  position: relative;
  height: 227px;
  margin: 47.5px 20px;
  padding: 0 34px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }
  .desc {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    text-align: center;
    color: #ffffff80;
  }
  .btn {
    padding: 9px 27px;
    background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
    border-radius: 5px;
    color: #ffffff;
  }
}
.apply::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("../../assets/images/apply.png") no-repeat;
  mix-blend-mode: normal;
  background-position: center;
  background-size: 200%;
  opacity: 0.3;
  //   filter: opacity(1);
}
</style>