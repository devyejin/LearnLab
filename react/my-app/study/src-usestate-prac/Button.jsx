import React from 'react';

// 1. - 버튼을 누르면 숫자가 감소하고, + 버튼을 누르면 숫자가 증가하는 counter를 구현하시오
//      Button 컴포넌트 활용

//Counter에서 필요한 함수 정의 후 -> Button에서 받도록 작성해나가는 흐름
//onButtonClick이란 이름 대신 handler라고 해도 ㅇㅋ
//핸들러 함수로 익명함수 전달받는것 

//자식이 부모의 변수 값을 변경하면 안된다고 했지만, setter를 통한 변경은 됨(이게 규칙)
//부모가 자식에게 setter를 넘겨줬으니까(특정 형태로 변경하도록 부모가 지정)
export default function Button({ children, backgroundColor, onButtonClick }) {
  return (
    <button onClick={onButtonClick} style={{ backgroundColor }}>
      {children}
    </button>
  );
}
