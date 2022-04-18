<template>
  <div class="record">
    <div class="top">
      <span class="icon iconfont icon-guanbi" @click="close"></span>
    </div>

    <span class="circle _1"></span>
    <span class="circle _2"></span>
    <span class="circle _3"></span>

    <div class="title">Pledge Record</div>
    <div class="tabs">
      <div
        class="tab-item"
        :class="{ active: active === 'Transferring' }"
        @click="active = 'Transferring'"
      >
        Transferring
      </div>
      <div
        class="tab-item"
        :class="{ active: active === 'In progress' }"
        @click="active = 'In progress'"
      >
        In progress
      </div>
      <div
        class="tab-item"
        :class="{ active: active === 'Completed' }"
        @click="active = 'Completed'"
      >
        Completed
      </div>
    </div>

    <tab-container v-model="active" :swipeable="true">
      <tab-container-item id="Transferring">
        <Transferring />
      </tab-container-item>
      <tab-container-item id="In progress">
        <Progress />
      </tab-container-item>
      <tab-container-item id="Completed">
        <Completed />
      </tab-container-item>
    </tab-container>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from "mint-ui";
import Transferring from "./Transferring";
import Progress from "./Progress";
import Completed from "./Completed";

export default {
  name: "PledgeRecord",

  components: {
    Completed,
    Progress,
    Transferring,
    TabContainer,
    TabContainerItem,
  },

  data() {
    return {
      active: "Transferring",
    };
  },

  methods: {
    close() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.record {
  padding: 0 20px;
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
  ._3 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    left: -10.54px;
    bottom: 30px;
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
  .top {
    height: 32px;
    line-height: 32px;
    text-align: right;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .tabs {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    .active {
      background: linear-gradient(
        89.71deg,
        #6929af 1.95%,
        #3b2999 99.75%
      ) !important;
    }
    .tab-item {
      padding: 9px 19px;
      background: #ffffff1f;
      border-radius: 5px;
      font-size: 9px;
      text-align: center;
      letter-spacing: 0.03em;
      color: #fff;
      margin-left: 4px;
    }
  }
}
</style>