import { useState } from 'react';

export default function CounterUseState() {
  const [count, setCount] = useState(0); //state함수, setter 함수 / useState()함수에서 반환되는 값을 구조분해 할당

  //1. handleClick 함수
  // function handleClick() {
  //   console.log('click');
  //   setCount(count ** 2);
  // }

  //2. prev 변수 활용
  // function handleClick() {
  //   setCount((prev) => prev + 1);
  //   console.log('count', count);

  //   //함수동작 끝나고 재랜더링되는거 확인용
  //   setTimeout(() => {
  //     console.log('확인용', count);
  //   }, 100000);
  // }

  //3. 익명함수로 전달
  return (
    <>
      <div>{count}</div>
      {/* <button onClick={handleClick}>제곱근</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>제곱근</button>
    </>
  );
}
