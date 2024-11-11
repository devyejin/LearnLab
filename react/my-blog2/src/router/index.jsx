import { createBrowserRouter } from 'react-router-dom'; //라우터는 라이브러리
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import RootLayout from '../RootLayout';
import PostDetails from '../pages/PostDetails';
import NotFound from '../pages/NotFound';

//가장 기본적인 틀 (index.jsx는 default로 인식)
//createBrowserRouter()에 path와 path에 해당하는 컴포넌트를 등록한다.
//기존에는 App에 바로 컴포넌트를 사용하던 방식에서 이제는
//App.jsx 에 RouterProvider -> 라우터 -> url경로와 컴포넌트를 매핑
const router = createBrowserRouter([
  //여기다가 RootLayout을 등록, Home, PostList는 children으로
  {
    //만약 루트 '/'를 안하고 'path: '/main', 이렇게 잡으면 자식에서 앞에 / 뺴야 함
    // path: '/main',
    path: '/',
    element: <RootLayout />,
    //에러 페이지 컴포넌트 등록
    errorElement: <NotFound />,
    children: [
      {
        // path: '/main',
        //부모경로 상속받는 경우
        index: true,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostList />,
      },
      {
        //동적 라우팅은 :변수명 형태로 사용
        path: '/posts/:postId',
        element: <PostDetails />,
      },
    ],
  },
  // {
  //   path: '/posts',
  //   element: <PostList />,
  // },
]);

export default router;
