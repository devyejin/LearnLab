import React from 'react';
import { Link } from 'react-router-dom';

//라우터 등록 후, 경로 이동을 위해 url만 쓰는 방식 말고
//화면에서 이동하려면 a태그같은 방식을 사용해야하는데 리액트 라우터에서는 Link 라이브러리 활용
//리액트에서는 Link태그를 사용하지만 html로 파싱됐을 때는 a태그로 파싱된다.
//a, href -> Link, to

//header에서 관리하니까 링크는 삭제 
export default function Home() {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/">Home 이동</Link>
        </li>
        <li>
          <Link to="/posts">게시글 이동</Link>
        </li>
      </ul> */}
      <div>현재위치 HOME</div>
    </>
  );
}
