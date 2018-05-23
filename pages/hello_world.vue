<template>
  <section class="container">
    <div>
      <app-logo/>
      <test-component/>
    </div>
  </section>
</template>

<script>
  import TestComponent from '~/components/TestComponent.vue'
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      TestComponent,
      AppLogo
    }
  }
</script>
