import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  const value = import.meta.env;
  console.log(value);
  console.log(value.VITE_SECRET_VALUE);
  return (
    <>
      {/* Provider에게 store 전달 */}
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}
