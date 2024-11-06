const compare = function (x1, x2) {
  //x1, x2 비교 -> 큰 수 반환, 같으면 null
  if (x1 > x2) return x1;
  else if (x1 < x2) return x2;
  else return null;
};

const compare2 = (x1, x2) => {
  return x1 > x2 ? x1 : x1 < x2 ? x2 : nll;
};

console.log(compare2(5, 2));

console.log('----------------------------');
// 음수 양수
const determine = function (x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};

console.log(determine(-5));
console.log(determine(0));

console.log('----------------------------');
//max값 반환
const maxNumber = (arr) => {
  let max = -Infinity;
  for (num of arr) {
    if (num > max) max = num;
  }
  return max;
};

const minNumber = (arr) => {
  let min = Infinity;
  for (num of arr) if (num < min) min = num;
  return min;
};

const evenNumber = (arr) => {
  let new_arr = [];
  for (num of arr) {
    if (num % 2 == 0) new_arr.push(num);
  }
  return new_arr;
};
