import { useState } from 'react';

export default function Counter() {
  const [num, setCounter] = useState(0);

  //setter는 컴포넌트 함수 내에서 사용 가능한 것 같음
  function handlePlusClick() {
    // setCounter(num + 1); // 
    //아니야 arrow로 하면 사용 가능
    setCounter(prev => prev+1)
  }

  // function handleMinusClick() {
  //   setCounter(num - 1);
  // }

  return (
    <>
      <div>현재값</div>
      <div>{num}</div>
      <button onClick={handlePlusClick}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </>
  );
}

//state 변수명은 별도로 뺐을 때 사용하고, prev는 arrow에서만 사용가능 

