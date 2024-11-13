import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';


export default function PostDetail() {
  //1. 기존 방식 -> params에서 postId를 받음
  //하지만 title, content 데이터를 목록을 출력하는 PostList에서 가지고 있다가 넘겨주는 이상한 방식
  // const { postId } = useParams();
  // const location = useLocation();

  // const { post } = location.state;
  // const { title, content } = post;

  //2. 이제 전역 store에서 데이터를 가져오자.
  const { postId } = useParams();

  //전역 store접근은 useSelector 훅을 이용
  const posts = useSelector((state) => state.posts);

  //게시물내에서 데이터 수정 등 발생할 수 있고, 관리해야하므로 id에해당하는 post를
  //useState로 컴포넌트 내에서 관리
  //데이터 fetch는 비동기 과정이라 언제올지 모르지만, 화면은 랜더링 되어야 하기 때문에
  //빈 post를 먼저 가지고 있는다.
  const [post, setPost] = useState();

  // post.id와 params로 온 postId가 일치하는 post데이터가 전역관리되는 posts에 있는지 확인
  // 있따면 컴포넌트내에서 관리하는 useState의 post에 setter
  // 랜더링하는 컴포넌트에서 다른 작업(fetch 등)을 하려고 하다보면 side effect가 발생 -> useEffect훅에게 위임하자자
  useEffect(() => {
    //useEffect가 대신 수행할 작업
    setPost(posts.find((post) => post.id === parseInt(postId)));
  }, []); //dependencies가 비어있을 때([])는 처음 마운트(랜더링)되었을 때만 실행

  if (!post) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
