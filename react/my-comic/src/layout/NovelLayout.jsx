import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GlobalNavigationBar from '../component/public/GlobalNavigationBar';
import '../App.css';

import React from 'react';
/**
 * @todo 소설 헤더 부분 => 공통 컴포넌트로 분리하기
 */
export default function NovelLayout() {
  //분리해서 필요한 데이터
  const novels = [
    {
      category: '소설 전체',
      url: '/novel',
    },
    {
      category: '로맨스',
      url: '/romance',
    },
    {
      category: '판타지',
      url: '/fantasy',
    },
    {
      category: '현판',
      url: '/modern-fantasy',
    },
    {
      category: '무협',
      url: '/martial-arts',
    },
  ];


  return (
    <>
      <div className="container">
        <GlobalNavigationBar></GlobalNavigationBar>
      </div>
      <header>
        <div className="container">
          <ul>
            <li></li>
            <Link to="/novel">소설 전체</Link>
            <li></li>
            <Link to="romance">로맨스</Link>
            <li></li>
            <Link to="fantasy">판타지</Link>
            <li></li>
            <Link to="modern-fantasy">현판</Link>
            <li></li>
            <Link to="martial-arts">무협</Link>
          </ul>
        </div>
      </header>
      <Outlet></Outlet>
      <footer>푸터푸터 </footer>
    </>
  );
}
