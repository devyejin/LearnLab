import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import fetchData from '../utils/fetchData';

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //전역 store접근은 useSelector 훅을 이용
  // const posts = useSelector((state) => state.posts);
  // 비동기 작업으로 대체

  const [post, setPost] = useState();

  //useEffect는 콜백함수를 받는다, 콜백함수 자체를 async로 받지 말라고 함

  //Error가 존재하면 Home으로 보내기
  useEffect(() => {
    const url = `http://localhost:3000/posts/${postId}`;

    async function fetchPost(url) {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setPost(data);
      } catch (err) {
        setError(err);
        console.error(err);
        //posts -> posts/123 -> not-found
        //not-foud상태에서 뒤로가기하면 posts/123 무한루프에 빠지게 됨
        //replace : true를 주면, 뒤로가기 기록을 not-found로 덮어씌워서 무한루프를 방지함 (사용자 경험상 좋음)
        //기획자, 프론트엔드의 관점에서는 라우터의 이동도 페이지 이동으로 봐야할지 이런것도 세심하게 봐야함(서비스는 MVP에 필요한 필수 기능 잘 돌아가게)
        //TODO: 나중에 고칠 것
        navigate('/not-found', { replace: true });
      } finally {
        setLoading(false);
      }
    }
    fetchPost(url);

    //util 컴포넌트로 분리하는게 이게 맞나?
    // const url = `http://localhost:3000/posts/${postId}`;
    // fetchData(url, setPost);
  }, []); //dependencies가 비어있을 때([])는 처음 마운트(랜더링)되었을 때만 실행
  //postId가 변경될 때 재호출 (안전함)
  //컴포넌트내에서 관리되는 변수를 넣으면 무한루프 걸림

  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
