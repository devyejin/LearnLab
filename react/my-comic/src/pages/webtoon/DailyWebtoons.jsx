import React from 'react';
//동적 라우팅하기 위한 훅
import { useParams } from 'react-router-dom';

export default function DailyWebtoons() {
  const { day } = useParams();
  console.log(day);
  return <div> {day}요일 DailyWebtoons</div>;
}
