// Coder B
// ; 为了多个文件引用时，相互之间避免干扰

; 
var moduleB = (function () {
  var obj;

  name = 'B'
  flag = false

  console.log(name)

  obj.name = name;
  obj.flag = flag

  return obj
})()