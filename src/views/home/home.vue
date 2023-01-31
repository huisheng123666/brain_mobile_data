<template>
  <div class="home">
    <h4>宜昌城市大脑<br>实时数据概览</h4>
    <div class="drop">下滑查看</div>
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
</style>
