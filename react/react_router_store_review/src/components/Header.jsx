import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../store/slices/authSlice';

//로그인 상태에 따라 로그인, 로그아웃 버튼을 보여준다.

export default function Header() {
  //전역 변수(store)에서 상태를 가져온다 useSelector 훅 이용
  const { isAuthenticated } = useSelector((state) => state.auth); //구조분해할당
  const dispatch = useDispatch(); //reducer(setter) 사용을 위한 트리거

  return (
    <header>
      <div>
        {isAuthenticated ? (
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            로그인
          </button>
        )}
      </div>
      <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
        {/* 어떤 상태든 다 보여주고 비로그인시에는 로그인페이지로 보내주는게 맞을 수도 있음(케바케) */}
        {/* 로그인을 한 경우에만 보여주기 => AND */}
        {/* Link(a태그)만 막으면 직접 url입력하고 들어가는 건 가능 -> PostCreate 페이지에서도 막아줘야 한다. */}
        {isAuthenticated && (
          <li>
            <Link to="/posts/create">새로운 게시글 작성</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
