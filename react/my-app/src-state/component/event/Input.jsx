import React from 'react';
//태그에 입력을 하면 -> 콘솔에 출력
export default function Input() {
  return <input type="chagne" onChange={(e) => handleChange(e)}></input>;
}

function handleChange(e) {
  const value = e.target.value;
  console.log(value);
}
