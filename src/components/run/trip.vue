<template>
  <div class="trip module-box">
    <h4 class="module-title">今日进出宜人员情况</h4>
    <div class="stat">
      <div class="card">
        <h5>今日进入宜昌人数</h5>
        <p>29,258<span>人</span></p>
        <img src="./in@2x.png" alt="">
      </div>
      <div class="card">
        <h5>今日离开宜昌人数</h5>
        <p>29,258<span>人</span></p>
        <img src="./out@2x.png" alt="">
      </div>
    </div>
    <v-chart class="chart" :option="option" />
    <div class="videos">
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>长途客运站</p>
      </div>
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>火车东站</p>
      </div>
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>三峡机场</p>
      </div>
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>三峡游客中心</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: 15,
    itemHeight: 16,
    itemWidth: 16,
    data: ['入宜', '出宜']
  },
  grid: {
    top: 50,
    left: 40,
    bottom: 40
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['火车站', '机场', '汽车', '客运码头'],
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      name: '单位:人',
      type: 'value',
      nameTextStyle: {
        align: 'right'
      }
    }
  ],
  series: [
    {
      name: '入宜',
      type: 'bar',
      data: [
        5000, 3000, 4000, 2000
      ],
      itemStyle: {
        color: '#8D7DF2'
      },
      barWidth: 16
    },
    {
      name: '出宜',
      type: 'bar',
      data: [
        1200, 500, 600, 1000
      ],
      itemStyle: {
        color: '#46B5D9'
      },
      barWidth: 16
    }
  ]
}
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"

.stat
  display flex
  justify-content space-between
.chart
  height 230px
.videos
  display flex
  justify-content space-between
  flex-wrap wrap
  .video
    width 158px
    height 88px
    &:nth-child(1), &:nth-child(1)
      margin-bottom 8px
</style>
