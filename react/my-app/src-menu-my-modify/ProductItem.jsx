import React from 'react';

export default function ProductItem({ product }) {
  const { name, price } = product; //상품 id값의 경우 노출시키지 않는게 나음

  return (
    <>
      <div style={{ margin: '1rem' }}>
        <div>상품명 : {name}</div>
        <div>가격 : {price}</div>
      </div>
    </>
  );
}
