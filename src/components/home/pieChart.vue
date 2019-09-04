<template>
  <div class="myPieChart">
    <canvas id="canvas" width="170" height="170">
      <p>抱歉，您的浏览器不支持canvas</p>
    </canvas>
  </div>
</template>

<script>
export default {
  props:['pieData'],
  data() {
    return {
        currentQuota:this.pieData.cData,
        maxQupta:this.pieData.maxData
    };
  },
  mounted() {
    this.toCanvas("canvas", this.currentQuota/this.maxQupta*100);
  },
  methods: {
    toCanvas(id, progress) {
      var canvas = document.getElementById(id),
        maxQupta=this.maxQupta,
        ctx = canvas.getContext("2d"),
        percent = progress,
        circleX = 80,
        circleY = 80,
        radius = 60,
        lineWidth = 6,
        fontSize = 20;

      function smallcircle1(cx, cy, r) {
        ctx.beginPath();
        //ctx.moveTo(cx + r, cy);
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "square";
        ctx.fill();
        ctx.strokeStyle = "#ffffff";
        // ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.arc(80, 80, 70, 0, Math.PI * 2, false);
        ctx.fillStyle = "#ffffff"; // 颜色
        ctx.textAlign = "center"; // 位置
        ctx.font = "bold 14px Arial"; // 字体大小，样式
        ctx.fillText("最高可承保额度", 80, 60);
        ctx.stroke();
      }

      function sector(cx, cy, r, startAngle, endAngle, anti) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;

        // 渐变色 - 可自定义
        // var linGrad = ctx.createLinearGradient(
        //   circleX - radius - lineWidth,
        //   circleY,
        //   circleX + radius + lineWidth,
        //   circleY
        // );
        // linGrad.addColorStop(0.5, "#06a8f3");
        // //linGrad.addColorStop(0.5, '#9bc4eb');
        // linGrad.addColorStop(1.0, "#ffffff");
        // ctx.strokeStyle = linGrad;
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = 1;
        ctx.lineCap = "round";

        ctx.arc(
          cx,
          cy,
          r,
          (Math.PI * 3) / 4,
          (Math.PI * 3) / 4 + (endAngle / 100) * ((Math.PI * 6) / 4),
          false
        );
        ctx.stroke();
      }

      function loading() {
        if (process >= percent) {
          clearInterval(circleLoading);
        }

        ctx.clearRect(0, 0, circleX * 2, circleY * 2);
        ctx.fillStyle = "#ffffff"; // 颜色
        ctx.textAlign = "center"; // 位置
        ctx.globalAlpha = 1;
        ctx.font = "bold 24px Arial"; // 字体大小，样式
        // 额度动态改变
        ctx.fillText(parseFloat(process).toFixed(0)*(maxQupta/100), 80, 85);
        ctx.font = "bold 19px Arial"; // 字体大小，样式
        ctx.fillText("学年", 80, 105);
        sector(circleX, circleY, radius, (Math.PI * 2) / 3, process);
        smallcircle1(
          150 + Math.cos(((2 * Math.PI) / 360) * 120) * 100,
          150 + Math.sin(((2 * Math.PI) / 360) * 120) * 100,
          5
        );
        if (process / percent > 0.9) {
          process += 0.3;
        } else if (process / percent > 0.8) {
          process += 0.55;
        } else if (process / percent > 0.7) {
          process += 0.75;
        } else {
          process += 1.0;
        }
      }
     
      var process = 0.0;
      var circleLoading = window.setInterval(function() {
        loading();
      }, 50);
    }
  }
};
</script>
<style scoped>
.myPieChart {
  display: flex;
  justify-content: center;
}
</style>
