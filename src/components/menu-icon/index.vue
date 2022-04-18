<template>
  <div class="menu-icon" :class="{ 'menu-closeable': show }">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "MenuIcon",

  props: {
    show: Boolean,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@menu-size: 50px;
@menu-stroke: 4px;
@menu-stroke-color: #fff;
@menu-animation-duration: 0.3s;

.menu-icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: @menu-size;
  span {
    width: @menu-size;
    height: @menu-stroke;
    display: block;
    transition-property: opacity transform top;
    transition-duration: @menu-animation-duration;
    background-color: @menu-stroke-color;
  }
  span:nth-child(2) {
    transition-duration: 0.1s;
  }
}

.menu-closeable {
  position: relative;
  span:nth-child(1) {
    position: absolute;
    transform: rotateZ(45deg);
    top: @menu-size / 2;
  }
  span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    position: absolute;
    transform: rotateZ(-45deg);

    top: @menu-size / 2;
  }
}
</style>