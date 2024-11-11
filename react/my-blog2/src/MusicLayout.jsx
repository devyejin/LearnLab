import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MusicLayout() {
  return (
    <>
      <header>music만의 header</header>
      {/* <div>Music은 분야가 달라서 다른 Layout인 경우</div> */}
      <Outlet></Outlet>
      <footer>music만의 footer</footer>
    </>
  );
}
