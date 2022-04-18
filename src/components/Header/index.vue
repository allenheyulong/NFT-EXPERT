<template>
  <header :class="['component-header', 'is-fixed']">
    <div class="left">
      <!-- <menu-icon
        :show="showMenu"
        @click="showMenu = true"
        @close="showMenu = false"
      /> -->
      <img
        v-if="showMenu === false"
        src="@/assets/images/menu.png"
        class="menu"
        alt=""
        @click="showMenu = true"
      />
      <span
        v-else
        class="menu icon iconfont icon-guanbi"
        @click="showMenu = false"
      ></span>

      <img src="@/assets/images/logo.png" class="logo" alt="" />
    </div>

    <div class="right">
      <router-link to="/wallet" class="btn select">ERC</router-link>
      <!-- <router-link to="/invite" class="btn select">ERC</router-link> -->
      <!-- <button class="btn select">ERC</button> -->
      <button class="btn wallet">LINK WALLET</button>
    </div>

    <Menu :style="showMenu ? 'left: 0' : 'left: -214px'" />
  </header>
</template>

<script type="text/babel">
import Menu from "./Menu.vue";
import MenuIcon from "@/components/menu-icon";

export default {
  name: "BaseHeader",

  components: {
    Menu,
    MenuIcon,
  },

  data() {
    return {
      showMenu: false,
    };
  },

  computed: {},

  methods: {
    handleLeft: function () {
      this.$emit("handle-left");
    },

    handleRight: function () {
      this.$emit("handle-right");
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.component-header {
  display: flex;
  height: 67px;
  background: #14141f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    display: flex;
    align-items: center;

    .menu {
      height: auto;
      width: 19px;
      margin-right: 15px;
      font-size: 20px;
      color: #ffffff;
    }
    .logo {
      width: 118px;
      height: auto;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .btn {
      border-radius: 5px;
      font-size: 9px;
      font-weight: 500;
      padding: 8px 12px;
      color: #ffffff;
    }
    .select {
      height: 28px;
      margin-right: 4px;
      background: #494957;
    }
    .wallet {
      height: 28px;
      font-family: "Inter";
      font-style: normal;
      text-align: center;
      letter-spacing: 0.03em;
      background: linear-gradient(89.71deg, #6929af 1.95%, #3b2999 99.75%);
    }
  }
}
.component-header.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
</style>
