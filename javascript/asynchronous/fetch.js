// fetch 함수에서 GET외는 낯설긴한데, GET만 두번째 인자가 없던 것!

// 1.  () 사용한거니까 바로 호출하는 방식

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//     body: '수정작업',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => console.log('json', json))
//   .catch((error) => console.error(error))
//   .finally(console.log('fetch 작업 종료'));

/** output
    fetch 작업 종료
    { userId: 1, id: 1, title: 'foo', body: '수정작업' }

    finally절은 fetch작업 위임하고 동기작업으로 수행하니까 먼저 실행되고
    then절은 비동기로 응답 받은 후 동작하니까 두번째 라인에 출력
 */

//2. async/await 를 이용한 방식
//   await 키워드는 async 함수 내부에서만 사용 가능하므로 함수로!
async function modifyPost() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
      body: '수정작업',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await result.json();
  return data;
}

// const result = modifyPost(); // 마찬가지로 async함수니까 Promise래핑되어 반환되므로 이 기능을 사용하는 함수내에서!
// console.log(result); //Promise { <pending> }

//임시로 이름을 이렇게 잡고
async function usingModifyPostFunc() {
  const modifiedPost = await modifyPost();

  //return 받은 modifiedPost로 작업을 한다 치고
  console.log(modifiedPost);
}

usingModifyPostFunc();
