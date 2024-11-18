import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import Hello from '../pages/Hello';
import RootLayout from '../RootLayout';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';
import PostCreate from '../pages/PostCreate';

const router = createBrowserRouter([
  // not-found를 header나 이런것도 없는 위치로 잡은거고 내부로 잡고싶으면 내부에 (자기맘)
  {
    path: '/not-found',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostList />,
      },
      // posts/:postId 가 위에 있으면 postId에 "create"가 인식되며 errorpage가 나오게됨! 위치 신경쓰기
      {
        path: '/posts/create',
        element: <PostCreate />,
      },
      {
        path: '/posts/:postId',
        element: <PostDetail />,
      },
    ],
  },
  // {
  //   path: '/music',
  //   element: <musiclayout></musiclayout>
  // }
]);

export default router;
