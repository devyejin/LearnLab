import { createBrowserRouter } from 'react-router-dom';
import WebtoonLayout from '../layout/WebtoonLayout';
import NovelLayout from '../layout/NovelLayout';
import WebtoonHome from '../pages/webtoon/WebtoonHome';
import DailyWebtoons from '../pages/webtoon/DailyWebtoons';
import NovelHome from '../pages/novel/NovelHome';
import GenreNovels from '../pages/novel/GenreNovels';
import NotFound from '../pages/commons/NotFound';

const router = createBrowserRouter([
  {
    path: '/webtoon',
    element: <WebtoonLayout />,
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
    element: <NovelLayout />,
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
]);

export default router;
