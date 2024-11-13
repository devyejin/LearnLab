import React from 'react';
import { Link } from 'react-router-dom';

//GlobalNavBar에서 RootHeader로 이름 변경
export default function RootHeader() {
  return (
    <>
      <div className="container global-header">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/webtoon">웹툰</Link>
          </li>
          <li>
            {/* 실수로 상대경로 novel로 쓰니까 현재위치에서 시작하게됨 */}
            <Link to="/novel">소설</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
