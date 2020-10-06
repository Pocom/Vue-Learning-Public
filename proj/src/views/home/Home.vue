<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isTabFixed"
      ref="tabControl0"
    />
    <scroll
      class="content"
      ref="scroll"
      :click="true"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperLoadImage="swiperLoadImage" />
      <home-recommend :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top v-show="isShowBackTop" @click.native="backClick" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      isTabFixed: false,
      tabControlOffsetTop: 606,
      saveY: 0,
      imgLoadListener: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品信息
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 3. 监听item中图片加载完成
    // 存在问题：created 中 $refs 可能还未挂载
    // this.$bus.$on('itemLoadImage', () => {
    //   this.$refs.scroll.refresh()
    // })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    
    // this.$bus.$on("itemLoadImage", () => {
    //   // this.$refs.scroll.refresh()
    //   refresh();
    // });

    this.imgLoadListener = () => {
      refresh()
    }
    this.$bus.$on('itemLoadImage', this.imgLoadListener)
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getY();

    this.$bus.$off('itemLoadImage', this.imgLoadListener)
  },
  methods: {
    /*
     * 事件监听部分
     */
    tabClick(index) {
      this.$refs.tabControl0.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;

      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, -606, 500);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > this.tabControlOffsetTop;

      // tabControl 是否吸顶
      this.isTabFixed = -position.y > this.tabControlOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);

      this.$refs.scroll.refresh();
    },
    swiperLoadImage() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    // 网络请求部分：
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* padding-bottom: 49px; */
  height: 100vh;
  position: relative;
}

.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 1;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.tab-control {
  position: relative;
  z-index: 9;
}
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>