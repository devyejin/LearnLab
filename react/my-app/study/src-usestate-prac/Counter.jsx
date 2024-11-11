import Button from './Button';

import { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0); //setter함수는 dom 변화의 trigger로 동작

  function handleClick() {
    setNum(num + 1);
  }

  return (
    <>
      <div>{num}</div>
      <div>
        <Button backgroundColor={'lightblue'} onButtonClick={handleClick}>
          +
        </Button>
        {/* setNum의 인자로 콜백 함수를 넣을 수 있다.(이전 값을 활용해서 새로운 값을 return <=> 함수니까!)
            콜백 함수이므로, 업데이트 함수 또한 별도의 함수로 분리 가능
        */}

        <Button
          backgroundColor={'lightpink'}
          onButtonClick={() => {
            setNum((prevNum) => {
              // console.log(prevNum);
              return prevNum - 1;
            });
          }}
        >
          -
        </Button>
      </div>
    </>
  );
}
