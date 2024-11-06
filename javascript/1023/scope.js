// let, const : block scope
// var : function scope <- 안씀
// {
//   let value3 = 123;
// }

// console.log(value3);

function funcScope() {
  let functionVar = '함수 변수';
  console.log(functionVar); // 함수 변수
}

funcScope();

// console.log(functionVar);

let globalVar = '전역 변수';

function outerFunction() {
  let outerVar = '외부 함수 변수';

  function innerFunction() {
    let innerVar = '내부 함수 변수';
    console.log(innerVar); // 내부 함수 변수
    console.log(outerVar); // 외부 함수 변수
    console.log(globalVar); // 전역 변수
  }
  innerFunction();
}
outerFunction();

console.log('--------------------------');
//gl -> blco -> ch -> gl에 ch
let glob = 'glob';
{
  console.log(glob);
  glob = 'change';
}
console.log(glob); //전역이니까 ㅇㅋ

console.log('--------------------------');
let glb2 = 'glb2';
{
  let glb2 = 'inner';
  console.log(glb2); //inner
  glb2 = 'inner2';
}
console.log(glb2); //glb2

console.log('--------------------------');
// 함수 안에서 glb사용
function test() {
  console.log(glb2);
}

test();

console.log('--------------------------');

//블록 스코프랑 함수 스코프
let f1 = 'f1';
{
  console.log(f1);
  f1 = 'i1';
}
console.log(f1);

//let의 경우 선언이기 떄문에 블록내에서 선언시, 블록에서 우선시 됨
// let f1 = 'f1';
// {
//   let f1 = 'i1'
//   console.log(f1);
// }
// console.log(f1);

console.log('--------------------------');

let f2 = 'f2';

function test3() {
  // let f = 'inner';
  console.log(f2);
}

test3();
console.log(f2);

console.log('--------------------------');
function test3() {
  // let f = 'inner';
  console.log(f2);
  f2 = 10;
  console.log(f2);
}

test3();
console.log(f2);

console.log('--------------------------');
// for문의 ( )
for (let i = 0; i < 3; i++) {
  i += 10;
  console.log(i);
}


//function은 독자적인 기능이다보니 함수 내부에서 외부에 영향을 미치지 않아야 함
//cote의 경우는 제외
