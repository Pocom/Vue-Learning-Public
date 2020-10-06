import { debounce } from "@/common/utils";
import BackTop from 'components/content/backTop/BackTop'

export const itemListener = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.imgLoadListener = () => {
      refresh()
    }
    this.$bus.$on('itemLoadImage', this.imgLoadListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}