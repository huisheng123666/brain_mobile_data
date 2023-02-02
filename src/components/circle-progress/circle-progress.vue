
<template>
  <canvas ref="canvas" class="canvas" width="100" height="100"></canvas>
</template>

<script>
export default {
  props: {
    precent: {
      type: Number,
      default: 50
    },
    circleColor: {
      type: String,
      default: ''
    },
    lineWidth: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      num: 0,
      ctx: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const c = this.$refs.canvas;
      this.ctx = c.getContext('2d');
      this.draw()
    },
    // 绘制轨道
    drawTrack() {
      this.ctx.save();
      this.ctx.beginPath()
      this.ctx.lineCap = 'round'
      this.ctx.lineWidth = this.lineWidth
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'
      this.ctx.arc(50, 50, 50 - this.lineWidth, 0, 2 * Math.PI)
      this.ctx.stroke()
      this.ctx.closePath();
      this.ctx.restore();
    },

    // 绘制进度环
    drawProgress(num) {
      this.ctx.save();
      this.ctx.beginPath()
      this.ctx.lineCap = 'round'
      this.ctx.lineWidth = this.lineWidth
      this.ctx.strokeStyle = '#fff'
      // context.arc(x,y,r,sAngle,eAngle,counterclockwise);   //x坐标,y坐标,半径,起始角,结束角,顺时针/逆时针
      this.ctx.arc(50, 50, 50 - this.lineWidth, -Math.PI / 2, -Math.PI / 2 + 2 * num / 100 * Math.PI)
      this.ctx.stroke()
      this.ctx.closePath();
      this.ctx.restore();
    },

    // 绘制文字
    drawText(num) {
      this.ctx.save();
      this.ctx.fillStyle = '#fff'

      this.ctx.font = '18px Helvetica'
      this.ctx.textAlign = 'center';
      this.ctx.fillText(num, 50, 57)
      this.ctx.restore();
    },

    // 动画
    draw() {
      this.num += 1
      if (this.num < this.precent) { this.draw() } else { this.num = this.precent }
      this.ctx.clearRect(0, 0, 100, 100)
      this.drawTrack()
      this.drawProgress(this.num)
      // this.drawText(this.num)
    }

  }
}
</script>
