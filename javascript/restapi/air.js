// http://apis.data.go.kr/B552584/ArpltnInforInqireSvc

async function getDustData() {
  try {
    const baseURL =
      'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
    const serviceKey =
      'VH2dkXEDmSsPb6DYmfd6mjA905k1ZzVHiLBeFeeQMT3n252oUU3hlMZu%2BFp8A%2FGxtFhNpJe1jk6%2F8w3DdBIYJA%3D%3D';
    const returnType = 'json';
    const numOfRows = '100';
    const pageNo = '1';
    const sidoName = '서울';
    const ver = '1.0';

    //URL을 이렇게 힘들기 보기보다는 '미리보기'이용
    let queryParams =
      '?' +
      encodeURIComponent('serviceKey') +
      '=' +
      serviceKey; /* Service Key*/
    queryParams +=
      '&' +
      encodeURIComponent('returnType') +
      '=' +
      encodeURIComponent('json'); /* */
    queryParams +=
      '&' +
      encodeURIComponent('numOfRows') +
      '=' +
      encodeURIComponent('100'); /* */
    queryParams +=
      '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams +=
      '&' +
      encodeURIComponent('sidoName') +
      '=' +
      encodeURIComponent('서울'); /* */
    queryParams +=
      '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.0'); /* */

    const URL = baseURL + queryParams;
    console.log(URL);

    const response = await fetch(URL);
    const data = await response.json();
    const items = data.response.body.items;
    console.log(items);

    
  } catch (error) {
    console.log(error);
  }
}

getDustData();

// request(
// {
// url: url + queryParams,
// method: 'GET',
// },
// (error, response, body) => {
// console.log(`Status : ${response.statusCode}`);
// console.log(`Header ${JSON.stringify(response.headers)}`);
// console.log(`Response received : ${body}`);
// }
// );
