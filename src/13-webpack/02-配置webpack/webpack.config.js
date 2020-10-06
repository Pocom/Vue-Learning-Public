const path = require('path') // 在 npm 包中获取

module.exports = {
  entry: './src/main.js',
  // output: './dist/bundle.js', // error
  output: {
    path: path.resolve(__dirname, 'dist'), // should be an absolute path, dynamic acquisition
    filename: 'bundle.js',
  },
}