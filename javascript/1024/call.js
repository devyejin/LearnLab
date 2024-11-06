//이벤트 루프, 콜백 큐 
const first = () => {
  function inner() {
    console.log('inner 작업');
    setTimeout(() => {
      console.log('inner안의 setTimeout');
    }, 3000);
  }
  inner();
  console.log('동기 작업 1');
};

const second = () => {
  setTimeout(() => {
    console.log('비동기 작업 1');
  }, 3000);
  console.log('second의 동기작업');
};

const third = () => {
  setTimeout(() => {
    console.log('비동기 작업 2');
  }, 1000);
};

const fourth = () => {
  console.log('동기 작업 2');
};

first();
second();
third();
fourth();

o = [[1, 2], 3, 4];
c = [...o];

console.log(o === c);
console.log(o[1] === c[1]);
console.log(o[0][0] === c[0][0]);
console.log('--------------');
o[0][1] = 10;
console.log(o[0]);
console.log(c[0]);
console.log('--------------');

o[0] = 10000;
console.log(o);
console.log(o[0]);
console.log(c[0]);
