// 펼침 연산자
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; //깊은 복사 필요할 때 이용
let arr3 = arr1;
let arr4 = [...arr1, 4, 5, 6];

let ar1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//2차 이상에서는 ... 복사는 좋지 않은 방법, 다른 방법을 이용해서 복사해야함
//이해하면 좋음
console.log('---------ar1-----------');
ar2 = [...ar1]; // ar2는 ar[0] ar[1] ar[2]의 주소를 참조
console.log(`ar1 : ${ar1}`);
console.log(ar1);
console.log(`ar2 : ${ar2}`);

console.log('----------ar[1] = 100 변경 후---------');
ar1[1] = 100;
console.log(`ar1 : ${ar1}`); // ar1 : 1,2,3,100,7,8,9
console.log(`ar2 : ${ar2}`);

// ar1[1][1] = 100;
// console.log(ar1);

//so1. 함수 sol2. json(string)했다가 다시 object로

//구조 분해 할당 -> 많이 사용, 리액트에서도
//모듈을 import할 때 일부분만 필요한 경우가 많기 때문에 활용
const person = {
  name: '홍길동',
  age: 30,
  job: '개발자',
};

const logName = (person) => {
  console.log(person.name);
};

logName(person);

const { name, age } = person;
console.log(name);

//옵셔널 체이닝-----------------------------------------------
console.log(person.name);
console.log(person.gender); //error 발생 안하고 undefined

console.log(person.name.what); //undefined
// console.log(person.gender.what); //error

//객체에 없는 key값 접근->undefined

//서버에서 데이터 가져올 때 안가져왔을 수도 있음(계속 보다가 가져오면 사용하는것)
let people = [];
console.log(people[0]); // 여기까지는 undefined로 ㄱㅊ
// console.log(people[0].age); //undefined의 property에 접근하니 error

//뒤에서 데이터를 로드하게되면 위에서 error나니까 옵셔널 체인으로 error를 막음
// 옵셔널 체인에서 ?를 다 쓰느냐 상단에서 쓰느냐는 어디에서 체크하느냐 따라

//nullish --------------------------------------------------
//단축평가
console.log(1 || 2); //1까지만 보고 반환 -> 1(true)
console.log(0 || 3); //0에서 false라 3까지 간 후 평가 -> 3 반환

console.log(1&&2) //2까지 확인하니 2
console.log(0&&2) //0부터 false라 0
console.log(2&&0) //0까지 확인하니 0


