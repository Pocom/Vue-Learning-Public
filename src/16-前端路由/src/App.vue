<template>
  <div id="app">

    <!-- 通过 vue-router 修改 URL -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">我的</router-link>
    <router-link :to="{path: '/profile', query: {name: 'xxx', age: 18, height: 1.8}}" tag="button">档案</router-link>

    <!-- 通过其他方式修改 URL
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">我的</button>
    <button @click="profileClick">档案</button> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {   
      userId: 'xxx',
    }
  },
  methods: {
    // homeClick() {
    //   // console.log("homeClick");
    //   this.$router.push('/home')
    //   // this.$router.replace('/home')  // 取代
    // },
    // aboutClick() {
    //   // console.log("aboutClick");
    //   this.$router.push('/about')
    // },
    // homeClick() {
    //   this.router.push('/home')
    // },
    // aboutClick() {
    //   this.router.push('/about')
    // },
    // userClick() {
    //   this.$router.push('/user' + this.userId)
    // },
    // profileClick() {
    //   // this.$router.push('/profile')
    //   this.$router.push({
    //     paht: '/path',
    //     query: {
    //       name: xxx,
    //       age: 18,
    //       height: 1.8
    //     }
    //   })
    // }
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
