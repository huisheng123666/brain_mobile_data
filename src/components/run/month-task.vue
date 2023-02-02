<template>
  <div class="month-task module-box">
    <h4 class="module-title">本月重大项目挂图作战</h4>
    <div class="circle-card one">
      <div class="progress">
        <circle-progress :precent="30" class="circle" />
        <div class="info">
          <h6>纳入率</h6>
          <p>30%</p>
        </div>
      </div>
      <div class="right">
        <h6>签约</h6>
        <div class="data">
          <div class="item">签约数 <span>0</span>个</div>
          <div class="item">纳入管理 <span>0</span>个</div>
        </div>
      </div>
    </div>
    <div class="circle-card two">
      <div class="progress">
        <circle-progress :precent="30" class="circle" />
        <div class="info">
          <h6>纳入率</h6>
          <p>30%</p>
        </div>
      </div>
      <div class="right">
        <h6>签约</h6>
        <div class="data">
          <div class="item">应开工数 <span>0</span>个</div>
          <div class="item">已开工数 <span>0</span>个</div>
        </div>
      </div>
    </div>
    <div class="circle-card three">
      <div class="progress">
        <circle-progress :precent="30" class="circle" />
        <div class="info">
          <h6>纳入率</h6>
          <p>30%</p>
        </div>
      </div>
      <div class="right">
        <h6>竣工</h6>
        <div class="data">
          <div class="item">应竣工数 <span>0</span>个</div>
          <div class="item">已竣工数 <span>0</span>个</div>
        </div>
      </div>
    </div>
    <div class="videos">
      <h5>重大项目视频</h5>
      <div class="list">
        <div class="video watch-video">
          <img src="@/assets/play@2x.png" alt="">
          <p>宜昌至郑万高铁联络线</p>
        </div>
        <div class="video watch-video">
          <img src="@/assets/play@2x.png" alt="">
          <p>邦普一体化电池材料产业园</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CircleProgress from '@/components/circle-progress/circle-progress.vue';
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.month-task
  margin-top 16px
  .circle-card
    padding-left 22px
    display flex
    align-items center
    margin-bottom 8px
    height 96px
    border-radius 8px
    box-shadow inset 0px 10px 20px 0px rgba(255,255,255,0.2)
    &.one
      background-color #00A1F2
    &.two
      background-color #617AF2
    &.three
      background-color #29CC9A
    .progress
      margin-right 22px
      width 66px
      height 66px
      position relative
      .circle
        width 100%
        height 100%
      .info
        position absolute
        left 50%
        top 50%
        transform translateX(-50%) translateY(-50%)
        text-align center
        color #fff
        &>h6
          margin-bottom 4px
          white-space nowrap
          font-size 12px
        &>p
          font-size 16px
          font-weight bold
    .right
      color #fff
      &>h6
        margin-bottom 19px
        font-size 14px
      .data
        display flex
        font-size 12px
        .item
          &:first-child
            margin-right 32px
          &>span
            font-size 16px
            font-weight bold
  .videos
    margin-top 24px
    &>h5
      margin-bottom 16px
      font-size 12px
      color #334365
      font-weight 500
    .list
      display flex
      justify-content space-between
      .video
        width 158px
        height 88px
</style>
