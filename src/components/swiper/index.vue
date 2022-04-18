<template>
  <div class="swiper">
    <slot name="swiper-item" />
  </div>
</template>

<script>
export default {
  name: "Swiper",

  data() {
    return {};
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.swiper {
  display: flex;
  flex-wrap: nowrap;
}
</style>