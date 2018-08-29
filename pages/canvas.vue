<template>
  <section class="container">
    <canvas id="canvas" width="700" height="500"></canvas>
  </section>
</template>

<script>
  // 参考：https://kigiroku.com/frontend/canvas_draw.html
  import AppLogo from '~/components/AppLogo.vue'

  let drawing = false;
  let before_x = 0;
  let before_y = 0;
  let context = undefined;
  if (process.browser) {
    const canvas = document.getElementById("canvas")
    context = canvas.getContext("2d")
    canvas.addEventListener('mousemove', draw_canvas);
    canvas.addEventListener('mousedown', function (e) {
      drawing = true;
      let rect = e.target.getBoundingClientRect();
      before_x = e.clientX - rect.left;
      before_y = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseup', function () {
      drawing = false;
    });
  }

  // 描画の処理
  function draw_canvas(e) {
    console.log("draw canvas!!!s")
// drawingがtrueじゃなかったら返す
    if (!drawing) {
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
    context.lineCap = 'round';
    context.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    context.lineWidth = w;
    context.beginPath();
    context.moveTo(before_x, before_y);
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
// 描画最後の座標を前回の座標に代入する
    before_x = x;
    before_y = y;
  }

  export default {
    components: {
      AppLogo
    },
    created() {
    },
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
