<template>
  <div>
    <h1>User</h1>
    <p>Hello User!</p>
    <h2>User ID: {{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   console.log("User 组件前置钩子");
  //   next()
  // }
}
</script>

<style>

</style>