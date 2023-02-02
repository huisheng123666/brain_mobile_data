<template>
  <div class="run">
    <trip />
    <today />
    <cctv />
    <ship />
    <material />
    <traffic />
    <month-task />
  </div>
</template>

<script setup lang="ts">
import Trip from '@/components/run/trip.vue'
import Today from '@/components/run/today.vue';
import Ship from '@/components/run/ship.vue';
import Material from '@/components/run/material.vue';
import Traffic from '@/components/run/traffic.vue';
import MonthTask from '@/components/run/month-task.vue'
import Cctv from '@/components/run/cctv.vue';
</script>

<style scoped lang="stylus">
.run
  margin 0 10px
  padding-bottom 18px
</style>
