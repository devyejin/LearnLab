let num = 0;

while (true) {
  if (num === 10) break;
  console.log(num);
  num += 2;
}

console.log('-------------------');

//arr가 빌 때까지 el 출력

const arr = [2, 3, 5, 1, 3];
// js에서는 array 빈 객체도 객체라 true로 판단, while(arr) 무한루프
// 비었는지 유무는 length를 이용
while (arr.length) {
  console.log(arr.pop());
}

console.log('-------------------');
//nums가 다음과 같을 때, 구구단 3단을 출력하시오
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Js 에서 Array에는 for in 은 배열의 key 순회 (Python은 element 접근)
// for (num in nums) {
//   console.log(`3 * ${num} = ${3 * num}`);
// }

console.log('for each 구문 이용');
nums.forEach((num) => console.log(`3 * ${num} = ${3 * num}`));

console.log(`for of 구문 이용`);
for (num of nums) {
  console.log(`3 * ${num} = ${3 * num}`);
}

console.log(nums[-1]);

console.log('-------------------');
// 1번 jun, ... 형태로 출력
const names = ['jun', 'beemo', 'ken', 'lynda'];

let count = 1;
for (name of names) {
  console.log(`${count}번. ${name}`);
  count++;
}

console.log('-------------------');
// 주어진 리스트의 합계를 계산하시오
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sum(nums2)); js에는 sum 함수 없나봄?
let sum = 0;
for (num of nums2) {
  sum += num;
}
console.log(`sum = ${sum}`);

console.log('-------------------');
// 주어진 리스트에서 최소값을 찾으시오
const nums3 = [10, 6, 8, 5, 4, 2, 3, 11];
let min = 100;
for (num of nums3) {
  if (num < min) min = num;
}
console.log(min);

//while문

//nums가 다음과 같을 때, 구구단 3단을 출력하시오
console.log('-------------------');
const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (true) {
  if (i === nums4.length) break;
  console.log(`3 * ${nums4[i]} = ${3 * nums4[i]}`);
  i++;
}

console.log('-------------------');
// 1번 jun, ... 형태로 출력
const names2 = ['jun', 'beemo', 'ken', 'lynda'];
count = 0;

while (!(count === names2.length)) {
  console.log(`${count + 1}번. ${names2[count]}`);
  count++;
}

console.log('-------------------');
const names3 = ['jun', 'beemo', 'ken'];
const ages = [18, 28, 37];

for (let i = 0; i < names3.length; i++) {
  console.log(`${ages[i]}살 ${names3[i]}`);
}

console.log('-------------------');
const score = 100;
if (score >= 90) {
  console.log('A');
  if (score == 100) {
    console.log('교수님의 총애');
  }
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
  if (score < 40) console.log('학사경고');
}

console.log('-------------------');
const isWeekend = true;
const nowTime = 19;
//주말 or 일과시간 이휴 -> 휴식 / 주말 and 일과시간 -> 자기개발
//평일 9시~18시 -> 일
if (!isWeekend) {
  if (nowTime >= 9 && nowTime <= 18) {
    console.log('일');
  }
  console.log('휴식');
} else {
  if (nowTime >= 9 && nowTime <= 18) {
    console.log('자기개발');
  }
  console.log('휴식');
}

console.log('---------------2----');
const isWeekend2 = false;
const nowTime2 = 23;
if (isWeekend2 && nowTime >= 9 && nowTime <= 18) {
  console.log('자기개발');
} else if (nowTime >= 9 && nowTime <= 18) {
  console.log('일');
} else {
  console.log('휴식');
}
