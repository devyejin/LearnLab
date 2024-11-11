const arr = [1, 2, 3];
const arr1 = [[arr]]; //잘못된 복사 방법 [[1,2,3]]
const arr2 = [...arr]; // 스프레드 연산자를 활용하면, 요소가 하나씩 복사되서 들어가는 것

console.log(arr1);
console.log(arr2);

const obj = {
  name: 'yejin',
  city: 'seoul',
};

const obj2 = { ...obj }; //요소가 하나씩 들어가는 것!

const obj3 = { ...obj, email: 'dsd@na.ve' }; //email 추가

console.log(obj2); // { name: 'yejin', city: 'seoul' }
console.log(obj3); // { name: 'yejin', city: 'seoul', email: 'dsd@na.ve' }
