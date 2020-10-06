<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :class="{ check: isChecked }"
        @click.native="checkAll"
      />
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calButton" @click="calcClick">结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0).toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isChecked() {
      return !this.$store.getters.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkAll() {
      this.$store.dispatch("checkAll", this.isChecked);
    },
    calcClick() {
      if (!this.isChecked) {
        this.$toast.show("未选择商品", 2000)
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  background-color: #eee;

  height: 40px;
  line-height: 40px;
}
.check-content {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  flex: 1;
  margin-right: 30px;
}
.calButton {
  width: 90px;
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
</style>