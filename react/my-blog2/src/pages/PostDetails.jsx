// PostDetails는 개별 페이지를 갖는게 자연스러움!
//PostDetails 페이지에서는 url에서 postId값을 가져와서 맞는 데이터를 출력해줘야 함
//어떻게 postId를 가져올까? useParams 훅을 이용!

//PostDetail은 Post 데이터가 필요한데, 호출하는 PostList에서 넘겨받는다.
//PostList(부모) -> PostDetail(자식)로 이동하는 Link, navigate 방식 둘 다 state를 활용한다.
//자식 라우트에서 useLocation 훅을 활용하여 받은 state를 활용
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function PostDetails() {
  const { postId } = useParams(); // postId를 객체로?

  const location = useLocation();
  const { post } = location.state; //이미 post는 객체인데 왜 다시 { } 객체로 감싸지?
  console.log(location.state);
  console.log(post);
  // const { title, content } = post;
  return (
    <div>
      {/* <h3>{title}</h3> */}
      {/* <p>{content}</p> */}
    </div>
  );
}
