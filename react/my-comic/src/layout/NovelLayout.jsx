import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SubNavigationBar from '../component/public/SubNavigationBar';

import React from 'react';
/**
 * @todo 소설 헤더 부분 => 공통 컴포넌트로 분리하기
 */
export default function NovelLayout() {
  //분리해서 필요한 데이터
  const novels = {
    subject: 'novel',
    result: [
      {
        category: '소설 전체',
        url: '',
      },
      {
        category: '로맨스',
        url: 'romance',
      },
      {
        category: '판타지',
        url: 'fantasy',
      },
      {
        category: '현판',
        url: 'modern-fantasy',
      },
      {
        category: '무협',
        url: 'martial-arts',
      },
    ],
  };

  const { subject, result } = novels;

  return (
    <>
      <div className="container sub-header">
        <SubNavigationBar subject={subject} datas={result}></SubNavigationBar>
      </div>
      <Outlet></Outlet>
    </>
  );
}
