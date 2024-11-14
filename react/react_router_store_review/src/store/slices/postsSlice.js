import { createSlice } from '@reduxjs/toolkit'; //슬라이스를 생성하자

//이제 데이터를 사용하는 컴포넌트가 아닌 슬라이스에서 데이터를 가지고 있는다.
const initialState = [
  {
    id: 1,
    title: '첫 번째 프로젝트',
    content:
      '간단한 Todo 앱을 만들었습니다. UI 구성과 상태 관리의 중요성을 배웠습니다.',
  },
  {
    id: 2,
    title: '리액트와 함께한 성장',
    content:
      '리액트를 이용해 컴포넌트 기반 개발을 익히고 재사용성을 높이는 방법을 배웠습니다.',
  },
  {
    id: 3,
    title: '팀 프로젝트 경험',
    content:
      '팀 프로젝트에서 협업하여 일정 관리 앱을 개발했고, Git을 활용한 버전 관리와 코드 리뷰의 중요성을 배웠습니다.',
  },
];

//컴포넌트 단위에서 사용하던 useState에 비유하자면
//const [posts, reducers] = useState(initialState) 이 느낌인것! 
const postsSlice = createSlice({
  name: 'posts', //useState에서의 변수명
  initialState, // useState에서의 초기값
  reducers: { //useState에서의 setter (리듀서*들*)
    addPost : (state,action) => { // state는 Slice가 가지고 있는 상태 즉, posts
      state.push(action.payload);
      console.log(action.payload);
    }
  },
});

//addPost 함수를 export
//리덕스 툴킷은 addPost reducer 함수 -> 액션 생성자 addPost()로 변환 -> postsSlice.actions에 넣는다.
//즉 postsSlice.actions에는 addPost 액션 생성자가 포함되어 있다. (그냥 이렇게 사용하는구나~)
export const {addPost} = postsSlice.actions;

//외부에서 데이터 조회는 ok
//데이터를 갱신할 수 있는 권한을 가진 자만이 특정 조건이나 범위에 따라 데이터를 변경할 수 있도록 setter(reducer)제공 (캡슐화)
export default postsSlice.reducer;
