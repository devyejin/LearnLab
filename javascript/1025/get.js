//위에 방식은 반환값이 명확하지 바로 보이지 않으니 아래 방식이 더 좋지만 둘 다 사용되니 둘 다 알아두기

//  function getPost() {
//   try {
//     const response =  fetch('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(response) // Promise { <pending> }
//     const data =  response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// getPost();

// fetch는 비동기적인 함수라 동기적으로 response를 가지고 json 변환하려고 하면 에러남, 데이터받기전에 수행하다보니

//await로 감싸진 부분은 비동기작업이기 떄문 -> fetch, json

async function getPostById(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.id);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPostById(5);

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  // data.forEach((value) => {
  //   console.log(value);
  // });

  const titles = data.map((value) => value.title);
  console.log(titles);
}

getPosts();

const data = {
  title: 'title',
  userId: 1,
};

const JsonData = JSON.stringify({
  title: 'title',
  userId: 1,
});

console.log(data); // { title: 'title', userId: 1 }
console.log(JsonData); //{"title":"title","userId":1}
