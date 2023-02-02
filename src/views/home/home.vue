<template>
  <div class="home">
    <h4>宜昌城市大脑<br>实时数据概览</h4>
    <div class="drop">
      下滑查看
      <img src="./double-down@2x.png" alt="">
    </div>
    <div class="content">
      <div class="tab">
        <router-link to="/">城市运行</router-link>
        <router-link to="/safe">城市安全</router-link>
        <router-link to="/govern">城市治理</router-link>
        <router-link to="/service">城市服务</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="stylus">
.home
  width 100%
  min-height 100vh
  background url(./head@2x.png) center top no-repeat
  background-size 100% auto
  &>h4
    padding-top 67px
    padding-left 16px
    line-height 40px
    font-size 32px
    color #fff
    font-family Kingsoft_Cloud_Font
  .drop
    margin-top 24px
    margin-left 16px
    width 103px
    height 32px
    line-height 32px
    border-radius 16px
    border 1px solid #fff
    font-size 14px
    color #fff
    text-align center
    &>img
      padding-left 3px
      width 12px
      height 12px
      vertical-align middle
  .content
    margin-top 57px
    min-height calc(100vh - 262px)
    background-color #EDF2F7
    border-radius 24px 24px 0 0
    .tab
      display flex
      padding 16px 10px
      &>a
        width 84px
        height 40px
        line-height 40px
        border-radius 20px
        text-align center
        font-size 14px
        color #334365
        font-weight 500
        &.router-link-exact-active
          background-color #3399FF
          color #fff
</style>
