import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})



// // 返回 Promise 对象 所以可以使用 .then()
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// axios({
//   // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   url: 'http://123.207.32.32:8000/home/data',
//   // 针对 get 请求的参数拼接
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }), 
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })])
// //   .then(results => {
// //     console.log(results);
// // })
// // axios.spread() 拆分不同返回数据
//     .then(axios.spread((res1, res2) => {
//       console.log(res1);
//       console.log(res2);
//     }))


// 使用全局配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios({
//   url: '/home/mutidata'
// })

// // 创建 axios 实例进行网络请求
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 2
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 3000
// })

// instance2({
//   url: '/home',
//   params: {}
// }).then(res => {
//   console.log(res);
// })

// 封装 request 模块
import {request} from './network/request'

// 方式一
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 方式二
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success(res) {
//     console.log(res);
//   },
//   failure(err) {
//     console.log(err);
//   }
// })

// 方式三 方式四 推荐
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => 
  console.log(err))