//각 페이지 상단에 이동링크가 있듯이, 공통적으로 사용되는 Header,Footer가 있고
//가운데에 변화되는 content들이 있다(Home, PostList 등)
//App 내부에 RootLayout으로 한번 감싸는데 만약 레이아웃이 완전 다르면 또 다른 레이아웃 생성
// -> 이 부분이 뒤에서 헷갈렸던 부분
//Outlet 도 리액트 라우터 라이브러리에서 지원해주는 기능
//부모 라우트가 자식 라우트를 렌더링할 위치를 지정하는 컴포넌트!
//맨 처음과 달리 이제 Home, PostList는 Outlet 자리로 들어가게 됨

//Layout, 내부 content 들을 지정하는건 당연히 라우트 설정하는 파일(/router.index.jsx 파일)
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Header컴포넌트로 보내서 이제 필요 없음
import Header from './components/Header';

//
export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
