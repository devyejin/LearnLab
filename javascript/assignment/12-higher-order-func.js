const posts = [
  { id: 1, title: '첫 번째 포스트', content: '첫 번째 포스트 내용' },
  { id: 2, title: '두 번째 포스트', content: '두 번째 포스트 내용' },
  { id: 3, title: '세 번째 포스트', content: '세 번째 포스트 내용' },
];

const comments = [
  { id: 1, postId: 1, content: '첫 번째 댓글' },
  { id: 2, postId: 2, content: '두 번째 댓글' },
  { id: 3, postId: 1, content: '세 번째 댓글' },
  { id: 4, postId: 2, content: '네 번째 댓글' },
  { id: 5, postId: 3, content: '다섯 번째 댓글' },
  { id: 6, postId: 2, content: '여섯 번째 댓글' },
  { id: 7, postId: 3, content: '일곱 번째 댓글' },
  { id: 8, postId: 3, content: '여덟 번째 댓글' },
  { id: 9, postId: 1, content: '아홉 번째 댓글' },
  { id: 10, postId: 3, content: '열 번째 댓글' },
];

//1. 모든 posts 의 번호 id, 제목 title을 출력한다.
function printPost(posts) {
  posts.forEach((post) => {
    console.log(`${post.id} ${post.title}`);
  });
}
// printPost(posts);



//2. 게시글 번호 postId 가 1인 모든 comments 를 출력한다.
function printCommentsByPostId(comments, postId) {
  comments.forEach((comment) => {
    if (comment.postId === postId) {
      console.log(comment);
    }
  });
}
// printCommentsByPostId(comments, 1);




//3. 모든 posts 와 comments 의 객체를 출력한다.
//   개별 posts 에 연관된 comments를 구분해서 출력한다.
function printPostWithComments(posts, comments) {
  posts.forEach((post) => {
    let id = post.id;

    console.log(`${id}번 Post`);
    console.log(post);

    console.log(`${id}번 Post의 Comments`);
    comments.forEach((comment) => {
      if (comment.postId === id) console.log(comment);
    });

    console.log();
  });
}
printPostWithComments(posts, comments);




// 4. 개별 posts 당 연관된 comments 의 수를 출력한다.
function countCommentsByPost(posts, comments) {
  posts.forEach((post) => {
    let count = 0;
    comments.forEach((comment) => {
      if (comment.postId === post.id) count++;
    });
    console.log(`${post.id}번 게시글의 댓글 수 ${count}`);
  });
}
// countCommentsByPost(posts, comments);


function countCommentsByPostV2(posts, comments) {
  for (let post of posts) {

    let count = 0;
    for (let comment of comments) {
      if (comment.postId === post.id) count++;
    }
    console.log(`${post.id}번 게시글의 댓글 수 ${count}`);
  }
}
// countCommentsByPostV2(posts, comments);



function countCommentsByPostV3(posts, comments) {
  posts.forEach((post) => {
    const count = comments.filter(comment => comment.postId === post.id).length;
    console.log(`${post.id}번 게시글의 댓글 수 ${count}`);
  })
}
countCommentsByPostV3(posts, comments);
