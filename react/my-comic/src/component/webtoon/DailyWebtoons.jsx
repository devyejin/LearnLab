import React from 'react';
//동적 라우팅하기 위한 훅
import { Navigate, useParams } from 'react-router-dom'; //리다이렉션 시키기 위한 Navigate

export default function DailyWebtoons() {
  const { day } = useParams();

  const weekDays = new Set(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']);

  if (!weekDays.has(day)) {
    console.error('잘못된 경로로 요청');

    //잘못된 경로로 요청시 메인으로 리다이렉트
    return <Navigate to="/webtoon" replace></Navigate>;
  } else {
    return <div> {day}요일 DailyWebtoons</div>;
  }
}
