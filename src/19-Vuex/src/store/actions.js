export default {
  aUpdateInfo(context, payload) {
    // setTimeout(() => {
    //   // context.commit('updateInfo')

    //   // // 传入函数，加小括号直接调用
    //   // context.commit('updateInfo')
    //   // payload()

    //   // // 传入复杂对象
    //   context.commit('updateInfo')
    //   console.log(payload.message);
    //   payload.success()
    // }, 1000);

    // 当传入的数据复杂，且需要返回响应
    // 使用 Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload)
        resolve('-----')
      }, 1000);
    })
  }
}