import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// userNavigate  네비게이트를 만들어주는 훅
// 링크를 이동할 때, 1. Link 2. userNavigate를 이용할 수 있는데 useNavigate의 경우 리다이렉션같은 느낌이라 태그에는 Link가 적합

//맨날 까먹는데, 프로토타입부터 생각하기! -> 그 다음 필요한 변수 잡는 방향으로
export default function PostList() {
  //게시글도 변하고 재랜더링 되므로 useState 상태로 관리
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '첫 번째 프로젝트',
      content:
        '첫 프로젝트에서 간단한 Todo 앱을 만들었습니다. UI 구성과 상태 관리의 중요성을 배웠습니다.',
    },
    {
      id: 2,
      title: '리액트와 함께한 성장',
      content:
        '리액트로 컴포넌트 기반 개발을 익히고, 재사용성을 높이는 방법을 이해하게 되었습니다.',
    },
    {
      id: 3,
      title: '팀 프로젝트 경험',
      content:
        '팀원들과 협업하여 일정 관리 앱을 개발했습니다. Git을 활용한 버전 관리와 코드 리뷰의 중요성을 체감했습니다.',
    },
  ]);

  //굳이 뺄 필요 없으니까 내부로 이동
  // posts.map(post => {
  //   const {id, title, content} = post;
  //   return (
  //     <li key={id}>
  //       <h3>{title}</h3>
  //       <p>{content}</p>
  //     </li>
  //   )
  // })

  const navigate = useNavigate(); //네비게이션 훅을 사용

  return (
    <>
      {/* 링크는 이제 header에서 관리  */}
      {/* <>
        <ul>
          <li>
            <Link to="/">Home 이동</Link>
          </li>
          <li>
            <Link to="/posts">게시글 이동</Link>
          </li>
        </ul>
        <div>현재위치 POSTS</div>
      </> */}

      {/* 그리고, postList는 title만 보이고, title을 누르면 detail페이지로 이동하는게 맞음!*/}
      {/* 링크를 걸어주는 방법은 2가지 1. Link 활용 2. userNabvigate 활용 */}
      {/* List -> Detail로 데이터를 넘겨주는 방법은 state를 활용, 데이터(post)를 넘긴다
          post가 객체니까 {}로 감싸서 전달
       */}
      <div>
        <ul>
          {posts.map((post) => {
            const { id, title, content } = post;
            return (
              // 1. Link 사용하는 방법
              // <li key={id}>
              //   <Link to={`/posts/${post.id}`} state={{ post }}>
              //     <h3>{title}</h3>
              //   </Link>
              // </li>
              //2. userNavigate 이용하는 방법
              <li key={id}>
                <h3
                  onClick={() => {
                    navigate(`/posts/${id}`, { state: { post } });  //인자로 같이 넘겨줘야 함 
                  }}
                >
                  {title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
