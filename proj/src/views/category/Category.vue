<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">类别</div>
    </nav-bar>
    <scroll class="content">
      <ul>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
// 封装
// import BScroll from "better-scroll";
import Scroll from "components/common/scroll/Scroll"
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "Category",
  components: {
    Scroll,
    NavBar
  },
  data() {
    return{
      scroll: null
    }
  },
  created() {
    // 不能在此使用DOM 目前还未创建DOM 
  },
  mounted() {
  },
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: rgb(191, 200, 240); 
  overflow: hidden;
}
</style>