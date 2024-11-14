import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
        <li>
          <Link to="/posts/create">새로운 게시글 작성</Link>
        </li>
      </ul>
    </header>
  );
}
