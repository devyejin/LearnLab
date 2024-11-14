import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import Hello from '../pages/Hello';
import RootLayout from '../RootLayout';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';
import PostCreate from '../pages/PostCreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostList />,
      },
      {
        // path에 createPost는아닌거같음
        // (most specific 이라고 함)
        // posts/create 이렇게 작성할거라면 url매핑할 때 위에서부터 유사한걸 찾아가기 때문에 문자열부터 체크하도록
        // postId가 위에 있으면, 해당 자리에 create가 인식이되서 id가 create인걸 찾아서 에러페이지가 나오기 때문에!
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
