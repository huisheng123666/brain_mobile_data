import { createApp } from 'vue'
import 'amfe-flexible'
import './style.css'
import App from './App.vue'
import router from '@/router/router'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components'
import VueECharts from 'vue-echarts'

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
])

const app = createApp(App)

app.component('VChart', VueECharts)

app.use(router)

app.mount('#app')
