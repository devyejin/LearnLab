import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalNavigationBar() {
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
