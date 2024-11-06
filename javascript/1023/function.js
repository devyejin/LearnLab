// 2를 곱하는 함수
function multi(x) {
  return x * 2;
}

//소수 판별 함수
function checkPrime(x) {
  let isPrime = true;

  for (let num = 2; num < x; num++) {
    if (x % num === 0) {
      isPrime = false;
      // break;
      return isPrime;
    }
  }

  return isPrime;
}

//

//구구단 n단 return(배열로)
function gugu(n) {
  let result = [];

  for (let i = 1; i < 10; i++) {
    result.push(n * i);
  }

  return result;
}

//활용
let gugudan = [];
for (let n = 1; n <= 19; n++) {
  gugudan.push(gugu(n));
}
console.log(gugudan);

//매개변수 기본값
function greet(name = 'Guest') {
  console.log(`안녕하세요, ${name}님`);
}

greet(`ye`);
greet();

//인수로 배열
function greetAll(...names) {
  console.log(names);
  for (name of names) {
    console.log(`안녕하세요, ${name}`);
  }
}

greetAll('철수', '영희'); // 인수는 array로 넘어가게 됨

//함수 선언식 -> 호이스팅
//let 변수의 경우 선언부만 호이스팅, 함수 선언식은 할당도 호이스팅되서 호출 가능
function greet(name) {
  return console.log('hi ${name}');
}

//함수 표현식 (함수가 일급객체라 변수 할당 가능)
//익명 함수라 호이스팅 되지 않음
const sayHello = function (name) {
  return console.log('hi ${name}');
};

//일급 객체, 함수도 값으로 평가된다
//값으로 평가되서 Java와 달리 함수를 매개변수, return 값, 변수에 할당 등 활용 가능

//함수 호이스팅에 대한 호불호가 갈려서 선언식, 표현식 뭘 써라 의견 갈림
//플젝에서는 통일시켜야 함

//arrow func : 콜백 함수 만들 때 주로 사용
//this에 대한 바인딩이 없어 코드 예측 가능(notion 보기)
const add = (a, b) => a + b;

//함수가 1급 객체기 떄문에 객체의 Value에 넣는게 가능(값으로 평가되니까)
