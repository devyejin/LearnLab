// import React from 'react' <- 러거시라 몰라도 됨

import Profile from './Profile.jsx';
//import Profile2 from ....
//이렇게 다른 이름을 쓸 수는 있지만 App명, 파일명, import시 이름도 셋 다 일치시켜주는게 좋다
//컴포넌트도 하나의 컴포넌트는 하나의 파일로 만드는게 좋음

function Test() {
  return (
    <div>
      <span>ggg</span>
    </div>
  );
}

// 함수앞에 export default 안쓰고 하단에 export default App 해도 됨
export default function App() {
  return (
    <div>
      <div>App</div>
      <Profile></Profile>
      <Profile></Profile>
      <Test></Test>
      <div>lll</div>
    </div>
  );
}
