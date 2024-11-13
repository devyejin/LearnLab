import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import Hello from '../pages/Hello';
import RootLayout from '../RootLayout';

//이게 가장 기본적인 틀, 나중에 세부적인 것만 바꿔서 사용
const router = createBrowserRouter([
  {
    path: '/main',
    element: <RootLayout></RootLayout>, // 또 빵꾸를 갖는걸 채우는건 children이 채운다
    children: [
      {
        // path: '', <-- '/'이니까 그냥 비워놓음?
        index: true, // 부모의 path ('/')를 가지고 온다.
        element: <Home />,
      },
      {
        path: 'posts', //상위 path가 '/'인 경우에는 '/posts'인데 /main 이런식인 경우에는 뺴야함 
        element: <PostList />,
      },
    ],
  },
  //RootLayout 이라는 것 외에도 갖고 싶다면 여기에 정의하면 됨
  //종류가 달라서 레이아웃자체가 다르다 싶은 경우
  // {
  //   path:'/music',
  //   element : <MusicLayout></MusicLayout>,
  //   children : [{
  //     path:'chart',
  //     element : 
  //   }]
  // }
]);

export default router;
