<template>
  <div class="material module-box">
    <h4 class="module-title">重要物资储备和水电气用量</h4>
    <v-chart class="chart" :option="option" />
    <div class="icon-data">
      <div class="item">
        <img src="./material1@2x.png" alt="">
        <h6>217,537 <span>立方米</span></h6>
        <p>昨日用水</p>
      </div>
      <div class="item">
        <img src="./material2@2x.png" alt="">
        <h6>5,584 <span>万千瓦时</span></h6>
        <p>昨日用电</p>
      </div>
      <div class="item">
        <img src="./material3@2x.png" alt="">
        <h6>843,800 <span>车次</span></h6>
        <p>昨日用气</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['库存量', '可供天数'],
    top: 6,
    itemHeight: 16,
    itemWidth: 16
  },
  grid: {
    top: 40,
    left: 40,
    bottom: 20
  },
  xAxis: [
    {
      type: 'category',
      data: ['大米', '食用油', '面粉'],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位:吨',
      nameTextStyle: {
        align: 'right'
      }
    },
    {
      type: 'value',
      name: '单位:天',
      nameTextStyle: {
        align: 'center'
      }
    }
  ],
  series: [
    {
      name: '库存量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value: any) {
          return value + ' 吨';
        }
      },
      data: [
        8000, 1000, 6000
      ],
      itemStyle: {
        color: '#3399FF'
      },
      barWidth: 32
    },
    {
      name: '可供天数',
      type: 'line',
      yAxisIndex: 1,
      lineStyle: {
        color: '#2EE0E6'
      },
      itemStyle: {
        color: '#2EE0E6'
      },
      symbolSize: 8,
      tooltip: {
        valueFormatter: function (value: any) {
          return value + '天';
        }
      },
      data: [10, 20, 8]
    }
  ]
}
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.material
  margin-top 16px
  .chart
    height 200px
  .icon-data
    margin-top 24px
    display flex
    .item
      flex 1
      text-align center
      &>img
        padding-bottom 11px
        width 24px
        height 24px
      &>h6
        margin-bottom 8px
        font-size 16px
        font-weight bold
        color #334365
        &>span
          font-size 12px
          font-weight 400
      &>p
        font-size 12px
        color #7DA1B3
</style>
