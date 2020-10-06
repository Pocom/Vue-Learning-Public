module.exports = {
  configureWebpack: {
    resolve: {
      // extension: ['.js', '.vue', '.json'],  // 已配置
      alias: {
        // '@': 'src' // 已配置
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components'
      }
    }
  }
}