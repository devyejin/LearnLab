import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router'; //디렉터까지만 갔지만 index.jsx는 대표하는 JSX기 때문에 불러짐

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
