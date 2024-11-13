import { createBrowserRouter } from 'react-router-dom';
import Webtoon from '../pages/Webtoon';
import Novel from '../pages/Novel';
import WebtoonHome from '../component/webtoon/WebtoonHome';
import DailyWebtoons from '../component/webtoon/DailyWebtoons';
import NovelHome from '../component/novel/NovelHome';
import GenreNovels from '../component/novel/GenreNovels';
import NotFound from '../pages/commons/NotFound';
import RootLayout from '../layout/RootLayout';
import MainHome from '../pages/commons/MainHome';

/**
 * RootLayout이 RootHeader를 가지고 있고, 그 안에 Outlet에서 WebtoonLayout, NovelLayout들을 갖는다.
 */

// 페이지들이 많아지면, children등을 별도의 파일로 분리 가능 -> 유지보수, 관리 측면에서 용이함
// 분리 예시 <-- 이 변수명를 children에 넣어서 처리 util에 url함수 만들었듯이 분리해서 import 후 사용
// const webtoonChildren = [[
//   {
//     index: true,
//     element: <WebtoonHome />,
//   },
//   {
//     // 앞에 '/'붙여서 작성하면 절대주소, 안붙이면 상대주소
//     // /webtoon/:day
//     path: ':day',
//     element: <DailyWebtoons />,
//   },
// ]]
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainHome />,
      },
      {
        path: '/webtoon',
        element: <Webtoon />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <WebtoonHome />,
          },
          {
            // 앞에 '/'붙여서 작성하면 절대주소, 안붙이면 상대주소
            // /webtoon/:day
            path: ':day',
            element: <DailyWebtoons />,
          },
        ],
      },
      {
        path: '/novel',
        element: <Novel />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <NovelHome />,
          },
          {
            path: ':genre',
            element: <GenreNovels />,
          },
        ],
      },
    ],
  },
]);

export default router;
