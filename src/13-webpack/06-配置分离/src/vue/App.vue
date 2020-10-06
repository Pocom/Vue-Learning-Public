<template>
  <div class="title" style="text-align: center">
    <h1>{{ message }}</h1>
    <button @click="btnClick">Button</button>
    <Cpn />
  </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'Hello Webpack!'
    }
  },
  methods: {
    btnClick() {
      console.log("btnClick!");
    }
  }
}
</script>

<style>
  .title {
    color: green;
  }
</style>