<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车（{{ length }}）</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 结算汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Shopcart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

    // 数组语法 使用原本名字
    // ...mapGetters([
    //   'cartLength'
    // ])

    // 对象语法，可以自定名字
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>