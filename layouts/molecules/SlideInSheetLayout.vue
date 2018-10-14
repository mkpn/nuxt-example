<template>
  <div class="slideInSheet">
    <div class="inner">
      <div class="header">

        <div class="label">
          <slot name="header" />
        </div>

        <div class="close">
          <slot name="close" />
        </div>

        <div class="action">
          <slot name="action" />
        </div>
      </div>
      <div class="scroller">
        <div class="body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


  .slideInSheet {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;

    .inner {
      position: relative;
      background: #fff;
      // @include elevation(4);
      max-width: 600px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
      }

    .header {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24);
      line-height: 1;
      position: relative;
      height: 56px;
      z-index: 10;

      .label {
        position: absolute;
        top: 18px;
        left: 60px;
        font-size:  1.5rem;
        font-weight: bold;
        }
      .close {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        font-size: 20px;
        padding: 4px 0;
        text-align: center;
        }
      .action {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        font-size:  1.5rem;
        padding: 8px 0;
        }
      }

    .scroller {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      }

    .body {
      padding: 6px 16px;
      }
    }
</style>
