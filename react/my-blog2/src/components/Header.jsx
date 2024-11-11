import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/posts">posts</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
