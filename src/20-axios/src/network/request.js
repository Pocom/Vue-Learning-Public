import axios from 'axios'

// 方式一
// export function request(config, success, failure) {
//   // 创建 axios 实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   // 发送网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)  // 回调
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

// 方式二
// export function request(config) {
//     // 创建 axios 实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送网络请求
//     instance(config.baseConfig)
//       .then(res => {
//         // console.log(res);
//         success(res)  // 回调
//       })
//       .catch(err => {
//         // console.log(err);
//         failure(err)
//       })
//   }


// 方式三 推荐
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 方式四 最终方案
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   return instance(config)
// }

// 全局拦截器
// axios.interceptors.request.use(config => {
//   // ...
//   return config
// }, err => {
//   // ...
//   return err
// })


// 局部拦截器
export function request(config) {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    
    instance.interceptors.request.use(config => {
      console.log(config);
      // 使用场景：
      // 1 config 中数据不符合服务器要求

      // 2 每次发送网络请求时 希望在界面显示一个加载中的动画

      // 3 某些网络请求（比如登录） 必须携带某些信息（token）
      return config   // 如果注释掉此行 便实现拦截
    }, err => {
      console.log(err);
      return err
    })

    instance.interceptors.response.use(res => {
      // return res
      return res.data
    }, err => {
      return err
    })
    return instance(config)
  }