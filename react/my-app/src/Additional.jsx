import { useState } from 'react';

import React from 'react';

export default function Additional() {
  const [twoValue, setTwoValue] = useState({
    x: 0,
    y: 0,
  });
  //twoValue.x = 1  이런식으로 접근하면 내부에 값은 변화하지만 트리거가 동작하지 않아 랜더링이 되지않음
  //setTwoValue({..., x : twoValue+1}) 이런식으로해야함
  return (
    <>
    {/* 잘못된 접근 방법 (상태변수 값 변경) */}
      <button
        onClick={() => {
          twoValue.x + 1; //동작 안함 setter로 해야 함
          console.log(twoValue);
        }}
      >
        + 기능, 작동 안함
      </button>
      {/* 상태변수 값 변경 */}
      <button
        onClick={() => {
          setTwoValue({
            x: twoValue.x + 1,
            y: twoValue.y, //y값이 없더라도 객체를 교체하는거라 이 형태로 써줘야 함
          });
        }}
      >
        + 기능, 동작 
      </button>
    </>

  );
}
