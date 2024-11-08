import React from 'react';
import MenuItem from './MenuItem';
//처음에, {type, name, price } 이렇게 props를 받으려고 했는데, 그러면 MenuItem을 랜더링하기가 힘들것같음
// {type, menus}로 받아야 가능
export default function MenuSection({ type, menus }) {
  // export default function MenuSection() {
  // 테스트용 데이터
  // const type = 'COFFEE';
  // const menus = [
  //   { name: '아메리카노', price: { hot: 5.0, ice: 5.5 } },
  //   { name: '카페라떼', price: { hot: 6.0, ice: 6.5 } },
  //   { name: '바닐라라떼', price: { hot: 6.0, ice: 6.5 } },
  //   { name: '카라멜마끼야또', price: { hot: 6.5, ice: 7.0 } },
  // ];
  console.log(type);
  console.log(menus);

  const menusJSX = menus.map((menu) => {
    const { name, price } = menu;
    return <MenuItem name={name} price={price}></MenuItem>;
  });

  return (
    <div>
      <h2>{type}</h2>
      <hr />
      {menusJSX}
    </div>
  );
}

//만들고 싶은 형태

// <h3>ADE</h3>
// <hr />
// <MenuItem></MenuItem>
// <MenuItem></MenuItem>
