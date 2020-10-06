import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {

  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2. 使用组件构造器创建对象
  const toast = new toastConstructor()

  // 3. 将组件对象挂载到某一元素上
  toast.$mount(document.createElement('div'))

  // toast.$el 对应的就是 div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj