<template>
  <div class="content">
    <div class="top">
      <span class="circle _1"></span>
      <span class="circle _2"></span>
      <span class="circle _3"></span>

      <div class="box">
        <template v-for="(item, index) of data">
          <div class="row" :key="index">
            <div>{{ item.title }}</div>
            <div>{{ item.money }}</div>
          </div>
        </template>
      </div>

      <div class="amount">
        <span>Amount</span>
        <input type="text" placeholder="Enter Amount" v-model="money" />
      </div>

      <div class="btns">
        <div class="btn">continue to pledge</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",

  data() {
    return {
      money: undefined,
      data: [
        {
          title: "The name of the NFT",
          money: "In progress",
        },
        {
          title: "Pledge requirement",
          money: "100000",
        },
        {
          title: "My pledge",
          money: "1000USDT",
        },
        {
          title: "Need to pledge",
          money: "99000USDT",
        },
        {
          title: "Total cycle",
          money: "10",
        },
        {
          title: "Expected reward",
          money: "1000USDT",
        },
        {
          title: "End Time",
          money: "2022/2/19 - 4:08",
        },
      ],
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content {
  padding: 20px;
  width: 334px;
  background: rgba(255, 255, 255, 0.05);
  mix-blend-mode: normal;
  border-radius: 5px;
  .row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 17.5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
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
    }
  }
  .row:last-child {
    border-bottom: 1px solid #c4c4c433;
  }
  .amount {
    margin: 30px 0 20px 0;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff80;
    span {
      margin-bottom: 12px;
    }
    input {
      border: 0.5px solid #ffffff;
      padding: 11px 15px;
      width: 100%;
      border-radius: 5px;
      background: transparent;
    }
  }
  .btns {
    width: 100%;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
      border-radius: 5px;
      padding: 9px 31px;
      color: #ffffff;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
  }
}
</style>