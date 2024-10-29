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

//first, second 호출 자체는 동기작업! first가 stack에서 pop된 후 second 호출
//callback func만 WebAPI에서 비동기처리 후 콜백 큐로 들어간다.
first();
second();
third();
fourth();
