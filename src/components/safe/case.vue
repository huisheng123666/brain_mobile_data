<template>
  <div class="case module-box">
    <h4 class="module-title">今日消防案件</h4>
    <ul>
      <li v-for="item in 5" :key="item">
        <p>伍家区江山如画小区4栋5层独居老人被锁房伍家区江山如画小区4栋5层独居老人被锁房</p>
        <span>08:13:31</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="stylus">
@import "../../common/css/common.styl"
.case
  margin-top 16px
  &>ul
    &>li
      margin-bottom 16px
      display flex
      align-items center
      font-size 12px
      color #334365
      &:last-child
        margin-bottom 0
      &>p
        width 250px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      &>span
        flex 1
        text-align right
        color #A3B7CC
</style>
