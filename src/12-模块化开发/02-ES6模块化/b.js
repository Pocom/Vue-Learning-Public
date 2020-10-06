import { sum } from './a.js'

var name = '小红'
var flag = false

console.log('小红的文件')
console.log("sum(1, 9)", sum(1, 9))

// 导出默认
export default function (arg) {
  console.log(arg);
}