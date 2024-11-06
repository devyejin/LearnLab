//URLSearchParams() : QueryParam 생성
async function getPost() {
  try {
    // 'https://jsonplaceholder.typicode.com/posts?userId=1'

    const baseURL = 'https://jsonplaceholder.typicode.com/posts';
    const params = new URLSearchParams({
      userId: 1,
    });
    const URL = `${baseURL}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();

//Post를 가져온다.
//Post의 title만 필요한 경우
async function getPostById(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.title);
  } catch (error) {
    console.error(error);
  }
}

// getPostById(3);

async function getPosts() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    // for (let post of data) {
    //   console.log(`postId : ${post.id}, postTitle : ${post.title}`);
    // }

    //map 함수를 사용하면 Iterable객체를 조건을 만족하는 element들을 array로 반환
    const postTitles = data.map((post) => post.title);

    console.log(postTitles);
  } catch (error) {}
}

// getPosts();

async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        //body에 String으로 작성하니까
        title: '게시글 제목!',
        body: '게시글 내용!',
        userId: 5,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// createPost();

async function updatePost() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// updatePost();

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: 'DELETE',
    }
  );
  // console.log(response);
  const result = await response.json();
  console.log(result);
}

deletePost(1);
