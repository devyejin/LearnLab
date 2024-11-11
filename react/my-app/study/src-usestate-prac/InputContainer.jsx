import Input from './Input';
import { useState } from 'react';

// 2. input 태그에 입력을 하면 입력값이 다른 태그에 출력되도록 구현하시오.
// 3. input 태그에 색상을 입력하면 색이 변하는 적당한 크기의 div태그를 만드시오.
// 이벤트 -> 입력 이벤트 => 입력값
// 수행 동작은 다름 => 다른 태그에 텍스트를 출력, 다른 태그에 색상을 입력

//** 강사님 접근 방식
//무엇을 입력 받는가
// - input태그에 입력한 값 -> 입력값
// - input 태그는 무엇? -> 이벤트가 발생된 element
export default function InputContainer() {
  const [inputText, setInputValue] = useState('');
  const [inputColor, setColorValue] = useState('');

  //추가문제) 텍스트입력전에 '입력하면 동기화됨' 문구 띄우고싶을 때
  //1. 기본값으로 문구를 사용 -> 문제) 지우고나면 그 다음부터 안뜸
  //2. 삼항연산자 이용
  //3. and 연산자 이용
  // 2번과 3번의 차이는 2번은 새로운 태그로 추가되지만 3번은 기존 태그 활용 가능 => True, False이용한 경우에는 사용자 버그(입력) 을 테스트해봐야한다.
  return (
    <>
      <div>
        <Input
          onInputChange={setInputValue}
          value={inputText}
          placeholder="아무거나 입력"
        ></Input>
        {!inputText && <div>여기에 동기화 됨</div>}
        <span>입력 내용: {inputText ? inputText : '여기에 동기화 됨'}</span>
      </div>
      <div>
        <Input
          onInputChange={setColorValue}
          value={inputColor}
          placeholder="색상을 입력"
        ></Input>
        <div
          style={{ backgroundColor: inputColor, width: 100, height: 100 }}
        ></div>
      </div>
    </>
  );
}
