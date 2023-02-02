<template>
  <div class="cctv module-box">
    <h4 class="module-title">重大活动数字护航</h4>
    <div class="videos" v-for="item in list" :key="item">
      <h5>{{ item }}</h5>
      <div class="list">
        <div class="video watch-video">
          <img src="@/assets/play@2x.png" alt="">
          <p>监控视频名称</p>
        </div>
        <div class="video watch-video">
          <img src="@/assets/play@2x.png" alt="">
          <p>监控视频名称</p>
        </div>
        <div class="video watch-video">
          <img src="@/assets/play@2x.png" alt="">
          <p>监控视频名称</p>
        </div>
        <div class="video watch-video">
          <img src="@/assets/play@2x.png" alt="">
          <p>监控视频名称</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = ['夷陵区', '西陵区', '伍家岗区、点军区', '猇亭区', '高新区']
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.cctv
  margin-top 16px
  .videos
    margin-top 24px
    &>h5
      margin-bottom 16px
      font-size 12px
      color #334365
      font-weight 500
    .list
      display flex
      flex-wrap wrap
      justify-content space-between
      .video
        width 158px
        height 88px
        &:nth-child(1), &:nth-child(2)
          margin-bottom 8px
</style>
