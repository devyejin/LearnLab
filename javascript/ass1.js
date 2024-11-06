let number_arr = [];
for (i = 1; i < 11; i++) {
  number_arr.push(i);
}

// 0.xxxx
let arr = [];
for (i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}

console.log(arr);

//
let todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

console.log(todo.userId);
console.log(todo.completed);

//
const person = {
  name: '정우영',
  age: 20,
  city: '서울',
  location: '성동',
  language: ['HTML', 'CSS', 'JavaScript'],
};

console.log(person);

//짝수
let number_1 = Math.floor(Math.random() * 100);
console.log(number_1);

if (!number_1 % 2) {
  console.log('짝수');
} else {
  console.log('홀수');
}

//자료형 확인
let variable = Math.floor(Math.random() * 100);

console.log(variable);

let return_type = typeof variable;

if (return_type === 'number') {
  console.log('숫자형');
}

console.log('----------------------');
//숫자크기 비교
number_1 = Math.floor(Math.random() * 100);
console.log(number_1);

number_1 > 10
  ? console.log('number_1은 10보다 크다')
  : console.log('number_1은 10보다 작다');
