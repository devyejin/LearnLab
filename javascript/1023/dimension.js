

//2차원 배열
const name = ['jun', 'ken', 'alex'];
const age = [15, 26, 37];
const gender = ['M', 'F', ''];

const arrayPeople = [name, age, gender];
console.log(arrayPeople[0]);
console.log(arrayPeople[0][1]);

//
const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 1 ~ 9 순서대로 출력해보자.
console.log('---------------------------');
for (let r of nums) {
  for (let num of r) {
    console.log(num);
  }
}

console.log('---------------------------');
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[i].length; j++) console.log(nums[i][j]);
}

console.log('---------------------------');
//위에처럼 for문안에 dot 접근법 쓰지말고 변수로 뽑아내면 가독성 높고 수정하기 좋음
const n = nums.length;
const m = nums[0].length;

// 1차원으로 쪼갠 후 꺼내기
// let arr
// arr = nums[0]
// for (let num of arr) console.log(num)

// arr = nums[1]
// for (let num of arr) console.log(num)

// 위 과정이 반복하니까 loof 감싸면 ㅇㅋ (코테풀 때 생각이 안나면 이런식으로 유도하기)

// for (let r of nums) {
//   for (let num of r) {
//     console.log(num);
//   }
// }

//key값(idx) 활용 (for ...in 이용법) <- 생각 못했음
//값 하나씩 안뽑아내고, 2중for문으로 하는게 더 깔끔하지만, idx 뽑아서 접근 생각해보기에 좋은것 같음
//idx이용할거면 그냥 ; ; 로 연결된게 더 좋지마 for...in 익숙해지기
for (let i in nums) {
  let arr = nums[i];
  {
    for (let j in arr) {
      let num = arr[j];
      console.log(num);
      console.log(arr[j]);
      console.log(nums[i][j]);
    }
  }
}

console.log('---------------------------');
// 1.  행들의 합의 값으로 리스트를 만드세요
//     - [6, 15, 24],   [1 + 2 + 3,  4 + 5 + 6, 7 + 8 + 9]
let result = [];
let sum;
for (let r of nums) {
  sum = 0;
  for (let c of r) {
    sum += c;
  }
  result.push(sum);
}
console.log(result);

//쪼개기 하는 법
//배열을 만든다
//6을 만든다 -> [1,2,3]을 더한다
//넣는다
// 15를 만든다 -> [4,5,6]을 더한다
//넣는다
// let arr
// let sum
// let result = []
// arr = nums[0]
// sum = 0
// for(let num of nums[0])
//   sum += sum
// result.push(sum)
// 위 과정을 반복한다
let arr;
result = [];
for (arr of nums) {
  sum = 0;
  for (let num of arr) {
    sum += sum;
  }
  result.push(sum);
}
console.log('---------------------------');

//idx로 접근하는 방법을 더 많이 사용
result = [];
for (let i = 0; i < n; i++) {
  sum = 0;
  for (let j = 0; j < m; j++) {
    sum += nums[i][j];
  }
  result.push(sum);
}
console.log('---------------------------');

//lodash이용도 가능
// var _ = require('lodash');
// result = [];
// for (let arr of nums) {
//   result.push(_.add(arr));
// }
// console.log(`lodash 이용 ${result}`);

console.log('---------------------------');
// 2. 모든 원소들의 합을 구하시오
// 1 + 2 + 3 + 4 ... + 9
result = 0;
for (let r of nums) {
  for (let c of r) {
    result += c;
  }
}
console.log(result);

console.log('---------------------------');
// 3. 열들의 합의 값으로 리스트를 만드세요
//     - [1 + 4 + 7, 2 + 5 + 8, 3 + 6 + 9]
result = [];
// 00 +10 +20

sum = 0;
for (let j = 0; j < m; j++) {
  for (let i = 0; i < n; i++) {
    sum += nums[i][j];
  }
  result.push(sum);
}
console.log(result);


console.log('---------------------------');

// 구구단이 들어있는 2차원 배열을 만드시오.
let c = [];
let r = [];
for (let i = 1; i < 20; i++) {
  r = [];
  for (let j = 1; j < 20; j++) {
    r.push(i * j);
  }
  c.push(r);
}
console.log(c);



