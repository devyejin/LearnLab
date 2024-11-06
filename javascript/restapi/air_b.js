// 서울의 데이터에 대해, 초 미세먼지 농도가 가장 낮은 stationName을

async function fetchDustInfo() {
  const URL =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=%2BiEaRW7xrORUYANDjKPrnvW9DAAqDJNKv3E4sm3Vwbes8db4rFSa%2FTnEVPEmaCWv1BzeVE2ek9Fv8onYt9obpQ%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0';
  const res = await fetch(URL);
  let data = await res.json();
  data = data.response.body.items;
  // console.log(data);

  //
  let minPm25Value = Infinity;
  let minPm25StationName = null;
  for (ele of data) {
    // minPm25Value = ele.pm25Value < minPm25Value ? ele.pm25Value : minPm25Value;
    if (ele.pm25Value < minPm25Value) {
      minPm25Value = ele.pm25Value;
      minPm25StationName = ele.stationName;
    }
  }

  return minPm25StationName; //반환값을 주면 Promise객체 => 외부에서 호출시 then 처리(비동기 처리)
}

//fetchDustInfo() 메서드가 비동기이기 때문에 Promise객체를 반환함
//then 처리가 필요!
fetchDustInfo().then((result) => console.log(result));

//내부는 정상적으로 비동기 작업을 끝냈지만 함수자체가 비동기이기 때문에 return이 있다면 Promise 반환
//async에서 return을 하고 싶다면, main함수내에서 호출을 해야하는데
//main에서도 또 return을 하면 async....반복되니 잘 처리하기


// async main() {
//   const dsss =    await fetchDustInfo();

// }



main();
