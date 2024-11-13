import React from 'react';
import Header from 'react'
import { Outlet } from 'react-router-dom';
 
Outlet;
//RootLayout은 default "/" 를 갖고, 빵구도 "/" 를 갖는게 좋겠다.
//빵꾸를 Outlet 이라는 라이브러리를 이용
export default function RootLayout() {
  return (
    <>
      {/* 빵꾸  <- 빵구에서 Hoem, PostList, Hello를 갈아끼운다*/}
      {/* Outlet은 index.jsx(라우터)children에 있는 요소들이 채운다. */}
      <Header></Header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </>
  );
}
