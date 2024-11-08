import React from 'react';
import Button from './Button';

export default function ButtonContainer() {
  //속성값들은 객체지향적으로 바라보자.
  //color, text별도가 아닌 하나의 버튼 단위로 보는 관점이 맞음
  const buttonData = [
    { backgroundColor: 'blue', text: '확인', color: 'black' },
    { backgroundColor: 'tomato', text: '취소' },
    { backgroundColor: 'gray', text: '보류' },
    { backgroundColor: 'violet', text: '1억년' },
  ];

  const ButtonsJSX = buttonData.map((button) => {
    const { backgroundColor, text, color } = button;
    return (
      <Button backgroundColor={backgroundColor} color={color}>
        {text}
      </Button>
    );
  });

  return (
    <>
      <h3>Button's Party</h3>
      {ButtonsJSX}
    </>
  );
}
