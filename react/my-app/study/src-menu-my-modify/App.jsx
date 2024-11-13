import React from 'react';
import NamePage from './NamePage';
import UserPage from './UserPage';
import ProductPage from './ProductPage';
import DogPage from './DogPage';
import ButtonContainer from './ButtonContainer';
import MenuPage from './MenuPage';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';

//App에서는 컴포넌트 렌더링만 해주자
export default function App() {
  return (
    <>
      <NamePage></NamePage>
      <UserPage></UserPage>
      <ProductPage></ProductPage>
      <DogPage></DogPage>
      <ButtonContainer></ButtonContainer>
      {/* <MenuItem></MenuItem> */}
      {/* <MenuSection></MenuSection> */}
      <MenuPage></MenuPage>
    </>
  );
}
