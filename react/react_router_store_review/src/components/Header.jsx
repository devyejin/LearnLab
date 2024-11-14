import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  //store에서 사용자 정보를 불러오기
  const userInfos = useSelector((state) => state.userInfos);

  //테스트 id :  test@naver.com (로그인시) , 로그아웃시
  const id = 'notlogin@naver.com';

  //컴포넌트 내에서 state관리를 위한 useState
  const [userInfo, setUserInfo] = useState();

  //유저 정보를 컴포넌트 내 useState에 셋팅
  useEffect(() => {
    setUserInfo(userInfos.find((userInfo) => userInfo.id === id));
  }, []);

  const navigate = useNavigate();
  //미로그인시 Link의 to 이벤트를 막아야 함 , to를 사용하지 말아야하나?
  function handleClick(e) {
    if (!userInfo.isLogin) {
      alert('로그인이 필요합니다.');
    } else {
      navigate('/posts/create');
    }
  }

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
          {/* 로그인 유무에 따라 link이동 막으려고 함수로 분리  */}
          <Link to="#" onClick={handleClick}>
            게시글 생성
          </Link>
        </li>
        {/* ({})로 묶어야하는데 {{}} 로 묶음 */}
        <button
          onClick={() =>
            setUserInfo((prevUserInfo) => ({
              ...prevUserInfo,
              isLogin: !prevUserInfo.isLogin,
            }))
          }
        >
          {userInfo?.isLogin ? '로그아웃' : '로그인'}
        </button>
      </ul>
    </header>
  );
}
