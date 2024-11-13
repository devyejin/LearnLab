import React from 'react';
import { Link } from 'react-router-dom';
import { getUrl } from '../../utils/getUrl';

//Todo 지금은 고정된 갯수로 만들었지만, 들어오는 데이터의 수 만큼 for문으로 생성하도록 수정하기

export default function SubNavigationBar({ subject, datas }) {
  return (
    <>
      <div className="container sub-header">
        {datas.map((data) => {
          const { category, url } = data;
          const fullUrl = getUrl(subject, url);
          return (
            <li className="dotremove">
              <Link to={`${fullUrl}`}>{category}</Link>
            </li>
          );
        })}
      </div>
    </>
  );
}
