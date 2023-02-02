<template>
  <div class="traffic module-box">
    <h4 class="module-title">城市交通情况</h4>
    <div class="cards">
      <div class="progress">
        <circle-progress :precent="30" :line-width="10" class="circle" />
        <div class="num">
          <h6>今日拥堵指数</h6>
          <p>1.2</p>
        </div>
      </div>
      <div class="progress">
        <circle-progress :precent="40" :line-width="10" class="circle" />
        <div class="num">
          <h6>停车泊位周转率</h6>
          <p>0.6</p>
        </div>
      </div>
    </div>
    <div class="rank">
      <h5 class="sub-title">实时拥堵排名</h5>
      <div class="item">
        <h6>湖堤街 从隆康路到福绥路-由东向西</h6>
        <div class="line-per">
          <div class="active"></div>
        </div>
      </div>
      <div class="item">
        <h6>西陵大道-由东向西</h6>
        <div class="line-per">
          <div class="active"></div>
        </div>
      </div>
      <div class="item">
        <h6>恒云路-由东向西</h6>
        <div class="line-per">
          <div class="active"></div>
        </div>
      </div>
    </div>
    <div class="icon-parking">
      <div class="item">
        <img src="./traffic1@2x.png" alt="">
        <div class="info">
          <h6>停车场数量</h6>
          <p>883<span>个</span></p>
        </div>
      </div>
      <div class="item">
        <img src="./traffic2@2x.png" alt="">
        <div class="info">
          <h6>停车位数量</h6>
          <p>299,318<span>个</span></p>
        </div>
      </div>
    </div>
    <div class="icon-data">
      <div class="item">
        <img src="./traffic3@2x.png" alt="">
        <h6>76.82%</h6>
        <p>饱和度</p>
      </div>
      <div class="item">
        <img src="./traffic4@2x.png" alt="">
        <h6>69,395</h6>
        <p>剩余车位数</p>
      </div>
      <div class="item">
        <img src="./traffic5@2x.png" alt="">
        <h6>224,574</h6>
        <p>今日进场数</p>
      </div>
      <div class="item">
        <img src="./traffic6@2x.png" alt="">
        <h6>162,517</h6>
        <p>今日离场数</p>
      </div>
    </div>
    <div class="cctv">
      <h5 class="sub-title">停车场监控视频</h5>
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>长途客运站</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CircleProgress from '@/components/circle-progress/circle-progress.vue';
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.sub-title
  font-size 12px
  color #334365
.traffic
  margin-top 16px
  .cards
    display flex
    justify-content space-between
    .progress
      height 68px
      box-sizing border-box
      padding-left 16px
      display flex
      align-items center
      width 157px
      box-shadow inset 0px 10px 20px 0px rgba(255,255,255,0.2)
      border-radius 8px
      background-color #00A1F2
      &:last-child
        background-color #617AF2
        box-shadow: inset 0px 10px 20px 0px rgba(255,255,255,0.2)
      .circle
        margin-right 16px
        width 34px
        min-width 34px
        height 34px
      .num
        &>h6
          font-size 12px
          color #FFFFFF
        &>p
          margin-top 8px
          font-size 16px
          color #FFFFFF
          font-weight bold
  .rank
    margin-top 24px
    .item
      margin-top 16px
      &>h6
        margin-bottom 8px
        font-size 12px
        color #334365
      .line-per
        width 100%
        height 6px
        background-color #E6ECF2
        position relative
        .active
          position absolute
          left 0
          top 0
          height 6px
          width 15%
          background-color #FF4D5A
  .icon-parking
    margin-top 24px
    display flex
    justify-content space-between
    .item
      box-sizing border-box
      width 157px
      display flex
      align-items center
      height 68px
      padding-left 16px
      border 1px solid #E6ECF2
      border-radius 8px
      &>img
        margin-right 16px
        width 32px
        height 32px
      .info
        &>h6
          margin-bottom 8px
          font-size 12px
          color #334365
        &>p
          font-size 16px
          color #334365
          font-weight bold
          &>span
            font-size 12px
            font-weight 400
  .icon-data
    display flex
    justify-content space-between
    margin-top 27px
    .item
      text-align center
      &>img
        padding-bottom 8px
        width 24px
        height 24px
      &>h6
        margin-bottom 8px
        font-size 16px
        color #334365
        font-weight bold
      &>p
        font-size 12px
        color #7DA1B3
  .cctv
    margin-top 24px
    .video
      margin-top 8px
      height 180px
</style>
