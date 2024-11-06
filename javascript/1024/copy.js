let arr_1 = [1, 2, 3];
let arr_2 = arr_1;
let arr_3 = [...arr_1];

arr_1[1] = 100;

console.log(arr_1); // [ 1, 100, 3 ]
console.log(arr_2); // [ 1, 100, 3 ]
console.log(arr_3); //[ 1, 2, 3 ]

// 얕은 복사만 되고 싶은 복사가 안됨 ( ... spread operation 이용시)
let mat_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let mat_2 = mat_1;
let mat_3 = [...mat_1];

console.log("주소값 비교");
console.log(mat_1 == mat_2); //true
console.log(mat_1 == mat_3); //false
console.log(mat_1[1] == mat_3[1]); //true

mat_1[1][1] = 100;

console.log(mat_1); // 바뀜
console.log(mat_2); // 바뀜
console.log(mat_3); // 바뀜

console.log("-----------------");
mat_1[1] = 100;

console.log(mat_1); // 바뀜
console.log(mat_2); // 바뀜
console.log(mat_3); // 안 바뀜

console.log("---------이거랑 같은 맥락--------");
let mat_4 = [];
for (let el of mat_1) {
  mat_4.push(el);
}

console.log(mat_4);
mat_4[2][1] = 200;
console.log(mat_1);
console.log(mat_4);
