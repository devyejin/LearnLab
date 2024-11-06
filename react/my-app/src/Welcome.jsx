import React from "react";

export default function Welcome() {
  let isLoggendIn = true;
  let loginedWords = "환영합니다!";
  let notLoginedWords = "로그인이 필요합니다";
  return (
    <>
      {/* <span> {isLoggendIn ? loginedWords : notLoginedWords}</span> */}
      {isLoggendIn ? (
        <h1>loginedWords</h1>
      ) : (
        <span style={{ color: "red" }}>notLoginedWords</span> 
      )}
    </>
  );
}

//내부에 <span></span> 으로 안하면 랜더링 안되는 이유는?
//안했을 때 {} 객체로 인식되서!
//처음에 아래처럼 작성했었음
{
  /* <span> {isLoggendIn ? {loginedWords} : {notLoginedWords}}</span> */
}

// 둘 다 div태그인 경우 위에같은 방식도 ㅇㅋㅇㅋ 지면, 두 상황에따라 태그,스타일이 달라지는경우
// 안쪽으로 태그를 이동
// return {isLoggendIn ? <h1>loginedWords</h1> : <span>...</span> } 이런식으로
