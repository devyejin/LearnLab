import React from 'react';

export default function UserItem({ user }) {
  const { id, name, age, hobby } = user;
  return (
    <li>
      <div>id : {id}</div>
      <div>name : {name}</div>
      <div>age : {age}</div>
      <div>hobby : {hobby}</div>
    </li>
  );
}
