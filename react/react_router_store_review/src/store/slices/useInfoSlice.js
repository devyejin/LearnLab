import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'login@naver.com',
    name: 'test',
    isLogin: true,
  },
  {
    id: 'notlogin@naver.com',
    name: 'test2',
    isLogin: false,
  },
  {
    id: 'test3@naver.com',
    name: 'test3',
    isLogin: false,
  },
];

const useInfoSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    //로그인
    login: (state, action) => {
      //리스트의 해당 데이터의 isLogin 값을 변경한다.
      //넘어온 id값, isLogin 값 (구조분해할당으로 처리)
      // const id = action.payload.id;
      // const isLogin = action.payload.isLogin;
      const [id, isLogin] = action.payload;

      //state(store에 있는 값에 변경하기) , store 데이터도 수정이 아니라 교체의 느낌
      // Redux Toolkit을 사용하면 수정의 개념처럼 사용하면 툴킷에서 교체해준다
      const user = state.find(id === state.id);

      if (user) {
        user.isLogin = isLogin; //db처럼 여기서 데이터관리가 되니까 이러면 수정됨, 다시 밀어넣을 필요가 없다.
      }
    },
  },
});

export default useInfoSlice.reducer;
