// 1번, 1~n까지 출력
let n = Math.round(Math.random() * 10);
console.log(`n : ${n}`);

//for문 이용
for (let num = 1; num <= n; num++) console.log(num);

//while문 이용
// num이 n보다 작을때까지 출력
console.log(`n : ${n}`);
num = 1;
while (num <= n) {
  console.log(num);
  num++;
}

//n까지의 합
let total = 0;
console.log(`n : ${n}`);
for (let num = 1; num <= n; num++) {
  total += num;
}
console.log(`total : ${total}`);

console.log('-------------------');
//짝수의 합, 개수
total = 0;
let count = 0;
console.log(`n : ${n}`);
for (let num = 1; num <= n; num++) {
  if (!(num % 2)) {
    total += num;
    count++;
  }
}
console.log(`짝수의 합 total : ${total}, 개수 : ${count}`);

console.log('-------------------');
//반복문
// 짝수라면 원소를 출력하지 않고, 반복문을 즉시 종료
arr = [1, 9, 3, 11, 4, 5, 2, 7];
for (let num of arr) {
  if (!(num % 2)) break;
  console.log(num);
}
