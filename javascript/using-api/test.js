// 배열의 원소 중 마지막으로 나온 홀수의 값을 출력한다.
let arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

newArr = arr.reverse(); // reverse() 메서드는 원본을 뒤집음
// console.log(newArr);

let result = null; //음수, 양수 다 사용할 수 없다면 null로 초기화하는게 맞음, undefined는 에러날 때 나오니까
for (let num of newArr) {
  if (num % 2 !== 0) {
    result = num;
    break;
  }
}

console.log(result);

// 마지막 홀수를 reduce를 이용해서 출력해라. (모두 짝수인 경우 고려X)
// reduce의 경우 return 값이 필요함, return해주지 않으면 undefined
// 초기값을 설정하지 않으면 acc=[0], curr=[1] 설정해주면 acc,curr 둘 다 해당 초기값에서 시작
// 해보기! (찾아보기)
arr = [1, 3, 5, -3, 9, 10, 23, -6, 44, 22, -10, 5, 20];

arr.reduce((acc, curr) => {
  console.log(acc, curr);
  if (acc % 2 !== 0) return acc;
  else return curr;
}, arr[0]);
