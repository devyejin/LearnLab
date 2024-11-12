import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import GlobalNavigationBar from '../component/public/GlobalNavigationBar';
import SubNavigationBar from '../component/public/SubNavigationBar';
import Footer from '../component/public/Footer';
/**
 * @todo header는 소설, 웹툰 공통 컴포넌트로 분리
 */
export default function WebtoonLayout() {
  const days = {
    subject: 'webtoon',
    result: [
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
    ],
  };

  const { subject, result } = days;

  //데이터를 넘겨주기
  //먼저 배열로 만든다고 가정해서 해보고
  return (
    <>
      <div className="container">
        <GlobalNavigationBar></GlobalNavigationBar>
      </div>
      <div className="container sub-header">
        <SubNavigationBar subject={subject} datas={result}></SubNavigationBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
