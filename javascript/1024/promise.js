const newPromise = new Promise((resolve, reject) => {
  const flag = true;

  if (flag === true) {
    resolve('작업 성공');
  } else {
    reject('작업 실패');
  }
});

//연쇄적으로 넘어감
newPromise
  .then((result) => {
    console.log(result);
    return 'test';
  })
  .then((result) => { // return 해준 'test'를 연쇄적으로 받게 됨
    console.log(result); //test
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('작업 완료');
  });
