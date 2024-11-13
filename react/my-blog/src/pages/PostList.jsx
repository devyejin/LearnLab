import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//게시글 보여주기
// 게시글 리스트니까 li태그안에 ul로 존재하겠다. (프로토타입 먼저! 맨날 까먹음)
{
  /* <div>
<ul>
  <li>
    <h3>제목</h3>
    <p>내용</p>
  </li>
  <li>
    <h3>제목</h3>
    <p>내용</p>
  </li>
  <li>
    <h3>제목</h3>
    <p>내용</p>
  </li>
</ul>
</div> */
}
// div>ul>li>h3+p 이런 구성
// 그 다음 필요한 데이터를 뽑아내자

export default function PostList() {
  //내용이 변경될 수도 있으니까 useState로 관리
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

  //프로토타입
  return (
    <>
      <div>wewewqe</div>
    </>
  );
}
