<template>
  <div class="defuse module-box">
    <h4 class="module-title">矛盾化解</h4>
    <div class="total">
      <div class="item">
        <img src="./defuse1@2x.png" alt="">
        <div class="info">
          <h6>事件总数</h6>
          <p>12,739 <span>件</span></p>
        </div>
      </div>
      <div class="item">
        <img src="./defuse2@2x.png" alt="">
        <div class="info">
          <h6>今日上报数</h6>
          <p>46 <span>件</span></p>
        </div>
      </div>
    </div>
    <h5 class="sub-title">今日矛盾化解案件分类</h5>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script lang="ts" setup>
const data = [
  { value: 40, name: '领里纠纷           ' },
  { value: 33, name: '其他纠纷           ' },
  { value: 28, name: '婚姻家庭纠纷    ' },
  { value: 22, name: '山林土地纠纷    ' },
  { value: 20, name: '损害赔偿纠纷    ' },
  { value: 15, name: '劳动争议纠纷    ' }
]

const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 0,
    top: 25,
    itemHeight: 16,
    itemWidth: 16,
    data: [
      '领里纠纷           ',
      '其他纠纷           ',
      '婚姻家庭纠纷    ',
      '山林土地纠纷    ',
      '损害赔偿纠纷    ',
      '劳动争议纠纷    '
    ],
    formatter: function (name: string) {
      let value = 0
      data.forEach(item => {
        if (item.name === name) {
          value = item.value
        }
      })
      return name + value + '起';
    }
  },
  grid: {
    left: 0,
    top: 20,
    right: 100,
    bottom: 0
  },
  series: [
    {
      name: 'Radius Mode',
      type: 'pie',
      radius: [20, 90],
      center: ['70%', '60%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 0
      },
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data
    }
  ]
}
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.defuse
  margin-top 16px
  .total
    height 81px
    display flex
    align-items center
    background-color #00A1F2
    border-radius 8px
    .item
      flex 1
      padding-left 24px
      display flex
      align-items center
      &>img
        margin-right 16px
        width 24px
        height 24px
      .info
        color #fff
        &>h6
          margin-bottom 8px
          font-size 12px
        &>p
          font-size 16px
          font-weight bold
          &>span
            font-size 12px
            font-weight 400
  .sub-title
    margin-top 24px
    font-size 12px
    color #334365
  .chart
    height 175px
</style>
