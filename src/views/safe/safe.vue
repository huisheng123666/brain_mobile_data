<template>
  <div class="safe">
    <cctv class="cctv" />
    <case />
    <defuse />
    <disaster />
  </div>
</template>

<script lang="ts" setup>
import Cctv from '@/components/run/cctv.vue'
import Case from '@/components/safe/case.vue'
import Defuse from '@/components/safe/defuse.vue'
import Disaster from '@/components/safe/disaster.vue';
</script>

<style scoped lang="stylus">
.safe
  margin 0 10px
  padding-bottom 18px
  .cctv
    margin-top 0
</style>
