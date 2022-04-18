<template>
  <div class="footer">
    <img src="@/assets/images/logo.png" class="logo" alt="" />

    <div class="menus">
      <router-link to="/">Home</router-link>
      <router-link to="/">NFT market</router-link>
      <router-link to="/">Invite friends</router-link>
      <router-link to="/">FAQ</router-link>
      <router-link to="/">Account</router-link>
    </div>

    <span> Copyright © 122 NFT experts reserve all rights </span>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.footer {
  display: flex;
  margin-left: 22px;
  flex-flow: column;
  justify-content: space-between;
  img {
    width: 118px;
    margin-bottom: 22.5px;
  }
  .menus {
    color: #fff;
    display: flex;
    flex-flow: column;
    height: 110px;
    align-items: flex-start;
    justify-content: space-around;
    a {
      color: #fff;
      font-size: 11px;
    }
  }
  span {
    display: inline-block;
    margin-top: 22.5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    color: #ffffff80;
    text-align: left;
    margin-bottom: 24px;
  }
}
</style>