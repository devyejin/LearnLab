import { useState } from 'react';

// input 태그에 색상을 입력하면 색이 변하는 적당한 크기의 div태그를 만드시오.
// input 태그에 색상 입력 -> 특정 변수에 색상 값 저장
// 저장된 값으로 div태그의 색상에 할당

export default function InputColor() {
  const [color, setColor] = useState('white');

  function onChangeColor(e) {
    setColor((prev) => (prev = e.target.value));
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            onChangeColor(e);
          }}
          placeholder="색상 입력"
        ></input>
        <div
          style={{
            width: 200,
            height: 200,
            backgroundColor: color,
            border: 'solid 5px black',
          }}
        >
          색상나올곳!
        </div>
      </div>
    </>
  );
}
