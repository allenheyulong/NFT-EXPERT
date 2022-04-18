<template>
  <div class="swiper-bottom">
    <div></div>
    <div class="swiper-pagination">
      <span class="circle active"></span>
      <span class="circle"></span>
      <span class="circle"></span>
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
</template>

<script>
export default {};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.swiper-bottom {
  display: flex;
  padding: 25px 20px;
  justify-content: space-between;
  height: 78px;
  align-items: center;
  .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    .circle {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ffffff;
      opacity: 0.2;
      margin-left: 2px;
    }
    .active {
      width: 15px;
      opacity: 1;
      border-radius: 25%;
    }
  }
  .swiper-btns {
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      width: 28px;
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
</style>