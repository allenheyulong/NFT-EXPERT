<template>
  <div class="income">
    <div class="title">{{ title }}</div>
    <div class="money">
      <div class="money-income">
        <span>Income: </span>
        <span>{{ money }}</span>
      </div>
      <div class="money-people">
        <span>People: </span>
        <span>{{ total }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Income",

  props: {
    title: String,
    money: String,
    total: Number,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.income {
  padding: 0 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 335px;
  height: 97px;
  background: rgba(255, 255, 255, 0.05);
  mix-blend-mode: normal;
  backdrop-filter: blur(37px);
  border-radius: 5px;
  .title {
    font-weight: 400;
    font-size: 14px;
    color: #dc39fc;
    padding: 10px 0;
    border-bottom: 1px solid #c4c4c4;
    text-align: left;
  }
  .money {
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .money-income,
    .money-people {
      span:first-child {
        font-size: 12px;
        color: #fff;
      }
      span:last-child {
        font-size: 12px;
        color: #ffffff80;
      }
    }
  }
}
</style>