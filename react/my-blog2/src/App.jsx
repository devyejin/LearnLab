import React from "react";
import { RouterProvider} from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <>
    {/* RouterProvider에 어떤 router가 동작하는지를 props로 등록
        router가 어디있는지는 경로 보면 파악 가능              */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}