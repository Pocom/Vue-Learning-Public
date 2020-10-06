<!-- src/components/content/tabControl/TabControl.vue -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, ind) in titles"
      :key="ind"
      class="tab-control-item"
      :class="{active: ind == currentIndex}"
      @click="itemClick(ind)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  background-color: #fff;
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>