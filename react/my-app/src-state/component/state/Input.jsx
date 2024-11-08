import { useState } from 'react';

// input 태그에 입력을 하면 입력값이 다른 태그에 출력되도록 구현하시오.
// input 태그 입력값 -> 변수에 저장
// 저장된 값을 다른 태그에 출력

export default function Input() {
  const [value, setValue] = useState();

  function onInputChange(e) {
    setValue((prev) => (prev = e.target.value));
  }

  return (
    <>
      <input type="text" onChange={(e) => onInputChange(e)} />
      <span>{value}</span>
    </>
  );
}
