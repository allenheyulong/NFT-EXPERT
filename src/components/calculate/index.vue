<template>
  <div class="calculate">
    <div class="bg"></div>

    <div class="form">
      <div class="content">
        <div class="input">
          <input
            type="text"
            placeholder="Amount Ivested"
            v-model="form.amount"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Yield" v-model="form.yield" />
        </div>
        <div class="input">
          <input type="text" placeholder="Lasts Days" v-model="form.days" />
        </div>
        <div class="input">
          <input type="text" placeholder="Total Return" v-model="form.total" />
        </div>
      </div>

      <div class="btns">
        <div class="btn">Calculate</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculate",

  data() {
    return {
      form: {
        amount: undefined,
        yield: undefined,
        days: undefined,
        total: undefined,
      },
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.calculate {
  height: 240px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    left: -25%;
    right: -25%;
    width: 150%;
    height: 220px;
    border-bottom-left-radius: 150%;
    border-bottom-right-radius: 150%;
    opacity: 0.2;
    background: linear-gradient(0deg, #1f34e7 0%, rgba(31, 52, 231, 0) 100.1%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 1;
  }
  .form {
    position: absolute;
    height: 240px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .input {
        border: 1px solid #ffffff33;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 12px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 9px;
        input {
          background: transparent;
          color: #ffffff;
        }
      }
      .input:first-child {
        margin-right: 10px;
        margin-bottom: 10px;
      }
      .input:nth-child(3) {
        margin-right: 10px;
      }
      .input:nth-child(2) {
        margin-bottom: 10px;
      }
    }
    .btns {
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        padding: 8px 15px;
        color: #ffffff;
        background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
        border-radius: 5px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 9px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
    }
  }
}
</style>