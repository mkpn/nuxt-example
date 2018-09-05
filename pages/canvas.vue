<template>
  <section class="container">
    <canvas id="canvas" width="700" height="500"></canvas>
  </section>
</template>

<script>
  // 参考：https://kigiroku.com/frontend/canvas_draw.html
  import AppLogo from '../components/AppLogo.vue'
  import AppButton from '../layouts/atom/AppButton'

  export default {
    components: {
      AppLogo,
      AppButton
    },
    data: () => {
      return {
        isDrawing: false,
        canvasContext: undefined,
        beforeX: 0,
        beforeY: 0
      };
    },
    computed: {
      statusCode () {
        return (this.error && this.error.statusCode) || 500
      },
      message () {
        return this.error.message || 'Error'
      }
    },
    created() {
      if (process.browser) {
        const canvas = document.getElementById("canvas")
        this.canvasContext = canvas.getContext("2d")
        canvas.addEventListener('mousemove', this.draw_canvas);
        canvas.addEventListener('mousedown', e => {
          this.isDrawing = true;
          let rect = e.target.getBoundingClientRect();
          this.beforeX = e.clientX - rect.left;
          this.beforeY = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseup', () => {
          this.isDrawing = false;
        });
      }
    },
    methods: {
      draw_canvas(e) {
        console.log(this.isDrawing)
// drawingがtrueじゃなかったら返す
        if (!this.isDrawing) {
          return
        }
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        // let w = document.getElementById('width').value;
        // let color = document.getElementById('color').value;
        let w = 1;
        let color = '#526488';
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
// 描画
        this.canvasContext.lineCap = 'round';
        this.canvasContext.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        this.canvasContext.lineWidth = w;
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(this.beforeX, this.beforeY);
        this.canvasContext.lineTo(x, y);
        this.canvasContext.stroke();
        this.canvasContext.closePath();
// 描画最後の座標を前回の座標に代入する
        this.beforeX = x;
        this.beforeY = y;
      }
    }
  }

</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #35495e;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;

    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
