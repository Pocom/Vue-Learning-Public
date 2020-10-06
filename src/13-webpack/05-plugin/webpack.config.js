const path = require('path') // Node.js 核心模块之一
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  // output: './dist/bundle.js', // error
  output: {
    path: path.resolve(__dirname, 'dist'), // should be an absolute path, dynamic acquisition
    filename: 'bundle.js',
    // publicPath: './dist/'
  },
  module: {
    rules: [
      {
        // 正则表达式
        test: /\.css$/, 
        // css-loader 只负责加载 css 文件
        // style-loader 会将导入的 css 模块引入 DOM 中
        // 同时注意两者顺序，webpack 是从右往左顺序读取
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"  // creates style nodes from JS strings
        },
        {
          loader: "css-loader"  // translates CSS into CommonJS
        },
        {
          loader: "less-loader"  // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 数据大小限制，超过 limit 则调用 file-loader
              limit: 8192,
              // 命名规范
              name: `img/[name].[hash:8].[ext]`
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_component)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }   
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归 Pocom 所有！'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin()  // 打包阶段所需
  ],
  // 开发阶段所需 故可以抽离
  devServer: {
    contentBase: './dist',
    inline: true,
  }
}