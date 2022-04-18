<template>
  <div class="menu">
    <div class="menu-item" v-for="(menu, index) of menus" :key="index">
      <div @click="$router.push(menu.url)">{{ menu.label }}</div>
    </div>

    <div class="menu-item">
      <Dropdown
        :options="[
          { id: 1, name: 'Option 1' },
          { id: 2, name: 'Option 2' },
        ]"
        v-on:selected="validateSelection"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";

export default {
  name: "Menu",

  components: {
    Dropdown,
  },

  data() {
    return {
      showSelect: false,
      menus: [
        {
          url: "/",
          label: "Home",
        },
        {
          url: "/",
          label: "About us",
        },
        {
          url: "/",
          label: "NFT market making",
        },
        {
          url: "/",
          label: "NFT pledge",
        },
        {
          url: "/",
          label: "Invite friends",
        },
        {
          url: "/",
          label: "Account center",
        },
      ],
    };
  },

  methods: {
    validateSelection(a, b) {
      console.log(a, b);
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.menu {
  position: absolute;
  top: 67px;
  left: 0;
  min-height: 100vh;
  background: rgba(179, 179, 179, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 20px 30px;
  transition: all 0.5s linear;
  .menu-item {
    height: 64px;
    line-height: 64px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    width: 100%;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    border-bottom: 1px solid #c4c4c433;
  }
  .menu-item:last-child {
    border: none;
  }
}
</style>