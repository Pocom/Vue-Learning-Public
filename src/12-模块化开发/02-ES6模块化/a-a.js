// 导入 {} 中定义的变量
import {flag} from './a.js'

if (flag) {
  console.log('小明的子文件');
}

// 导入 export 定义的变量
import { num1, height } from './a.js'

console.log("num1:", num1);
console.log("height:", height);

// 导入 export 定义的函数
import { mul } from './a.js'

console.log("mul(10, 10):", mul(10, 10))

// 导入 export 定义的类
import { Person } from './a.js'

let p = new Person()
p.run()

// 导入 export default 定义的部分
import myFunc from './b.js'

myFunc('export default')

// 导入包含所有导出属性的对象
import * as aaa from './a.js'

console.log('aaa.flag:', aaa.flag);