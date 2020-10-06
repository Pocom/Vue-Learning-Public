<template>
  <div>
    <h3>Counter: {{ counter }}</h3>
    <h3>$store.state.counter: {{ $store.state.counter }}</h3>
  </div>
</template>

<script>
export default {
  // 传统父子组件通信方式
  props: {
    counter: Number
  }
}
</script>

<style>

</style>