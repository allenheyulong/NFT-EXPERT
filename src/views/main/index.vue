<template>
  <section>
    <Header />

    <section class="content">
      <p class="title">
        Earn with us using the
most advanced and promising
NFT technology
      </p>
    </section>

  </section>
</template>

<script type="text/babel">
import Header from '@/components/Header'
// 组件
export default {
  name: 'PageMain',

  components: {
    Header
  },

  data() {
    return {
     
    };
  },

  methods: {
    
  }
};
</script>

<style lang="less" rel="stylesheet/less" >
.content {
  .title {
    width: 604px;
    height: 180px;
    margin-left: 39px;
    top: 244px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 42px;
    line-height: 60px;
    color: #FFFFFF;
  }
}
</style>
