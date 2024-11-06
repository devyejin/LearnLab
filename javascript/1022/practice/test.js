//컬쳐쇼크
//JS에서 Array는 Object라 타입 구분없이 넣는것도 가능하고, idx로 접근하는 경우, key-value로 접근하는 경우 다 가능함
//idx가 아닌 key-value로 넣는 경우는 뒤로 밀려나게 됨

let person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

let testArr = [];
testArr.push({
  name: '홍길동',
  age: 30,
  job: '개발자',
});
testArr.push(3);

console.log(testArr);
console.log(testArr[0]);
console.log('-------------------333');

testArr['hi'] = '324';
console.log(testArr);
console.log(testArr.hi);

testArr.push(5);
console.log(testArr);

console.log(testArr[2]);

testArr.push({
  name: 'test',
  age: 30,
  job: '개',
});
console.log(testArr[3]);
console.log(testArr['hi']);
console.log(typeof testArr['hi']);
console.log('-----------------------');
console.log(testArr);

console.log(typeof testArr[3]);
