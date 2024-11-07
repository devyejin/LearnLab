// //1번 방식
// // function Item({ name, isPacked }) {
// //   if (isPacked) {
// //     return <li className="item">{name} ✅</li>;
// //   } else {
// //     return <li className="item">{name}</li>;
// //   }
// // }

// // //똑가은게 반복되고 있음 + 체크 유무만 차이가 발생함

// //2번 방식
// // function Item({ name, isPacked }) {
// //   return <li className="item">{isPacked ? `${name} ✅` : name}</li>;
// // }

// //3번 방식
// //체크를 보여줄지 말지
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && `✅`}
//     </li>
//   );
// }

// // 완료시 red, 미완료시 blue라면 1,2번 가능 (3번도 가능은 하지만 가독성은 안좋음)
// //1번
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return (
//       <li className="item" style={{ color: "red" }}>
//         {name} ✅
//       </li>
//     );
//   } else {
//     return (
//       <li className="item" style={{ color: "blue" }}>
//         {name}
//       </li>
//     );
//   }
// }

// //1번 if문 방식에서, 아닌경우에 랜더링은 안해주고 싶다면 null을 return해주면 된다
// // null을 명시해주지 않음면 undefined를 return하기 때문에 좋지 않은 방법이다.
// // null은 진짜 값이 없다고 의도적으로 넘긴거니까

// //2번 - 1
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? (
//         <li className="item" style={{ color: "red" }}>
//           {name} ✅
//         </li>
//       ) : (
//         <li className="item" style={{ color: "blue" }}>
//           {name}
//         </li>
//       )}
//     </li>
//   );
// }

// //2-2방식이 더 나음

// //3번 방식은 이 경우에는 비추천

// //똑가은게 반복되고 있음 + 체크 유무만 차이가 발생함

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }
