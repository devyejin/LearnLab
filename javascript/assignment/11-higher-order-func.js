// 배열의 원소 중 마지막으로 나온 홀수의 값을 출력한다.
arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

function findLastOdd(arr) {
  lastOddNum = null;
  for (const num of arr) {
    lastOddNum = num % 2 !== 0 ? num : lastOddNum;
  }
  return lastOddNum;
}
// console.log(findLastOdd(arr));

function findLastOddV2(arr) {
  for (const num of [...arr].reverse()) {
    // reverse()는 원본을 변경하므로 복사해서 사용하자
    if (num % 2 !== 0) return num;
  }
  return null;
}
// console.log(findLastOddV2(arr));

//초기값을 주지 않으면 idx=0 => acc, idx=1 => curr
//초기값을 주면 초기값 => acc, idx=0 => curr
function findLastOddV3(arr) {
  const result = arr.reduce((acc, curr) => {
    // console.log(acc, curr);
    if (curr % 2 !== 0) return curr;
    return acc;
  }, null);

  return result;
}
// console.log(findLastOddV3(arr));

function findLastOddV4(arr) {
  return arr.reduce((acc, curr) => (curr % 2 ? curr : acc), null);
}
// console.log(findLastOddV4(arr));

//x보다 큰 값
// 배열의 원소 중 변수 x 보다 큰 원소만 모아서 새로운 배열 을 만들어서 출력한다.
arr2 = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];
const x = Math.floor(Math.random() * 201) - 100;

function filterGreaterThanX(arr, x) {
  return arr.filter((num) => num > x);
}

console.log(`x : ${x}`);
console.log(filterGreaterThanX(arr2, x));
