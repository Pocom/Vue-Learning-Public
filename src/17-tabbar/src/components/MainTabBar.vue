<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">类别</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#ff5777">
        <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>