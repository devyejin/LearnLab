import React from 'react';

export default function Button({
  onFunc,
  backgroundColor,
  children,
  color = 'white',
}) {
  console.log(typeof onFunc);
  return (
    <button onClick={onFunc} style={{ backgroundColor, color }}>
      {children}
    </button>
  );
}

// export default function Button({ props }) {
//   console.log(props);
//   const { onFunc, backgroundColor, color, children } = props;
//   return (
//     <button onClick={onFunc} style={{ backgroundColor, color }}>
//       {children}
//     </button>
//   );
// }
