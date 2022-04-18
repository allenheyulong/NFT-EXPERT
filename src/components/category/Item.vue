<template>
  <div class="item">
    <img src="../../assets/images/category.png" alt="" srcset="" />

    <div class="content">
      <div class="title">Motion Art</div>
      <div class="desc">
        Choose dynamic pictures and enjoy more functions of NFT.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(37px);
  border-radius: 5px;
  //   transform: matrix(1, 0, 0, -1, 0, 0);
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  .content {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-left: 15px;
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #ffffff;
      margin-bottom: 5px;
    }
    .desc {
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      color: #ffffff80;
      text-align: left;
    }
  }
}
</style>