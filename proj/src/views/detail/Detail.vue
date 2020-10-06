<template>
  <div id="detail">
    <detail-nav-bar
      ref="detailNavBar"
      class="detail-nav"
      @titleClick="titleClick"
    />
    <scroll ref="scroll" :probeType="3" class="content" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :good="good" />
      <detail-shop-info :shop="shop" />
      <detail-param-info ref="detailParams" :param-info="paramInfo" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-comment-info ref="detailComment" :comment-info="commentInfo" />
      <goods-list ref="detailRecommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top v-show="isShowBackTop" @click.native="backTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "@/common/utils";
import { itemListener, backTopMixin } from "@/common/mixin";
import { BACK_POSITION } from "@/common/const";

import { mapActions } from "vuex";

import {
  getDetail,
  getRecommend,
  GoodInfo,
  ShopInfo,
  GoodsParam,
} from "network/detail";

export default {
  name: "Detail",
  mixins: [itemListener, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      iid: "",
      topImages: [],
      good: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      imgLoadListener: null,
      themeTopYs: [],
      currentIndex: 0,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail();
    this.getRecommend();
  },
  mounted() {
    // 不使用混入：
    // const refresh = debounce(this.$refs.scroll.refresh, 500);
    // this.$bus.$on('itemLoadImage', () => {
    //   refresh()
    // })
  },
  destroyed() {
    this.$bus.$off("itemLoadImage", this.imgLoadListener);
  },
  methods: {
    ...mapActions({
      add: "addToCart"
    }),
    getDetail() {
      getDetail(this.iid).then((res) => {
        // 数据分离
        const data = res.result;
        // 1. 轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 2. 商品信息
        this.good = new GoodInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3. 店铺信息
        this.shop = new ShopInfo(data.shopInfo);
        // 4. 商品详细信息
        this.detailInfo = data.detailInfo;
        // 5. 参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 6. 评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.detailParams.$el.offsetTop);
      this.themeTopYs.push(this.$refs.detailComment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.detailRecommend.$el.offsetTop);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      const positionY = -position.y;
      const length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
          (i === length - 1 && positionY >= this.themeTopYs[i])
        ) {
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }

      this.isShowBackTop = positionY > BACK_POSITION;
    },
    addToCart() {
      // 1. 获取购物车需要展示的信息
      const good = {
        image: this.topImages[0],
        title: this.good.title,
        desc: this.good.desc,
        price: this.good.realPrice,
        iid: this.iid,
      };

      // 2. 将商品添加到购物车
      // this.$store.dispatch("addCart", good)

      // 为了获取返回消息，通常会让 actions 中的方法返回 Promise
      // 方式一、传统方式：
      // this.$store.dispatch("addToCart", good).then(res => {
      //   console.log(res);
      // })

      // 方式二、mapActions：
      this.add(good).then((res) => {
        // console.log(res);
        this.$toast.show(res, 2000)
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>