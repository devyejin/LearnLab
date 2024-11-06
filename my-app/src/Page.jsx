import React from "react";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import ManagerPage from "./ManagerPage";

//userType에 따라 Admin , User 페이지 컴포넌트를 랜더링 (Admin, User 2가지만 있다고 가정)
//중첩 3항 연산자 쓴 이유는 OtherPage에서 manager부분이 생겨서
// export default function Page({ userType }) {
//   return (
//     <>
//       <h1>나의 앱</h1>
//       {/* {userType === "admin" ? <AdminPage></AdminPage> : <UserPage></UserPage>} */}
//       {userType === "admin" ? <AdminPage></AdminPage> : userType === "user" ? <UserPage></UserPage> : <ManagerPage></ManagerPage>}
//     </>
//   );
// }

// 이렇게 JS만 단독으로 사용되는 경우에는 HTML태그 사이에 JS를 넣는게 아니라서 { } 를 사용하지 않는다
// 위 경우에는 HTML태그 내에 JS를 사용하는거라 { } 로 묶어줌
// export default function Page({ userType }) {
//   return (
//       userType === "admin" ? <AdminPage></AdminPage> : <UserPage></UserPage>
//   )}

//JS 코드 영역내에 컴포넌트 작성이되는가했는데 되네

//if문 사용하는 케이스
// export default function Page({ userType }) {
//   if (userType === "admin") {
//     return (
//       <>
//         <h1>나의 앱</h1>
//         <AdminPage></AdminPage>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>나의 앱</h1>
//         <UserPage></UserPage>
//       </>
//     );
//   }
// }

// if문에서 필터링해주니까 else 생략하고도 많이 작성
// export default function Page({ userType }) {
//   if (userType === "admin") {
//     return (
//       <>
//         <h1>나의 앱</h1>
//         <AdminPage></AdminPage>
//       </>
//     );
//   }

//   return (
//     <>
//       <h1>나의 앱</h1>
//       <UserPage></UserPage>
//     </>
//   );

// }

//위에서 똑같은 문장이 반복되는데, 한 줄이 아닌경우 ..........
//공통되는 형태가 있을 때는 return이 하나가 되는게 좋음
//태그 부분만 변경되면되니까 -> 컴포넌트 위치를 변수로 잡는다.
// export default function Page({ userType }) {
//   const renderedPage =
//     userType === "admin" ? <AdminPage></AdminPage> : <UserPage></UserPage>;

//   return (
//     <>
//       <h1>나의 앱</h1>
//       {renderedPage}
//     </>
//   );
// }

//굳이 변수로 안뺴고
export default function Page({ userType }) {
  return (
    <>
      <h1>나의 앱</h1>
      {userType === "admin" ? <AdminPage></AdminPage> : <UserPage></UserPage>}
    </>
  );
}
