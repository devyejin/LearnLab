/**
 * Promise : 비동기 작업에 대한 성공과 실패를 나타내는 객체
 * Promise 객체는 then(), catch(), finally() 메서드를 사용해 비동기 작업의 결과를 처리
 *
 * fetch(url) : 네트워크 요청을 처리하는 '비동기 함수' (즉, 브라우저측에서 처리)
 *              Promise 객체를 반환한다.
 * 즉, fetch의 결과를 처리하려면 then, catch, finally 메서드를 이용해야 한다.
 */

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const data = fetch(url) //Promise 객체 반환
  .then((response) => {  //요청이 성공했으면 then 메서드 로직을 탐
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(console.log('종료'));

console.log(data);

// 종료
// Promise { <pending> }
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//finally 절은 Promise 상태와 상관없이 즉시 실행
//data를 log찍었을 때 아직 요청에 대한 응답이 오지 않아 pending
//그 후 응답이 왔을 때 json 데이터를 출력한 것

//위에처럼 뒤에서 응답 데이터를 활용해야 하는경우 fetch의 비동기 처리 결과를 동기적으로 다루기는 어렵다!
//await/async 를 활용하자.