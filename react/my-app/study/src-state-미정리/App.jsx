import React from 'react';
import NamePage from './NamePage';
import UserPage from './UserPage';
import ProductPage from './ProductPage';
import DogPage from './DogPage';
import ButtonContainer from './ButtonContainer';
import MenuPage from './MenuPage';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
// import Button from './component/event/Button';
import Box from './component/event/Box';
// import Input from './component/event/Input';
import Button from './component/event-prop/Button';
// import Counter from './component/state/Counter';
import Input from './component/state/Input';
import InputColor from './component/state/InputColor';
import Counter from './component/state-basic/Counter';
import CounterUseState from './component/state-basic/CounterUseState';

//App에서는 컴포넌트 렌더링만 해주자
export default function App() {
  //버튼을 클릭하면 -> 숫자가 1 늘어난다.
  //숫자는 0부터 시작한다.

  //버튼을 클릭하면 -> 숫자를 출력한다. 정상동작
  return (
    <>
      <CounterUseState></CounterUseState>
      {/* <NamePage></NamePage>
      <UserPage></UserPage>
      <ProductPage></ProductPage>
      <DogPage></DogPage>
      <ButtonContainer></ButtonContainer> */}
      {/* <MenuItem></MenuItem> */}
      {/* <MenuSection></MenuSection> */}
      {/* <MenuPage></MenuPage> */}
      {/* <Button></Button>
      <Box></Box>
      <Input></Input> */}

      {/* <Button onFunc={() => alerMessage('확인 완료')} backgroundColor={'blue'}>
        확인
      </Button>
      <Button onFunc={() => alerMessage('취소 완료')} backgroundColor={'red'}>
        취소
      </Button>
      <Button onFunc={() => alerMessage('보류 완료')} backgroundColor={'gray'}>
        보류
      </Button>
      <Button
        onFunc={() => alerMessage('1억원을 얻었습니다')}
        backgroundColor={'pink'}
      >
        확인
      </Button> */}

      {/* num 변수값은 변화하지만 랜더링은 안됨(새로고침하면 날라감 임시값이라) */}
      {/* <div>{num}</div>
      <button onClick={() => num++}>클릭시 +</button>
      <button onClick={() => console.log(num)}>클릭시 +</button> */}

      {/* 1108 과제 */}
      {/* <Counter></Counter>
      <Input></Input>
      <InputColor></InputColor> */}
      <Counter></Counter>
    </>
  );
}

function alerMessage(message) {
  alert(message);
}
