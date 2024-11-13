import { useState } from 'react'; //useXXX 함수 :  '훅'이라고 함

/**
  + 버튼을 누르면 숫자가 증가되는걸 랜더링해주기

  useState 훅을 사용하기 이전
  - count 지역변수에 값은 증가하지만, 랜더링 되는 count 변수는 변화하지 않는다.
  - 즉, react 내부에서의 값은 변화하지만 react에서 지역변수의 변화까지 감지하며 랜더링해주지는 않는다.(cuz 과부하)
  - react에서 변수를 관리,감지하길 바란다면 useState훅 을 이용해 '상태관리'
*/
export default function CounterBasic() {
  const [count, setCount] = useState(0); // useState함수에서 반환된 값을 구조 분해 할당
  //state 변수, setter 함수

  //1. state변수(count)를 이용하는 방법
  function handleClick() {
    setCount(count + 1); // JS에서 ++ 안됨
    console.log(count);
  }

  // 둘 다 하나의 count state변수를 바라보기 때문에 동기화
  return (
    <>
      <div>state 변수 이용 : {count}</div>
      <button onClick={handleClick}>+</button>
      <hr />

      <div>콜백 함수 이용 : {count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {' '}
        +
      </button>
    </>
  );
}
