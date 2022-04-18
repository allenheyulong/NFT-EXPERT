<template>
  <div class="table">
    <div class="title">{{ title }}</div>

    <div class="box">
      <template v-for="(item, index) of data">
        <div class="row" :key="index">
          <div>
            <span class="name"> {{ item.title }}</span>
            <span class="date">{{ item.date }}</span>
          </div>

          <div :class="{ red: item.money < 0 }">{{ item.money }}USDT</div>
        </div>
      </template>

      <div class="btns">
        <div class="pre">previous page</div>
        <div class="next">next page</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeRecord",

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
      height: 69px;
      align-items: center;
      border-bottom: 1px solid #c4c4c433;
      .red {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        text-align: right;
        color: #df0000 !important;
      }
      div:first-child {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #ffffff80;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
        span:first-child {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          color: #ffffff;
          margin-bottom: 10px;
        }
        span:last-child {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          color: #ffffff80;
        }
      }
      div:last-child {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #00df3e;
      }
    }
    .row:last-child {
      margin-bottom: 0;
    }
    .btns {
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      .pre {
        border-radius: 5px;
        padding: 9px 17px;
        color: #fff;
        font-size: 9px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        background: #ffffff1f;
        border-radius: 5px;
        margin-right: 8px;
      }
      .next {
        background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
        border-radius: 5px;
        padding: 9px 17px;
        color: #fff;
        font-size: 9px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
    }
  }
}
</style>