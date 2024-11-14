import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  // isAdmin : false,
  // user : {
  //   name : 'anonimoususer',
  //   id : 'tester@naver.com',
  // }
};

const authSlice = createSlice({
  name: 'auth', //useSelector로 state.auth 이렇게 접근할 때 사용되는 name
  initialState,
  //setter들
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

//reducer내보내기
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
