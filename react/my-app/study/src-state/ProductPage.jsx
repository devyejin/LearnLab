import React from 'react';
import ProductItem from './ProductItem';

//제품 목록에서 가격이 30000원 이상인 제품을 렌더링
export default function ProductPage() {
  const products = [
    { id: 1, name: '노트북', price: 55000 },
    { id: 2, name: '마우스', price: 15000 },
    { id: 3, name: '키보드', price: 45000 },
    { id: 4, name: '마우스패드', price: 8000 },
    { id: 5, name: '모니터', price: 150000 },
  ];

  //데이터 필터링 작업은 부모에서
  const over3ManProducts = products.filter((product) => {
    const price = product.price;
    return price >= 30000;
  });

  const productJSX = over3ManProducts.map((product) => {
    return <ProductItem product={product}></ProductItem>;
  });

  return (
    <>
      <h3>Products Page</h3>
      <div>{productJSX}</div>;
    </>
  );
}
