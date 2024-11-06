const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];
const notLog = [1, 4, 5, 7];
//  일 때,원소가  1, 4, 5, 7인 경우를 제외하고 출력하세요

// set이용
let notLogSet = new Set(notLog);
let result = [];

for (num of arr) {
  if (!notLogSet.has(num)) {
    result.push(num);
  }
}

console.log(result);

// 2중 for문으로 비교하는 경우
// 들어 있으면 -> 확인 stop
