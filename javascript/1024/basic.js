// 관리 측면에서 콜백을 이용하는게 유용함

// double, th, qu 3 함수를 다 실행하고 싶은경우
const double = (x) => x * 2;
const th = (x) => x * 3;
const qu = (x) => x * 4;

double(5);
th(5);
qu(5);

//위에처럼 하기보다는 콜백을 이용
const applyOperation = (func, num) => {
  return func(num);
};

const functions = [double, th, qu];

for (let func of functions) {
  console.log(applyOperation(func, 5));
}

//함수가 일급객체이기 때문에 콜백함수(함수의 매개변수로 함수를 넘김)가 가능

////////////////////////////////////
// 함수 반환값으로 이용 (직접 만들기보다는 이런 코드를 보는 경우가 많음)
const makeMultiplier = (n) => {
  return (x) => x * n;
};

const doubleNumber = makeMultiplier(2);
const tripleNumber = makeMultiplier(3);

console.log(doubleNumber(5)); // 결과: 10
console.log(tripleNumber(5)); // 결과: 15

//고차함수(함수 안에 함수 -> 간단하게는 콜백(인자로 함수를 받거나, 리턴하거나))으로 봐도 됨

//Array관련 고차함수 많이 사용됨
// forEach() 에서 함수를 넘겨야지 값을 넘기면 X
const numbers = [1, 2, 3, 4];

// numbers.forEach(console.log()); // undefined is not a function

const val = console.log();
console.log(val); //undefined <- console.log()는 반환값이 없으니까 이렇게 평가됨

let result = [];
//num이 value가 넘어감(이외 인자들도 있음(필요시))
numbers.forEach((num) => {
  result.push(num * 2);
});

console.log(numbers);
console.log(result);

//인자 명시안해서 value, idx, list 셋 다
// numbers.forEach(console.log);

///////////////////////////////////
//함수, 함수값
function pi() {
  return 3.14;
}

let piVal = pi();
let piFunc = pi;

console.log('---------------------------');
numbers.forEach((num, idx) => {
  numbers[idx] = num * 2;
});
console.log('---------------------------');

numbers.forEach((num, idx) => {
  if (idx % 2 === 1) numbers[idx] = num * 2;
});

console.log(numbers);

//코드를 이렇게 짜면 쳐맞지만, 함수가 리턴이 될 수 있다는것만 보면 되는 예시
const myFunc = (x) => x * 2;
console.log('---------------------------');

//map에서는 return을 명시해줘야 함
const strNumbers = ['1', '2', '3', '4'];
// 숫자로
const chageNum = strNumbers.map((str) => parseInt(str));
console.log(strNumbers);
console.log(chageNum);

console.log('---------------------------');
const test = strNumbers.map((str, idx) => {
  if (idx % 2 === 0) {
    console.log(str, idx);
    return parseInt(str);
  }
  return str;
});

console.log(strNumbers);
console.log(test);

console.log('---------------------------');
//3항 연산자에서 return은 조건문 앞에 명시
const result2 = strNumbers.map((str, idx) => {
  return !(idx % 2) ? parseInt(str) : str;
});

console.log(result2);

// reduce
const nums = [1, 2, 3, 4];
// nums.reduce((prev, current) =>{}, defaultValue)
// 누적곱이라면 (예상부터해보기) <- 틀렸넹
// 1 1
// 1 2
// 2 6
// 6 24
//return 값으로 24
//min, sum 이런거 만들때 좋음

//결과를 누적, prev는 for문 돌며의 결과 current는 array에서 현재값
const mulNum = nums.reduce((prev, current) => {
  console.log(prev, current);
  return prev * current;
}, 1);

console.log(mulNum);

console.log('----------reduce로 minValue 구하기--------------');
const nums3 = [5, 4, 8, 2, 1, 6, 7, 9];

const result3 = nums3.reduce((prev, curr) => {
  // console.log(prev, curr);
  return Math.min(prev, curr);
}, Infinity);

console.log(result3);

//if문 이용
const minVal = nums3.reduce((prev, curr) => {
  if (prev > curr) {
    prev = curr;
  }
  return prev;
});

//3항 연산자이용 -> 프론트에서 데이터전처리 하는 경우 Array 관련 고차 함수 많이 사용함.
const minValA = nums3.reduce(
  (prev, curr) => (prev > curr ? curr : prev),
  Infinity
);
console.log(`minValA : ${minValA}`);

console.log(`minVal : ${minVal}`);

console.log('----------filter로 Prime 구하기--------------');

const checkPrime = (num) => {
  let isPrime = true;
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      isPrime = false;
      return isPrime;
    }
  return isPrime;
};

const prime = nums3.filter((num) => {
  return checkPrime(num); //조건 만족하는 경우 return
});

console.log(prime);



