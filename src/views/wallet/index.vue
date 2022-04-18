<template>
  <section>
    <Header />

    <div class="top">
      <span class="circle _1"></span>
      <span class="circle _2"></span>
      <span class="circle _3"></span>
      <div class="balance-box">
        <img src="../../assets/images/wallet.png" alt="" srcset="" />
        <div class="title">589USDT</div>
        <div class="desc">ACCOUNT BALANCE</div>
        <div class="btn">AUTOMATIC WITHDRAWAL</div>
      </div>
    </div>

    <Table
      style="margin-top: 50px"
      title="NFT market making income"
      :data="marketIncome"
    />

    <div class="bg">
      <span class="circle _1"></span>
      <span class="circle _2"></span>
    </div>

    <Table
      style="margin-top: 30px"
      title="NFT pledge income"
      :data="pledgeIncome"
    />

    <ChangeRecord
      style="margin-top: 30px; margin-bottom: 24px"
      title="Account change record"
      :data="changeRecord"
    />
  </section>
</template>

<script>
import Header from "@/components/Header";
import Table from "@/components/table";
import ChangeRecord from "@/components/chang-record";

export default {
  name: "Wallet",

  components: {
    Header,
    Table,
    ChangeRecord,
  },

  data() {
    return {
      changeRecord: [
        {
          title: "Income",
          date: "2022/2/19 - 4:08",
          money: 100,
        },
        {
          title: "Expenditure",
          date: "2022/2/19 - 4:08",
          money: -10,
        },
        {
          title: "Expenditure",
          date: "2022/2/19 - 4:08",
          money: -50,
        },
        {
          title: "Income",
          date: "2022/2/19 - 4:08",
          money: 1000,
        },
      ],
      pledgeIncome: [
        {
          title: "current pledge",
          money: 100,
        },
        {
          title: "current earnings",
          money: 1000,
        },
        {
          title: "Accumulated pledge",
          money: 100,
        },
        {
          title: "cumulative income",
          money: 1000,
        },
      ],
      marketIncome: [
        {
          title: "On-chain balance",
          money: 1000,
        },
        {
          title: "Current yield",
          showIcon: true,
          persent: "1-1.3",
        },
        {
          title: "Earnings today",
          money: 100,
        },
        {
          title: "Cumulative income",
          money: 1000,
        },
      ],
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
section {
  margin-top: 67px;
  background: #000000;
  min-height: calc(100% - 67px);
  overflow-x: hidden;
  .bg {
    position: relative;
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
  }
  .top {
    position: relative;
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

    .balance-box {
      position: relative;
      margin-top: 211px;
      margin-left: 20px;
      padding: 34px 45px;
      width: 333px;
      height: 233px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 5px;
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      align-items: center;
      text-align: center;
      img {
        position: absolute;
        top: -180px;
        width: 131px;
        height: auto;
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }
      .title {
        font-size: 25px;
        font-weight: 600;
        color: #fff;
      }
      .desc {
        font-size: 12.5px;
        letter-spacing: 0.1em;
        color: #ffffff80;
        margin-top: 20px;
        margin-bottom: 16px;
      }
      .btn {
        padding: 8.5px 37px;
        background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
        border-radius: 5px;
        color: #ffffff;
        font-weight: 500;
        font-size: 9px;
        text-align: center;
        letter-spacing: 0.03em;
      }
    }
  }
}
</style>