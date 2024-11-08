import React from 'react';

export default function Box() {
  return (
    <div
      style={{ width: 100, height: 100, border: '1px solid black' }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'black';
      }}
      onMouseLeave={(e) => changeBackgroundColor(e.target, 'white')}
    >
      ㅇㅇ
    </div>
  );
}

//dom을 어떻게 데려올까가 가장 고민이었는데 e.target으로 데려옴
//event 객체 안에 type : 이벤트 종류, target : 이벤트를 발생시킨 것
//기본적으로 target을 보다가, 원하는대로 동작 안하면 current target을 본다

//두 함수가 동일한 동작을 하니까 함수로 분리하는 것도 가능
// e.target.style.backgroundColor = "black"; 이정도로 간단한 한 줄이지만
// 함수로 빼서 의미론적으로 의미가 있다면 빼는게 맞다
function changeBackgroundColor(target, color) {
  target.style.backgroundColor = color;
}
