// CommonJS 规范
const { add, mul } = require('./js/mathUtils.js')

console.log("mathUtils.js - add(20, 30):", add(20, 30));
console.log("mathUtils.js - mul(20, 30):", mul(20, 30));


// ES6 规范
import * as person from './js/info'

console.log("Person.name:", person.name);
console.log("Person.age:", person.age);
console.log("Person.height:", person.height);

// 导入 css 模块
// 由于不去使用，所以无需设置变量接收
require('./css/normal.css')

// 导入 less 模块
require('./css/special.less')

// document.writeln('<h2>Hello!<h2>')

// 使用 Vue 进行开发
import Vue from 'vue'
// import app from './vue/app.js'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>', // 插入子组件标签
  components: {
    App
  }
})