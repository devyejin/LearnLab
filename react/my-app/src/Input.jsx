// 2. input 태그에 입력을 하면 입력값이 다른 태그에 출력되도록 구현하시오.
// 3. input 태그에 색상을 입력하면 색이 변하는 적당한 크기의 div태그를 만드시오.
// 이벤트 -> 입력 이벤트 => 입력값
// 수행 동작은 다름 => 다른 태그에 텍스트를 출력, 다른 태그에 색상을 입력
import React from 'react';

export default function Input({ onInputChange, value, placeholder }) {
  //넘어온 onInputChange 함수는 setXXX 함수
  //즉, setColor("pink") 이렇게 호출하는것!
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
