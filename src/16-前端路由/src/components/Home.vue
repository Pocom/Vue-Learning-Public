<template>
  <div>
    <h1>Home</h1>
    <p>Hello Home!</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "/home/news",
    };
  },
  // created() {
  //   console.log("Home Created!");
  // },
  // destroyed() {
  //   console.log("Home Destroyed!");
  // },
  activated() {
    console.log("Home Activated!");
    this.$router.push(this.path);
  },
  // deactivated() {
  //   console.log("Home Deactivated!");
  // },
  beforeRouteLeave(to, form, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>