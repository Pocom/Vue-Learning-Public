<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff8198">
        <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabBar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff8198">
        <img slot="item-icon" src="~assets/img/tabBar/category.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabBar/category_active.svg" alt />
        <div slot="item-text">类别</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#ff8198">
        <img slot="item-icon" src="~assets/img/tabBar/shopcart.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabBar/shopcart_active.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff8198">
        <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabBar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
