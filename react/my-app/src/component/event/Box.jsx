import React from 'react';

export default function Box() {
  return (
    <div
      style={{ width: 100, height: 100, border: '1px solid black' }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'black';
      }}
      onMouseLeave={(e) => changeBoxColor(e.target, 'white')}
    >
      ㅇㅇ
    </div>
  );
}

//dom을 어떻게 데려올까가 가장 고민이었는데 e.target으로 데려옴



// function handleMouseEnter(e) {
//   //이벤트 객체에 모든 정보가 들어있다.
//   const div = e.target; // e.target으로 dom을 데려올 수 있다.
// e객체안에 type(이벤트 종류) 도 들어있음
// target : 이벤트를 발생시킨 것
// 기본적으로는 target을 보지만, 원하는 동작대로 안하면 current target을 찾아본다
//   console.log(div);
//   e.target.style.backgroundColr = 'black';
// }

// function handleMouseDown(e) {
//   const div = e.target;
//   console.log(div);
//   div.style = {
//     backgroundColr: 'white',
//   };
// }

//두 함수가 비슷하니 함수로 뺀다.
// e.target.style.backgroundColor = "black"; 이정도로 간단한 한 줄이지만
// 함수로 빼서 의미론적으로 의미가 있다면 빼는게 맞다
function changeBoxColor(target, color) {
  target.style.backgroundColor = color;
}
