//시도별 실시간 측정정보 조회의 서울의 데이터에 대해,
//초 미세먼지 농도가 가장 낮은 stationName

//뻘고민으로 dateTime도 조건을 넣어줘야 한다고 생각했는데, 모든 데이터를 주는게 아니라 최근 실시간만 제공하는것 같음

//1. 시도별 실시간 측정정보 조회의 서울의 데이터를 가져온다
async function fetchDustInfo() {
  const URL =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=VH2dkXEDmSsPb6DYmfd6mjA905k1ZzVHiLBeFeeQMT3n252oUU3hlMZu%2BFp8A%2FGxtFhNpJe1jk6%2F8w3DdBIYJA%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0';
  const fetchResult = await fetch(URL);

  const data = await fetchResult.json();
  const stations = data.response.body.items;

  const stationsPM25Value = [];
  stations.map((station) => {
    const stationName = station.stationName;
    const pm25Value = station.pm25Value;
    const obj = {};

    //Object로 반환했지만 데이터를 순회하는데 이용할거니까 Array에 담아서 return 하는게 더 적합!
    obj[stationName] = pm25Value;
    stationsPM25Value.push(obj);
  });

  console.log(stationsPM25Value);
  return stationsPM25Value;
}

// fetchDustInfo();

//2. 데이터 중 초 미세먼지 농도가 가장 낮은 station을 찾는다.
function getPM25ValueStation(stationsPM25Value) {
  let minPM25Value = Infinity;
  let minPM25ValueStation = null;

  //DustInfo를 Object에 담은 경우
  //Object의 경우 iterable이 아니기 때문에 for...in으로 순회하는 방법은 안됨
  //Object.entries()를 이용하면 key,value 둘 다 반환

  for (let station in stationsPM25Value) {
    let pmValue = stationsPM25Value[station];
  }
  for (let [station, pmValue] of Object.entries(stationsPM25Value)) {
    if (pmValue === '-') break;

    pmValue = parseInt(pmValue);
    // console.log(pmValue);
    if (pmValue < minPM25Value) {
      minPM25Value = pmValue;
      minPM25ValueStation = station;

      // console.log(minPM25Value);
      // console.log(minPM25ValueStation);
    }
  }

  //
  for (let station of stationsPM25Value) {
    console
  }

  // console.log(minPM25Value);
  // console.log(minPM25ValueStation);
}

async function main() {
  // 1. 시도별 실시간 측정정보 조회의 서울의 데이터를 가져온다
  const stationsPM25Value = await fetchDustInfo();

  //2. 데이터 중 초 미세먼지 농도가 가장 낮은 station을 찾는다.
  getPM25ValueStation(stationsPM25Value);
}

main();

//fetchDustInfo() 함수에서 필요한 데이터만 가공해서 {도시명 : 수치} 객체로 반환
//getPM25ValueStation() 함수에서 수치가 가장 낮은 도시명을 찾고 싶어서 for...of로 찾으려고 했지만
//object는 iterable이 아니라서 for...of가 불가능!
