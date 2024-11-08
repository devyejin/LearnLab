import React from 'react';

export default function MenuItem({ name, price }) {
  // export default function MenuItem() {
  //테스트용 데이터
  // const name = '아메리카노';
  // const price = { hot: 5.0, ice: 5.5 };
  // 혹은 const price = price: 6.0
  return (
    <li>
      <span>{name}</span>
      {typeof price === 'object' ? (
        <span>
          {price.hot}/{price.ice}
        </span>
      ) : (
        <span>{price}</span>
      )}
    </li>
  );
}

//만들고 싶은 형태

// <div>
//   <span>아메리카노</span>
//   <span>5.0/5.5</span>
// </div>

// <div>
//   <span>레몬에이드</span>
//   <span>6.0</span>
// </div>
