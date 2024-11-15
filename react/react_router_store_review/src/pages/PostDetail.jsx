import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import fetchData from '../utils/fetchData';

export default function PostDetail() {
  const { postId } = useParams();

  //전역 store접근은 useSelector 훅을 이용
  // const posts = useSelector((state) => state.posts);
  // 비동기 작업으로 대체

  const [post, setPost] = useState();

  //useEffect는 콜백함수를 받는다, 콜백함수 자체를 async로 받지 말라고 함
  //
  useEffect(() => {
    const url = `http://localhost:3000/posts/${postId}`;
    async function fetchPost() {
      const response = await axios.get(url);
      const data = response.data;
      setPost(data);
    }
    fetchPost(postId);

    //util 컴포넌트로 분리하는게 이게 맞나?
    // const url = `http://localhost:3000/posts/${postId}`;
    // fetchData(url, setPost);
  }, [postId]); //dependencies가 비어있을 때([])는 처음 마운트(랜더링)되었을 때만 실행
  //postId가 변경될 때 재호출 (안전함)
  //컴포넌트내에서 관리되는 변수를 넣으면 무한루프 걸림

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
