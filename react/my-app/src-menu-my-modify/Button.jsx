import React from 'react';
//문제에서 주어진 이미지를 봤을 땐 text color가 모두 white니 공통 속성으로 바라봄
//하지만, 유연성을 확장하기 위해 태그에 지정하기보다는 default값으로 지정해서
//커스터마이징 원하는 쪽에는 커스터마이징 해주는 방향으로

//버튼의 text부분은 태그 사이 즉, children 형태라 children으로 받는게 맞는거 같음(구현하는 사람 마음이긴 함)
//children속성으로는 JSX태그를 넘길 때 주로 사용하긴 함
export default function Button({ children, backgroundColor, color = 'white' }) {
  return <button style={{ backgroundColor, color }}>{children}</button>;
}
