<template>
  <div class="today module-box">
    <h4 class="module-title">今日居民出行情况</h4>
    <div class="stat">
      <div class="card" style="background-color: #00A1F2;">
        <h5>酒店入住人数</h5>
        <p>12,345<span>人</span></p>
        <img src="./building@2x.png" alt="">
      </div>
      <div class="card" style="background-color: #FF6666;">
        <h5>景区进出人数</h5>
        <p>12,345<span>人</span></p>
        <img src="./mountain@2x.png" alt="">
      </div>
    </div>
    <div class="cars">
      <div class="item">
        <img src="./bus@2x.png" alt="">
        <h6>2554 <span>人/次</span></h6>
        <p>公交出行</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./taxi@2x.png" alt="">
        <h6>19,312 <span>单</span></h6>
        <p>出租车订单量</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./car@2x.png" alt="">
        <h6>3114 <span>车次</span></h6>
        <p>长途发车数量</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.today
  margin-top 16px
.stat
  display flex
  justify-content space-between
.cars
  margin-top 25px
  display flex
  align-items center
  .line
    width 1px
    height 40px
    background-color #E6EAF2
  .item
    flex 1
    text-align center
    line-height normal
    &>img
      display block
      padding-bottom 11px
      width 24px
      margin 0 auto
      height 24px
    &>h6
      margin-bottom 8px
      line-height 18px
      font-size 16px
      color #334365
      font-weight bold
      &>span
        font-size 12px
        font-weight 400
    &>p
      line-height 14px
      font-size 12px
      color #7DA1B3
</style>
