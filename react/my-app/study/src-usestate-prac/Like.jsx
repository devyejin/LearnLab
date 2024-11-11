//좋아요을 누르면 좋아요 취소 로 변하도록,
// 좋아요 취소를 누르면 좋아요를 누르도록 구현하시오.

import { useState } from 'react';
import Button from './Button';

export default function Like() {
  const [isLike, setIsLiKe] = useState(false);

  // !isLike => '좋아요'
  // isLike => '좋아요 취소'
  // 버튼을 클릭 -> isLike 상태 변수 변화
  // setXXX는 이벤트함수 내에서만 사용 가능

  //**강사님**
  // 보여지는건 텍스트지만, 서버가 가지는 값은 '상태값'만임(인지/아닌지), 변수명은 isLike보다는 isLiked가 적합

  //추가) 좋아요 상태에 따른 배경색 변경
  //1. style에 직접 쓰기
  //2. className 활용 하는 법 (3항 연산자로 어떻게 붙이는지 보기)
  //+) class로 관리하기가 귀찮으면 함수로 분리하는것도 가능(유틸리티 함수)

  //1번예제의 Button 컴포넌트 활용해서도 해보기
  return (
    <>
      <button
        // onClick={() => {
        //   setIsLiKe(!isLike);
        // }}
        onClick={() => setIsLiKe((prevIsLike) => !prevIsLike)}
        style={{ backgroundColor: isLike ? 'lightpink' : 'grey' }}
      >
        {isLike ? '좋아요 취소 💔' : '좋아요 ❤️'}
      </button>
      <hr />
      {/* Button 컴포넌트 활용  */}
      <Button
        onButtonClick={() => setIsLiKe((prevIsLike) => !prevIsLike)}
        backgroundColor={isLike ? 'lightpink' : 'grey'}
      >
        {isLike ? '좋아요 취소 💔' : '좋아요 ❤️'}
      </Button>
    </>
  );
}
