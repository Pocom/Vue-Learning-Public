<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive: {
      get() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      set() {}
    },
    activeStyle: {
      get() {
        return this.isActive ? {color: this.activeColor}: {}
      },
      set() {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
#tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}

#tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 1px;
  vertical-align: middle;
}
</style>