import React from "react";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import ManagerPage from "./ManagerPage";

// export default function OtherPage({ userType }) {
//   {
//     switch (userType) {
//       case "admin":
//         return <AdminPage></AdminPage>;
//         break;
//       case "manager":
//         return <ManagerPage></ManagerPage>;
//         break;
//       case "user":
//         return <UserPage></UserPage>;
//         break;
//     }
//   }
// }

// if문 처리
// export default function OtherPage({ userType }) {
//   if (userType === "admin") {
//     return <AdminPage></AdminPage>;
//   } else if (userType === "manager") {
//     return <ManagerPage></ManagerPage>;
//   } else {
//     return <UserPage></UserPage>;
//   }
// }

//부차적인 요소들이 존재하는 경우
// export default function OtherPage({ userType }) {
//   let renderedPage;

//   if (userType === "admin") {
//     renderedPage = <AdminPage></AdminPage>;
//   } else if (userType === "manager") {
//     renderedPage = <ManagerPage></ManagerPage>;
//   } else {
//     renderedPage = <UserPage></UserPage>;
//   }

//   return (
//     <>
//       <h1>나의 앱</h1>
//       {renderedPage}
//     </>
//   );
// }


//삼항연산자를 이용한 경우
export default function OtherPage({ userType }) {
  const renderedPage = userType === "admin" ?  <AdminPage></AdminPage> : userType === "manager" ? <ManagerPage></ManagerPage> : <UserPage></UserPage>

  return (
    <>
    <h1>나의 앱</h1>
    {renderedPage}
    </>
  )
}

//JS는 Switch Case문보다는 Object를 이용해서 처리하는게 더 선호됨
//하지만 객체를 생성하는 코스트가 발생할 수 있음 ( 예를 들어, UserPage만 사용하는경우라면 다른 페이지들까지 생성됨)
//But, 간단한 페이지라면 이런 문법도 오키도키!
//자바의 경우 Object를 이용하는게 더 코스트가 높아서 switch사용
export default function OtherPage({ userType }) {

  const mappingPage = {
    admin : <AdminPage></AdminPage>,
    manager : <ManagerPage></ManagerPage>,
    user : <UserPage></UserPage>
  };

  const redneredPage = mappingPage[userType]

}