//js에서는 array에서 sum같은 내장함수를 지원해주지 않아서 외부 라이브러리를 활용

// Load the full build.
var _ = require('lodash');

console.log(_.sum([1, 2, 3, 4]));
console.log(_.shuffle([1, 4, 6, 7, 8]));

const arr = [1, 3, 2, 5, [3, 2]];
console.log(_.drop(arr, 4));
console.log(arr);
