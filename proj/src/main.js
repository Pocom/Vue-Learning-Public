import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装 toast 插件
// 本质上去执行内部的 install 函数，并且默认传入 Vue 对象
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
