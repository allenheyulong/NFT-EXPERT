<template>
  <div class="team" :class="{ active: isActive }">
    <div class="title">{{ title }}</div>
    <div class="money">{{ money }}</div>
  </div>
</template>

<script>
export default {
  name: "Team",

  props: {
    title: String,
    money: String,
    isActive: Boolean,
  },

  data() {
    return {};
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.team {
  border: 1px solid #6929af;
  width: 165px;
  height: 95px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  mix-blend-mode: normal;
  backdrop-filter: blur(37px);
  border-radius: 5px;
  box-sizing: border-box;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #ffffff;
  }
  .money {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    color: #ffffff80;
  }
}
.active {
  background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
  mix-blend-mode: normal;
  backdrop-filter: blur(74px);
}
</style>