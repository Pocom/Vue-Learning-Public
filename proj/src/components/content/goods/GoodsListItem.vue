<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="loadImage" alt />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    itemClick() {
      // console.log("点击了商品！");

      /*
       * 根据商品id 跳转到不同路由
       */

      // 1. 动态路由 在 router/index.js 的路由后添加 :iid
      this.$router.push("/detail/" + this.goodsItem.iid);

      // 2. query 查询
      // this.$router.push({
      //   path: "/detail",
      //   query: {
      //     id: 1,
      //   },
      // });
    },
    loadImage() {
      // 方式一
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('homeItemImgLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailItemImgLoad')
      // }

      // 方式二
      // 在监听该事件的组件的 deactivated() 中对该事件进行取消监听
      this.$bus.$emit("itemLoadImage");
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>