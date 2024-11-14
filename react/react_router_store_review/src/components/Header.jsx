import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/slices/useInfoSlice.js';

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
  const dispatch = useDispatch();
  //미로그인시 Link의 to 이벤트를 막아야 함 , to를 사용하지 말아야하나?
  function handleClick(e) {
    if (!userInfo.isLogin) {
      alert('로그인이 필요합니다.');
    } else {
      navigate('/posts/create');
    }
  }

  //userInfo.isLogin 정보가 false로 되면(감지하고 있으니까) 'home'으로 보내기
  //로그인, 로그아웃 버튼 클릭시 발생하는 이벤트니까 이 이벤트에서만 관리?
  //버튼 클릭안해도 만료될 수 있는데, 그냥 감지는 어떻게 하는가?

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
          onClick={() => {
            setUserInfo((prevUserInfo) => {
              // console.log(userInfo.isLogin);
              const isLogin = !prevUserInfo.isLogin;
              
              //store에 반영
              dispatch(login({ ...userInfo, isLogin }));
              
              //return 부분이 useState부분 반영하는거고
              return {
                ...prevUserInfo,
                isLogin: isLogin,
              };
            });
            
            // //componet는 바로 반영 아니지만, store는 바로 반영되나?
            // //store에서 정보꺼내서 home으로 보내버리기?
            // const userInfos = useSelector((state) => state.userInfos)

           



            if (!userInfo.isLogin) navigate('/posts');
          }}
        >
          {userInfo?.isLogin ? '로그아웃' : '로그인'}
        </button>
      </ul>
    </header>
  );
}
