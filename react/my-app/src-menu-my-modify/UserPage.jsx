import UserItem from './UserItem';

//2번
//다음 사용자 데이터를 렌더링
export default function UserPage() {
  const users = [
    { id: 1, name: '김철수', age: 25, hobby: '독서' },
    { id: 2, name: '이영희', age: 28, hobby: '요리' },
    { id: 3, name: '박민수', age: 23, hobby: '게임' },
  ];

  // 1번 방식.
  // UserPage에서 완성된 컴포넌트
  // 반환 위치 잘 생각하기! 무엇을 반환하고 싶은지
  // const usersTags = users.map((user) => {
  //   const { id, name, age, hobby } = user;
  //   return (
  //     <li>
  //       <div>id : {id}</div>
  //       <div>name : {name}</div>
  //       <div>age : {age}</div>
  //       <div>hobby : {hobby}</div>
  //     </li>
  //   );
  // });

  
  // 2번 방식.
  // UserPage와 UserItem으로 분리하기 : Page이기 때문에 Container 개념으로 보는게 맞음
  // 그렇다면 UserPage에서는 더 작은 UserItem이라는 자식 컴포넌트를 이용

  const userTags = users.map((user) => {
    // console.log(user); user가 { } 객체니까 props로 전달할 때 주의!
    //user 데이터를 UserItem 컴포넌트에게 전달
    return <UserItem user={user}></UserItem>; // JSX는 값
  });

  return (
    <>
      <h3>Users Page</h3>
      {/* <ul>{usersTags}</ul>  1번 방식 랜더링*/}
      {userTags}
    </>
  );
}
