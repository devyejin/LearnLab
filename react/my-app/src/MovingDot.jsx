import { useState } from 'react';

//하나의 컴포넌트 내부에 여러 개의 state 사용 가능
export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          // transform: `translate(${position.x}px, ${position.y}px)`,
          left: position.x - 10,
          top: position.y - 10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
