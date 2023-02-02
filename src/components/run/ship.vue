<template>
  <div class="ship module-box">
    <h4 class="module-title">车辆船舶情况</h4>
    <div class="data-card">
      <div class="card" style="background-color: #29CC9A;">
        <h5>车辆入宜数</h5>
        <p>12,739<span>辆</span></p>
        <img src="./in@2x.png" alt="">
      </div>
      <div class="card" style="background-color: #FF9F19;">
        <h5>车辆出宜数</h5>
        <p>13,014<span>辆</span></p>
        <img src="./out@2x.png" alt="">
      </div>
    </div>
    <div class="icon-data">
      <div class="item">
        <img src="./ship1@2x.png" alt="">
        <h6>832</h6>
        <p>待闸船舶总数</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./ship2@2x.png" alt="">
        <h6>372</h6>
        <p>坝上待闸</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./ship3@2x.png" alt="">
        <h6>3</h6>
        <p>两坝间</p>
      </div>
      <div class="item">
        <img src="./ship4@2x.png" alt="">
        <h6>458</h6>
        <p>坝下待闸</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./ship5@2x.png" alt="">
        <h6>91.81</h6>
        <p>航运景气指数</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./ship6@2x.png" alt="">
        <h6>0.00 <span>吨</span></h6>
        <p>昨日货物总量</p>
      </div>
    </div>
    <ul class="percent">
      <li>
        <h6>电动车总数</h6>
        <p>12,739</p>
      </li>
      <li>
        <h6>本周新增</h6>
        <p>52,82</p>
      </li>
      <li>
        <h6>环比（周）</h6>
        <p>1.09 <span>%↑</span></p>
      </li>
    </ul>
    <ul class="percent">
      <li>
        <h6>机动车总数</h6>
        <p>12,739</p>
      </li>
      <li>
        <h6>本周新增</h6>
        <p>52,82</p>
      </li>
      <li>
        <h6>环比（周）</h6>
        <p>1.09 <span>%↑</span></p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.ship
  margin-top 16px
  .data-card
    display flex
    justify-content space-between
  .icon-data
    margin-bottom 24px
    display flex
    justify-content space-between
    flex-wrap wrap
    align-items center
    .item
      margin-top 24px
      width 30%
      text-align center
      &>img
        padding-bottom 11px
        width 24px
        height 24px
      &>h6
        margin-bottom 8px
        font-size 16px
        color #334365
        font-weight bold
        &>span
          font-size 12px
          font-weight 400
      &>p
        font-size 12px
        color #7DA1B3
    .line
      width 1px
      height 40px
      background-color #E6EAF2
  .percent
    height 68px
    display flex
    align-items center
    margin-bottom 8px
    border-radius 8px
    background linear-gradient(90deg, #F2FCFF 0%, #E6F9FF 100%)
    &>li
      flex 1
      text-align center
      &>h6
        margin-bottom 8px
        font-size 12px
        color #334365
      &>p
        font-size 16px
        color #3399FF
        font-weight bold
      &:last-child
        &>p
          color #00D8C3
          &>span
            font-size 12px
</style>
