<template>
  <section>
    <Header />

    <section class="content">
      <div class="top">
        <div class="top-text">
          <div class="title">
            Earn with us using the most advanced and promising NFT technology
          </div>

          <div class="sub-title">
            Appreciate all the diversity of the NFT world. Buy, create, and
            collect in the fastest growing NFT marketplace.
          </div>
        </div>

        <span class="pop red"></span>
        <span class="pop blue"></span>
        <span class="pop white"></span>

        <div class="swiper-img">
          <div class="swiper-items">
            <img src="../../assets/images/swiper-img1.png" alt="" srcset="" />
          </div>

          <div class="swiper-btns">
            <div class="pre">
              <svg
                width="7"
                height="12"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7676 22.8534L1.87041 11.9562L12.7676 1.05908"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="next">
              <svg
                width="7"
                height="12"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33594 23.723L12.2331 12.8259L1.33594 1.92871"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="maker-list">
        <div class="bg"></div>
        <div class="title">
          <p>NFT Market Maker List</p>
        </div>
        <div class="swiper">
          <div class="swiper-item">
            <img src="../../assets/images/monkey1.png" alt="" srcset="" />
            <div class="desc">
              <span class="address">0x23a...f77</span>
              <span class="money">1671 USDT</span>
            </div>
          </div>
          <div class="swiper-item">
            <img src="../../assets/images/monkey2.png" alt="" srcset="" />
            <div class="desc">
              <span class="address">0x23a...f77</span>
              <span class="money">1671 USDT</span>
            </div>
          </div>
          <div class="swiper-item">
            <img src="../../assets/images/monkey3.png" alt="" srcset="" />
            <div class="desc">
              <span class="address">0x23a...f77</span>
              <span class="money">1671 USDT</span>
            </div>
          </div>
        </div>

        <swiper-bottom />
      </div>

      <div class="about-us">
        <span class="pop red"></span>
        <span class="pop blue"></span>
        <div class="text">
          <h3>ABOUT US</h3>
          <h2>Our Mission</h2>
          <p>
            The emergence of NFTs has given people a lot of opportunities. NFTs
            can be used in various fields. Many people use NFTs for creative and
            artistic creation. Thanks to NFTs, everyone can express themselves
            and follow his work, while the author can benefit from his
            creativity and ideas.
          </p>
          <p>
            There are many NFT marketplaces now. However, due to the complexity
            of making collectibles and the high cost of creating collectibles,
            most markets remain out of reach for most people.
          </p>
          <p>
            Large commissions make the creation of NFTs unprofitable and there
            is no opportunity to sell NFTs at affordable prices. NFT authors in
            particular are forced to pay dearly for their work, as they have to
            pay exorbitant network commissions.
          </p>
          <p>
            This makes NFTs only available to selected people who can pay
            collection costs and all commissions.
          </p>
          <p>
            Our main mission is to make NFTs accessible to everyone, so that
            everyone can not only create NFTs, but buy any NFTs without
            overpaying commissions or paying exorbitant prices. We make NFTs
            available to everyone. This is our mission.
          </p>
        </div>
      </div>

      <div class="about-us-img">
        <img src="../../assets/images/run.png" alt="" srcset="" />
      </div>

      <TextSwiper
        title="NFT market making"
        desc="The creator puts NFT assets into the liquidity pool, and anyone can
            add liquidity to any NFT transaction through the AMM pool to earn
            market-making income."
        height="550px"
      >
        <template #swiper>
          <DailyShareAPY v-for="item of 3" :key="item" />
        </template>
      </TextSwiper>

      <TextSwiper
        title="NFT pledge income"
        desc="The creator puts NFT assets into the liquidity pool, 
        and anyone can add liquidity to any NFT transaction through the AMM pool to earn market-making income."
        height="650px"
      >
        <template #swiper>
          <TotalAPY v-for="item of 3" :key="item" />
        </template>
      </TextSwiper>

      <Calculate />

      <FAQ />

      <TextSwiper
        title="Our latest series"
        desc="The collections on our platform are constantly updated and new collections appear. Don t miss the chance. Create your own collections, or buy your favorites."
      >
        <template #swiper>
          <SwiperItemSeries class="item" v-for="item of 3" :key="item" />
        </template>
      </TextSwiper>

      <Category
        title="Popular Categories"
        desc="The creator puts NFT assets into the liquidity pool, and anyone can add liquidity to any NFT transaction through the AMM pool to earn market-making income."
      />

      <Apply />

      <Steps />

      <Support />

      <Copyright />
    </section>
  </section>
</template>

<script type="text/babel">
import Header from "@/components/Header";
import DailyShareAPY from "@/components/daily-share-APY";
import TotalAPY from "@/components/total-apy";
import TextSwiper from "@/components/text-swiper";
import SwiperBottom from "@/components/swiper-bottom";
import Calculate from "@/components/calculate";
import FAQ from "@/components/faq";
import Swiper from "@/components/swiper";
import SwiperItemSeries from "@/components/swiper-item/series";
import Category from "@/components/category";
import Apply from "@/components/apply";
import Steps from "@/components/steps";
import Support from "@/components/support";
import Copyright from "@/components/copyright";

// 组件
export default {
  name: "PageMain",

  components: {
    Header,
    DailyShareAPY,
    TextSwiper,
    TotalAPY,
    SwiperBottom,
    Calculate,
    FAQ,
    Swiper,
    SwiperItemSeries,
    Category,
    Apply,
    Steps,
    Support,
    Copyright,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.content {
  margin-top: 67px;
  background: #000000;
  min-height: calc(100% - 67px);
  .top {
    position: relative;
    overflow: hidden;
    height: 600px;
    .pop {
      display: inline-block;
      position: absolute;
      filter: blur(150px);
    }
    .red {
      width: 168px;
      height: 168px;
      border-radius: 50%;
      left: -116px;
      top: 122px;
      background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        #db39fa 0%,
        #b932d5 100%
      );
      opacity: 0.84;
    }
    .blue {
      width: 285px;
      height: 285px;
      border-radius: 50%;
      left: 230px;
      top: -32.5px;
      background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      );
      opacity: 0.5;
    }
    .white {
      width: 168px;
      height: 168px;
      border-radius: 50%;
      left: 20px;
      top: 241px;
      background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      );
      opacity: 0.6;
    }
    .top-text {
      position: absolute;
      width: 90%;
      left: 20px;
      top: 62px;
      text-align: left;
      font-family: "Inter";
      font-style: normal;
      color: #ffffff;
      .title {
        font-size: 21px;
        line-height: 30px;
        letter-spacing: 0.05em;
      }
      .sub-title {
        font-size: 11px;
        line-height: 20px;
        opacity: 0.5;
      }
    }
    .swiper-img {
      margin-top: 220px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;
      .swiper-items {
        display: flex;
        justify-content: center;
        width: 301px;
        .swiper-item {
          position: relative;
          .robo {
            width: 100%;
          }
          ._1 {
            position: absolute;
            width: 107px;
            height: 31px;
            top: 0;
            right: 0;
            transform: rotate(3deg);
          }
          ._2 {
            position: absolute;
            width: 46px;
            height: 13px;
            top: -10px;
            left: 55px;
            transform: rotate(3deg);
          }
          ._3 {
            position: absolute;
            width: 46px;
            height: 13px;
            top: 20px;
            left: 30px;
            transform: rotate(-8.76deg);
          }
          ._4 {
            position: absolute;
            width: 28px;
            height: 8px;
            left: 50px;
            bottom: 50px;
            transform: rotate(3.91deg);
          }
        }
      }
      .swiper-btns {
        width: 100vw;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 41px;
          width: 41px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 20px;
        }
        .pre {
          background-color: #1f1f1f;
          margin-right: 6px;
        }
        .next {
          background-color: #1f34e7;
        }
      }
    }
  }
  .maker-list {
    position: relative;
    height: 366px;
    color: #ffffff;
    overflow: hidden;
    margin-top: 40px;
    .bg {
      position: absolute;
      left: -25%;
      right: -25%;
      width: 150%;
      height: 318px;
      border-bottom-left-radius: 150%;
      border-bottom-right-radius: 150%;
      background: linear-gradient(
        0deg,
        #1f34e7 0%,
        rgba(31, 52, 231, 0) 100.07%
      );
      opacity: 0.2;
      transform: rotate(180deg);
    }
    .title {
      padding-top: 48px;
      font-family: "Inter";
      font-style: normal;
      font-size: 15px;
      line-height: 60px;
      text-align: center;
      color: #ffffff;
    }
    .swiper {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      .swiper-item {
        position: relative;
        margin-left: 21px;
        flex-shrink: 0;
        img {
          width: 145px;
          height: auto;
          border-radius: 4px;
        }
        .desc {
          position: absolute;
          bottom: 4px;
          left: 4px;
          right: 4px;
          background: #000000;
          opacity: 0.6;
          backdrop-filter: blur(11.9285px);
          border-radius: 4px;
          text-align: center;
          display: flex;
          flex-flow: column;
          height: 28px;
          align-items: center;
          justify-content: center;
          .address {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 8px;
            text-align: center;
            color: #ffffff;
            opacity: 0.88;
          }
          .money {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 5px;
            text-align: center;
            color: #ffffff;
          }
        }
      }
    }
  }

  .about-us {
    margin: 20px;
    padding: 20px;
    width: calc(100vw - 50px);
    height: 515px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(74px);
    border-radius: 10px;
    position: relative;
    font-size: 11px;
    color: #ffffff;
    opacity: 0.5;
    overflow: hidden;
    .text {
      display: flex;
      justify-content: space-around;
      flex-flow: column;
      align-items: center;
      height: 100%;
      h3 {
        font-weight: 600;
        font-size: 8px;
        letter-spacing: 0.1em;
        color: #dc39fc;
      }
      h2 {
        font-weight: 600;
        font-size: 15px;
        text-align: center;
        color: #ffffff;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        text-indent: 2em;
      }
    }
    .pop {
      display: inline-block;
      position: absolute;
      filter: blur(150px);
    }
    .red {
      width: 168px;
      height: 168px;
      border-radius: 50%;
      left: -84px;
      top: 122px;
      background: radial-gradient(
        50% 50% at 0.01% 0.21%,
        #341839 0%,
        #f7004f 100%
      );
      opacity: 0.84;
    }
    .blue {
      width: 285px;
      height: 285px;
      border-radius: 50%;
      left: 230px;
      top: -32.5px;
      background: radial-gradient(
        53.9% 53.9% at 77.01% 30.21%,
        rgba(31, 195, 231, 0.84375) 0%,
        #1f34e7 100%
      );
      opacity: 0.5;
    }
  }
  .about-us-img {
    width: 100vw;
    overflow: hidden;
    img {
      width: 343px;
      height: auto;
    }
  }
  .series {
    .swiper-series {
      overflow: auto;
      .item {
        margin-left: 21px;
      }
    }
  }
}
</style>
