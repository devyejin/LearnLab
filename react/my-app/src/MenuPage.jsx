import React from 'react';
import MenuSection from './MenuSection';

export default function MenuPage() {
  //데이터에 categories 추가해주기
  const menuData = [
    {
      type: 'COFFEE',
      menus: [
        { name: '아메리카노', price: { hot: 5.0, ice: 5.5 } },
        { name: '카페라떼', price: { hot: 6.0, ice: 6.5 } },
        { name: '바닐라라떼', price: { hot: 6.0, ice: 6.5 } },
        { name: '카라멜마끼야또', price: { hot: 6.5, ice: 7.0 } },
      ],
    },
    {
      type: 'ADE',
      menus: [
        { name: '레몬에이드', price: 6.0 },
        { name: '자몽에이드', price: 6.0 },
        { name: '유자에이드', price: 6.0 },
      ],
    },
    {
      type: 'TEA',
      menus: [
        { name: '홍차', price: 6.0 },
        { name: '녹차', price: 6.0 },
        { name: '유자차', price: { hot: 6.5, ice: 7.0 } },
      ],
    },
  ];

  const menuSectionsJSX = menuData.map((category) => {
    const { type, menus } = category;
    console.log(type);
    console.log(menus);
    return <MenuSection type={type} menus={menus}></MenuSection>;
  });

  return (
    <>
      <h1>MENU</h1>
      {menuSectionsJSX}
    </>
  );
}

//MenuPage > MenuSection > MenuItem
