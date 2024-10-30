// async 함수 안에서만 await 키워드를 사용할 수 있다.
// async 함수의 반환값은 Promise 객체이다.(주의)
// async 함수에서 return을 하는 경우 Promise객체로 감싸진다는걸 명심!

async function fetchUrl(url) {
  const response = await fetch(url); // fetch 동작이 완료되는 것을 기다린다.
  const data = await response.json(); // json() 동작이 완료되는 것을 기다린다.

  console.log(data); //data에 할당 된 후 수행된다. (여긴 동기적 작업이니까)
  return data; //Promise 로 래핑
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const resultData = fetchUrl(url);
console.log(resultData);

/** 
 * async 함수에서 return처리를 한 경우
  Promise { <pending> }
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  
  fetchUrl 자체가 비동기 함수이니까 호출해서 위임하고, JS엔진은 동기작업인 다음 라인을 실행하게 됨 
  -> 그래서 아직 응답이 오지 않은 상태라 Promise객체의 pending 상태가 출력 
 */
