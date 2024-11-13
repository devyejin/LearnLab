import React from 'react';
//클릭하면 count 변수의 값이 올라가는 모습 랜더링
export default function Counter() {
  let count = 0;

  function handleClick() {
    count += 1;
    console.log(count);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
      <button onClick={() => console.log(count)}>count값 출력</button>
    </>
  );
}

// + 버튼 이벤트가 발생했을 때, 랜더링 되는 count 값은 변화가 없지만, num 변수의 값은 증가함
// 즉, react 내부에서의 값은 변화하지만 랜더링은 되지 않는다.
// 모든 변화마다 랜더링 시 과부하가 발생하기 때문! 특별히 변화마다 계속 재랜더링 되길 원한다면 useState로 상태관리를 하자

