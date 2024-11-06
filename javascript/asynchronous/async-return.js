async function returnTest() {
  return 1;
}

const result = returnTest();
console.log(result); // Promise { 1 }

//sol1) async 함수는 Promise 객체를 반환하기 때문에 then() 메서드를 활용해서 이용
returnTest().then((result) => {
  console.log(result);
});

//sol2) 한번 더 래핑해서 return을 이용한 기능을 수행 (이 방법을 더 많이 사용)
async function main() {
  const result = await returnTest();

  //result를 이용한 작업을 처리
  let test = result + 1;
  console.log(test);
}

main();
