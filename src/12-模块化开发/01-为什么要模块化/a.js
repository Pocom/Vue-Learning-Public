// Coder A

var moduleA = (function () {
  // export obj
  var obj = {}

  var name = 'A'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20))
  }

  obj.name = name
  obj.age = age
  obj.flag = flag;
  obj.sum = sum;

  return obj  // moduleA 即是导出的 obj 
})()