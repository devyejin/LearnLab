import React from 'react';
//1번
export default function NamePage() {
  const names = ['김철수', '이영희', '박민수', '정지원', '최동욱'];
  const nameTags = names.map((name) => <li>{name}</li>);
  return (
    <>
      <h2>Names Page</h2>
      <ul>{nameTags}</ul>
    </>
  );
}
