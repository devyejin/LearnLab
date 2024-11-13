import React from 'react';

export default function Button() {
  return (
    <button
      onClick={(e) => {
        alert('클릭 ');
      }}
    >
      버튼
    </button>
  );
}
