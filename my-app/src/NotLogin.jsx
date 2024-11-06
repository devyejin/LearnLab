import React from "react";

export default function NotLogin() {
  let isLoggedIn = false;
  let notLoginedWords = "로그인이 필요합니다.";

  return <span>{!isLoggedIn && notLoginedWords}</span>;

  //if-else 할 때는 null return해줘야함, Java와달리 JS에는 NPE없으니 신경안써도 됨!
  // if(isLoggedIn) {
  //   return null;
  // }else {
  //   return <div>{notLoginedWords}</div>
  // }

  //삼항 연산자를 이용한다면
  // return <div>{isLoggedIn? null : notLoginedWords}</div>
}

