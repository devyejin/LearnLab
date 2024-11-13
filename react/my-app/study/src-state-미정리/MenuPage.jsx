import React from 'react';
import MenuSection from './MenuSection';
import menuData from './menuData.json';

export default function MenuPage() {
  //데이터에 categories 추가해주기(메타 데이터도 백에서 주는게 좋음)
  // modify
  // type -> categories로 변경
  // categories 메타데이터 , result 로 객체 한번 감싸주기 (depth깊은가 싶었는데 깊은게 아님 )

  //데이터 JSON파일로 분리

  //Todo: 데이터 수정해서 코드도 수정해야함
  // const menuSectionsJSX = menuData.map((category) => {
  //   const { type, menus } = category;
  //   console.log(type);
  //   console.log(menus);
  //   return <MenuSection type={type} menus={menus}></MenuSection>;
  // });

  const { categories, result } = menuData;

  // categories를 순회하며 각 타입별 menus를 넘긴다. (순회할 필요가 없는 것 같은뎅?)
  // categories.map((category) => {
  //   category ===
  // });
  const menuSectionsJSX = result.map((category) => {
    const { type, menus } = category;
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
