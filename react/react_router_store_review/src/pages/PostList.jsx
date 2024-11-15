import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import fetchData from '../utils/fetchData';

export default function PostList() {
  const navigate = useNavigate();

  //store에 저장하던걸 -> 서버에서 가져오는 방식으로
  // const posts = useSelector(state => state.posts);
  const [posts, setPosts] = useState([]); //게시물'들'이니까 초기값을 배열로 받음

  useEffect(() => {
    // async function fetchPost() {
    //   const url = 'http://localhost:3000/posts';
    //   const response = await axios.get(url);

    //   //리액트는 post가 없는데도 화면을 보여주다가 post가 오면 감지해서 보여줘야 함
    //   // => state (1.useState, 2.store) => 1.useState를 사용 => 사용자가 사이트를 계속 이동하는 과정에서 데이터는 변화니까
    //   // => 데이터는 조회할 때 마다 db에서 조회해오는게 맞음
    //   const data = response.data;
    //   console.log(data);
    //   setPosts(data);
    // }

    // fetchPost();

    const url = 'http://localhost:3000/posts';
    fetchData(url, setPosts);
  }, []);
  //UseEffect를 사용하는 이유
  //useEffect의 dependencies로 []를 줘서 처음 랜더링시 한 번만 실행되겠다는 조건을 주지 않으면, 데이터가 없다가 데이터 생성 -> 리랜더링 -> fetchPost실행 -> 리랜더링 -> ...무한루프
  //그래서 []를 부여
  //그래서 서버에서 데이터가 변경되도 내가 보고있는 게시물글 변화가 안하고 새로고침해야 업데이트되는 이유! (무한루프 빠지면 안되니까 이런식으로 구현되어있었던것)

  //빈 배열에 posts 를 주면 계속 무한루프걸림
 

  //데이터가 없을 때 임시적인 화면을 보여줄거라면 -> 해도 좋음 (에러핸들링 방법 중 하나)
  //로딩중에는 어떻게 할 것인지 등 다양한 핸들링 가능(나중에 함)
  // if(!posts) {
  //   return <div>데이터 없어!</div>
  // }

  return (
    <div>
      <h2>posts</h2>
      <ul>
        {posts.map((post) => {
          const { id, title, content } = post;
          return (
            <li key={id}>
              <Link to={`/posts/${id}`} state={{ post }}>
                <h3>{title}</h3>
              </Link>
              <h3
                onClick={() => {
                  // 이동을 하고 싶다
                  navigate(`/posts/${id}`);
                }}
              >
                {title}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
