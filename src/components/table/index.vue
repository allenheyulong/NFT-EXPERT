<template>
  <div class="table">
    <div class="title">{{ title }}</div>

    <div class="box">
      <template v-for="(item, index) of data">
        <div class="row" :key="index">
          <div>{{ item.title }}</div>
          <div v-if="item.showIcon">
            <span class="icon iconfont icon-jiantou_xiangshang"></span>
            <span>{{ item.persent }}%</span>
          </div>
          <div v-else>{{ item.money }}USDT</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",

  props: {
    data: Array,
    title: String,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.table {
  margin-left: 20px;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #dc39fc;
    margin-bottom: 15px;
    text-align: left;
  }
  .box {
    padding: 20px;
    width: 334px;
    background: rgba(255, 255, 255, 0.05);
    mix-blend-mode: normal;
    border-radius: 5px;
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 17.5px;
      div:first-child {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #ffffff80;
      }
      div:last-child {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #ffffff;
        span.icon {
          color: #00df3e;
        }
      }
    }
    .row:last-child {
      margin-bottom: 0;
    }
  }
}
</style>