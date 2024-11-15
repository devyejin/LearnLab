import React from 'react';
import axios from 'axios';

/**
 * @todo method 종류별로 함수를 여러개 만들나? 아니면 내부에 method종류를 인자로 받도록?
 * @param url
 * @param reducer
 */

async function fetchData(url, reducer) {
  const response = await axios.get(url);
  const data = response.data;

  reducer(data);
}

export default fetchData;
