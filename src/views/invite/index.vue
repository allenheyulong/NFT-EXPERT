<template>
  <section>
    <Header />

    <div class="top">
      <span class="circle _1"></span>
      <span class="circle _2"></span>
      <span class="circle _3"></span>
      <h2 class="title">Invite Friends</h2>
      <div class="desc">
        Invite your friends & family and get profit from refferal bonus
      </div>
      <div class="group">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="text">
          Each member receive a unique referral link to share with friends and
          family and earn bonuses
        </div>
        <div class="tip">For their plegde output 5.0%, 3.0% 2.0%</div>
      </div>
    </div>

    <div class="code">
      <img src="../../assets/images/kongfu.png" alt="" srcset="" />

      <span class="circle _1"></span>
      <span class="circle _2"></span>
      <div class="qrcode" ref="qrCodeUrl"></div>
      <div class="input">
        <div class="text">{{ address }}</div>
        <div class="btn" @click="copy">
          <span class="icon iconfont icon-Copy"></span>
          COPY
        </div>
      </div>
    </div>

    <div class="team-box">
      <Team title="Team Benefits" :is-active="true" money="9,000" />
      <Team title="Team size" money="10000USDT" />
    </div>

    <div class="income-box">
      <Income
        v-for="(income, index) of incomes"
        :key="index"
        v-bind="income"
        class="income"
      />
    </div>

    <Apply />
    <Copyright />
  </section>
</template>

<script>
import Header from "@/components/Header";
import Team from "@/components/team";
import Income from "@/components/income";
import Apply from "@/components/apply";
import Copyright from "@/components/copyright";

import { Toast } from "mint-ui";
import QRCode from "qrcodejs2";

export default {
  name: "Invite",

  components: {
    Header,
    Team,
    Income,
    Apply,
    Copyright,
  },

  data() {
    return {
      address: "https://preview.themeforest.net/item/neesdfsdf",
      incomes: [
        {
          title: "1st Generation",
          money: "1000USDT",
          total: 300,
        },
        {
          title: "2nd Generation",
          money: "1000USDT",
          total: 300,
        },
        {
          title: "3rd Generation",
          money: "1000USDT",
          total: 300,
        },
      ],
    };
  },

  mounted() {
    this.qrcode = new QRCode(this.$refs.qrCodeUrl, {
      text: this.address,
      width: 180,
      height: 180,
      colorDark: "#3B2999",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },

  methods: {
    async copy() {
      await this.$copyText(this.address);
      Toast("复制成功");
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
section {
  margin-top: 67px;
  background: #000000;
  min-height: calc(100% - 67px);
  overflow-x: hidden;
  .circle {
    position: absolute;
    display: inline-block;
  }
  ._1 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    left: -150px;
    top: 50px;
    background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        #db39fa 0%,
        #b932d5 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.6;
    filter: blur(150px);
    transform: rotate(13.97deg);
  }
  ._2 {
    width: 254px;
    height: 254px;
    right: -150px;
    top: 150px;
    background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.6;
    filter: blur(150px);
  }
  .top {
    position: relative;
    padding: 36px 20px;

    ._3 {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      left: -10.54px;
      bottom: 0px;
      background: radial-gradient(
          53.9% 53.9% at 77.01% 30.21%,
          rgba(31, 195, 231, 0.84375) 0%,
          #1f34e7 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      opacity: 0.15;
      filter: blur(100px);
      transform: rotate(13.97deg);
    }
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 30px;
      text-transform: uppercase;
      color: #ffffff;
    }
    .desc {
      margin: 15px 63px 30px 63px;
      text-align: center;
      width: 250px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #ffffff80;
    }
    .group {
      position: relative;
      width: 333px;
      height: 110px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(74px);
      border-radius: 5px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
      padding: 30px 26px;
      .circle1 {
        position: absolute;
        display: inline-block;
        width: 64px;
        height: 20px;
        left: 0;
        top: 0;
        // opacity: 0.7;
        transform: rotate(-14.48deg);
      }
      .circle2 {
        position: absolute;
        display: inline-block;
        width: 106px;
        height: 31px;
        left: 0;
        top: 0;
        // opacity: 0.4;
        transform: rotate(16.9deg);
      }
      .text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 11px;
        color: #ffffff;
      }
      .tip {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 9px;
        text-transform: uppercase;
        color: #dc39fc;
      }
    }
  }
  .code {
    position: relative;
    margin-top: 250px;
    margin-left: 21px;
    padding: 30px 21px;
    width: 333px;
    height: 348px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    img {
      position: absolute;
      top: -250px;
      width: 350px;
      height: auto;
    }
    .input {
      display: flex;
      justify-content: space-between;
      background: transparent;
      .text {
        border: 0.5px solid #ffffff;
        box-sizing: border-box;
        border-radius: 5px;
        width: 215px;
        padding: 8px 10px;
        overflow: hidden;
        white-space: nowrap;
        text-orientation: ellipse;
        margin-right: 5px;
        background: transparent;
        color: #fff;
        font-size: 9px;
      }
      .btn {
        background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
        border-radius: 5px;
        padding: 8px 15px;
        color: #fff;
        font-size: 9px;
        text-align: center;
        letter-spacing: 0.03em;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          margin-right: 5px;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    .qrcode {
      width: 150px;
      height: 150px;
      background-color: #fff;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-bottom: 25px;
    }
  }
  .team-box {
    margin: 25px 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .income-box {
    padding: 25px 20px;
    width: 100vw;
    .income {
      margin-bottom: 8px;
    }
  }
}
</style>