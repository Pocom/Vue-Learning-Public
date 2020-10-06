<template>
  <swiper>
    <swiper-item v-for="(item, ind) in banners" :key="ind">
      <a :href="item.link">
        <img :src="item.image" alt @load="loadImage" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  components: {
    Swiper, SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    loadImage() {
      if (!this.isLoad) {
        this.$emit("swiperLoadImage");
        this.isLoad = true;
      }
    }
  }
};
</script>