<template>
  <div id="app">
    <p>
      🐶: {{ count }}匹
    </p>
  </div>
</template>

<script>
  import { Observable } from 'rxjs/Observable';
  import 'rxjs/add/observable/interval';
  import 'rxjs/add/operator/filter';

  export default {
    name: 'app',
    data () {
      return {
        count: 0
      }
    },
    created () {
      Observable
        .interval(1000)
        .filter((value) => value % 2 === 0)
        .subscribe((value) => this.count = value)
    },
  }
</script>
