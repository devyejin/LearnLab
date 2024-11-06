const url = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch(url)
//   .then((resp) => {
//     resp.json();
//   })
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

async function getPost() {
  try {
    const response = await fetch(url); //fetch가 비동기로 동작
    console.log(response.status);
    const data = await response.json(); // JS Object로 반환 (이름은 json이지만)
    console.log(data); //여기가 궁금했는데, 위에 await로 data를 받아 온 다음 수행하게 됨, 안오면 밑에도 수행 중단

    //json() 이 궁금해서 찍어본 것
    console.log(typeof data);
    console.log(data);
    console.log('-----------------');
    console.log(JSON.stringify(data));

    console.log('test2');

    return data;
  } catch (error) {
    console.error(error);
  }
}
console.log('-----------------');

let result = getPost();
console.log(result);
