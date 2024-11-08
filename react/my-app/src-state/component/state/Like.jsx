import {useState} from React;
// 좋아요을 누르면 좋아요 취소 로 변하도록,
// 좋아요 취소를 누르면 좋아요를 누르도록 구현하시오.

// 삼항 연산자

//상태값 True => 버튼 text 가 취소
//       False => 버튼 text 좋아요

//
export default function Like() {

  const [isLike, setIsLike] = useState(False)
  // e.target.value에 텍스트 할당  
  function onChangeLike(e) {
    // isLike ? setIsLike(True) : setIsLike(False)
  }

  return (
    <>
      <button onClick={onChangeLike}>좋아요</button>
    </>
  )
}
