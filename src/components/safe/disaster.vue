<template>
  <div class="disaster module-box">
    <h4 class="module-title">极端天气与自然灾害</h4>
    <h5 class="sub-title">积水监测指标</h5>
    <div class="card-list">
      <div class="card" style="background-color: #617AF2;">
        <h5>积水监测点</h5>
        <p>50<span> 处</span></p>
        <img src="./disaster1@2x.png" alt="">
      </div>
      <div class="card" style="background-color: #29CC9A;">
        <h5>监测值正常</h5>
        <p>46<span> 处</span></p>
        <img src="./disaster2@2x.png" alt="">
      </div>
    </div>
    <div class="level">
      <div class="item">
        <h6>0处</h6>
        <p class="one">严重内涝</p>
      </div>
      <div class="item">
        <h6>0处</h6>
        <p class="two">轻微内涝</p>
      </div>
      <div class="item">
        <h6>0处</h6>
        <p class="three">一般积水</p>
      </div>
      <div class="item">
        <h6>0处</h6>
        <p class="four">轻度积水</p>
      </div>
    </div>
    <h5 class="sub-title">城内内涝预警</h5>
    <div class="table">
      <ul class="head">
        <li>类型</li>
        <li class="big">测站名称</li>
        <li>时间</li>
        <li>积水深度/m</li>
      </ul>
      <!--      <div class="empty">没有数据</div>-->
      <ul v-for="item in 4" :key="item" class="row">
        <li>轻度积水</li>
        <li class="big">点军大道智喜湾</li>
        <li>01-19 16:00</li>
        <li>0.209</li>
      </ul>
    </div>
    <h5 class="sub-title">气象信息</h5>
    <div class="weather">
      <div class="item">
        <img src="./weather@2x.png" alt="">
        <h6>今天</h6>
        <p>晴</p>
        <div>0~14℃</div>
      </div>
      <div class="item">
        <img src="./weather@2x.png" alt="">
        <h6>明天</h6>
        <p>晴</p>
        <div>0~14℃</div>
      </div>
      <div class="item">
        <img src="./weather@2x.png" alt="">
        <h6>后天</h6>
        <p>晴</p>
        <div>0~14℃</div>
      </div>
    </div>
    <h5 class="sub-title">24小时降水列表</h5>
    <div class="table">
      <ul class="head">
        <li>站点</li>
        <li>地址</li>
        <li>降雨量mm</li>
        <li>时间</li>
      </ul>
      <!--      <div class="empty">没有数据</div>-->
      <ul v-for="item in 4" :key="item" class="row">
        <li>七甲</li>
        <li>秭归</li>
        <li>0.4</li>
        <li>01/19 13:00</li>
      </ul>
    </div>
    <h5 class="sub-title">地质灾害监测</h5>
    <div class="card-list monitor">
      <div class="card" style="background-color: #617AF2;">
        <h5>地灾监测点</h5>
        <p>1,247<span> 处</span></p>
        <img src="./monitor1@2x.png" alt="">
      </div>
      <div class="card" style="background-color: #29CC9A;">
        <h5>总设备数</h5>
        <p>4,003<span> 个</span></p>
        <img src="./monitor2@2x.png" alt="">
      </div>
      <div class="card" style="background-color: #00A1F2;">
        <h5>设备在线数</h5>
        <p>3,863<span> 个</span></p>
        <img src="./monitor3@2x.png" alt="">
      </div>
      <div class="card" style="background-color: #FF9F19;">
        <h5>设备在线率</h5>
        <p>97<span> %</span></p>
        <img src="./monitor4@2x.png" alt="">
      </div>
    </div>
    <h5 class="sub-title">地质灾害预警</h5>
    <div class="table">
      <ul class="head">
        <li>站点</li>
        <li>地址</li>
        <li>降雨量mm</li>
        <li>时间</li>
      </ul>
      <div class="empty">没有数据</div>
    </div>
    <h5 class="sub-title">河道水情监测</h5>
    <div class="river">
      <div class="item">
        <img src="./river1@2x.png" alt="">
        <h6>171 <span>个</span></h6>
        <p>正常水位</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./river2@2x.png" alt="">
        <h6>0 <span>个</span></h6>
        <p>超警戒水位</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./river3@2x.png" alt="">
        <h6>3 <span>个</span></h6>
        <p>超设防水位</p>
      </div>
      <div class="item">
        <img src="./river4@2x.png" alt="">
        <h6>0 <span>个</span></h6>
        <p>超保证水位</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./river5@2x.png" alt="">
        <h6>0 <span>个</span></h6>
        <p>超历史最高水位</p>
      </div>
    </div>
    <h5 class="sub-title">河道实时水情列表</h5>
    <div class="table">
      <ul class="head">
        <li>测站名称</li>
        <li>所属河流</li>
        <li>时间</li>
        <li>水位m</li>
      </ul>
      <!--      <div class="empty">没有数据</div>-->
      <ul v-for="item in 4" :key="item" class="row">
        <li>松林坪甲</li>
        <li>渔洋河</li>
        <li>01-10 14:00</li>
        <li>01/19 193.28</li>
      </ul>
    </div>
    <h5 class="sub-title">水库水情监测</h5>
    <div class="river">
      <div class="item">
        <img src="./river1@2x.png" alt="">
        <h6>171 <span>个</span></h6>
        <p>正常未超汛</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./river2@2x.png" alt="">
        <h6>0 <span>个</span></h6>
        <p>超汛限水位</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="./river3@2x.png" alt="">
        <h6>3 <span>个</span></h6>
        <p>超历史最高</p>
      </div>
    </div>
    <h5 class="sub-title">水库实时水情列表</h5>
    <div class="table">
      <ul class="head">
        <li>测站名称</li>
        <li>水位m</li>
        <li>时间</li>
        <li>汛限水位m</li>
      </ul>
      <!--      <div class="empty">没有数据</div>-->
      <ul v-for="item in 4" :key="item" class="row">
        <li>葫芦包水库</li>
        <li>76.99</li>
        <li>01-10 14:00</li>
        <li>77.1</li>
      </ul>
    </div>
    <h5 class="sub-title">水库汛情预警列表</h5>
    <div class="table">
      <ul class="head">
        <li style="flex: 1.6">测站名称</li>
        <li class="big">预警内容</li>
        <li class="big">时间</li>
        <li>当前水位</li>
      </ul>
      <!--      <div class="empty">没有数据</div>-->
      <ul v-for="item in 4" :key="item" class="row">
        <li style="flex: 1.6">当阳市玉泉办事处</li>
        <li class="big">水库水位超限</li>
        <li class="big">01-10 14:00</li>
        <li>77.1</li>
      </ul>
    </div>
    <h5 class="sub-title">水库监控视频</h5>
    <div class="list">
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>安福寺镇刘家冲水库</p>
      </div>
      <div class="video watch-video">
        <img src="@/assets/play@2x.png" alt="">
        <p>安福寺镇刘家冲水库</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.disaster
  margin-top 16px
  .sub-title
    font-size 12px
    color #334365
    font-weight 500
  .card-list
    margin-top 16px
    display flex
    flex-wrap wrap
    justify-content space-between
    .card
      &:first-child
        margin-bottom 8px
      &:nth-child(2)
        margin-bottom 8px
  .level
    margin-bottom 32px
    margin-top 16px
    display flex
    justify-content space-between
    .item
      &>h6
        margin-bottom 8px
        font-size 16px
        color #334365
        font-weight bold
      &>p
        font-size 12px
        &.one
          color #FF4D5A
        &.two
          color #FF8C19
        &.three
          color #E3BE00
        &.four
          color #0073E6
  .table
    margin-top 4px
    margin-bottom 32px
    &>ul
      border-bottom 1px solid #E6EAF2
      display flex
      height 36px
      line-height 36px
      &:last-child
        border-bottom none
      &>li
        flex 1
        &.big
          flex 1.3
    .head
      font-size 12px
      color #7DA1B3
    .row
      font-size 12px
      color #334365
    .empty
      margin-top 32px
      text-align center
      font-size 12px
      color #0A1F33
  .weather
    margin-bottom 32px
    margin-top 16px
    display flex
    justify-content space-between
    .item
      width 101px
      padding 16px 0
      text-align center
      background-color #F5F7FA
      border-radius 8px
      font-size 12px
      color #334365
      &>img
        padding-bottom 15px
        width 22px
        height 22px
      &>h6
        margin-bottom 16px
        color #3399FF
      &>p
        margin-bottom 8px
  .monitor
    margin-bottom 32px
  .river
    margin-top 24px
    margin-bottom 8px
    display flex
    align-items center
    flex-wrap wrap
    .item
      margin-bottom 24px
      width 33%
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
          color #7DA1B3
          font-weight 400
      &>p
        font-size 12px
        color #7DA1B3
    .line
      width 1px
      height 40px
      background-color #E6EAF2
  .list
    margin-top 16px
    display flex
    flex-wrap wrap
    justify-content space-between
    .video
      width 158px
      height 88px
</style>
