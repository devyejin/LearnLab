import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import GlobalNavigationBar from '../component/public/GlobalNavigationBar';
/**
 * @todo header는 소설, 웹툰 공통 컴포넌트로 분리
 */
export default function WebtoonLayout() {
  const days = [
    {
      category: '요일전체',
      url: '',
    },
    {
      category: '월',
      url: 'mon',
    },
    {
      category: '화',
      url: 'tue',
    },
    {
      category: '수',
      url: 'wed',
    },
    {
      category: '목',
      url: 'thu',
    },
    {
      category: '금',
      url: 'fri',
    },
    {
      category: '토',
      url: 'sat',
    },
    {
      category: '일',
      url: 'sun',
    },
  ];

  //데이터를 넘겨주기
  //먼저 배열로 만든다고 가정해서 해보고
  return (
    <>
      <div className="container">
        <GlobalNavigationBar></GlobalNavigationBar>
      </div>
      <header>
        <div className="container">
          <ul>
            {days.map((day) => {
              const { category, url } = day;
              return (
                <li>
                  <Link to={`/webtoon/${url}`}>{category}</Link>
                </li>
              );
            })}
            {/* <li>
              <Link to="/webtoon">요일전체</Link>
            </li>
            <li>
              <Link to="/webtoon/mon">월</Link>
            </li>
            <li>
              <Link to="/webtoon/tue">화</Link>
            </li>
            <li>
              <Link to="/webtoon/wed">수</Link>
            </li>
            <li>
              <Link to="/webtoon/thu">목</Link>
            </li>
            <li>
              <Link to="/webtoon/fri">금</Link>
            </li>
            <li>
              <Link to="/webtoon/sat">토</Link>
            </li>
            <li>
              <Link to="/webtoon/sun">일</Link>
            </li> */}
          </ul>
        </div>
      </header>
      <Outlet></Outlet>
      <footer></footer>
    </>
  );
}
