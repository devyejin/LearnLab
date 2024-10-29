//baseURL, params 등 getURL을 굳이 함수로 빼지 않고 전역변수로 놓는것도 좋음
function getUrl(path, lang) {
  const baseURL = 'https://api.themoviedb.org/3/movie/';
  const params = new URLSearchParams({
    api_key: '7597ee9dc2d7ad0cf75f546eb381f3be',
    language: lang,
  });

  return `${baseURL}${path}?${params}`;
}

async function getMovieRevenue(movieId) {
  const URL = getUrl(movieId, 'ko');

  console.log('revenue url', URL);

  const response = await fetch(URL);
  const data = await response.json();

  return data.revenue;
}

// 현재 상영 중인 영화 중 평점(vote_average)이 가장 높은 영화
async function getNowPlaying() {
  try {
    const URL = getUrl('now_playing', 'ko');
    console.log(URL);
    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    console.log(typeof movies); // object

    //reduce를 이용한 방법
    const maxVoteMovie = movies.reduce((acc, curr) => {
      // acc는 Array[0],curr은 Array[1]이 들어감
      let accVoteAverage = acc.vote_average;
      let currVoteAverage = curr.vote_average;

      return accVoteAverage < currVoteAverage ? curr : acc;
    });

    console.log(maxVoteMovie);

    //평점이 가장 높은 영화의 수익
    console.log(`revenue : ${getMovieRevenue(maxVoteMovie.id)}`);
  } catch (error) {
    console.error(console.error());
  }
}

getNowPlaying();
