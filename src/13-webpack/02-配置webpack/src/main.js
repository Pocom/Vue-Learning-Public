const { add, mul } = require('./js/mathUtils.js')

console.log("mathUtils.js - add(20, 30):", add(20, 30));
console.log("mathUtils.js - mul(20, 30):", mul(20, 30));

import * as person from './js/info'

console.log("Person.name:", person.name);
console.log("Person.age:", person.age);
console.log("Person.height:", person.height);