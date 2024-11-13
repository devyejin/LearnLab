import React from 'react';

export default function Header() {
  return (
    <header>
      {' '}
      <ul>
        {/* <li><a href=""></a></li> 
    리액트 라우터에서는 
    html의 a태그, href 대신
    Link, to를 사용*/}
        <li>
          <Link to="/">HOME으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
      </ul>
    </header>
  );
}
