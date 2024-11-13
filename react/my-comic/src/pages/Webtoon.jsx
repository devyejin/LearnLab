import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import SubNavigationBar from '../component/public/SubNavigationBar';
/**
 * @todo header는 소설, 웹툰 공통 컴포넌트로 분리
 */
export default function Webtoon() {
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

  return (
    <>
      <SubNavigationBar subject={subject} datas={result}></SubNavigationBar>
      <Outlet></Outlet>
    </>
  );
}
