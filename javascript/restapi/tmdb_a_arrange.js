//함수 정리하는 방법
//실행시킬 main 함수 하나를 놓고, 그 안에 과정을 나열해본다.

const baseURL = 'https://api.themoviedb.org/3/movie/';
const params = new URLSearchParams({
  api_key: '7597ee9dc2d7ad0cf75f546eb381f3be',
  language: 'ko',
});

function makeURL(path) {
  return `${baseURL}${path}?${params}`;
}

/*
  return : 현재 상영중인 영화의 목록
*/
async function getNowPlayingMovies() {
  const URL = makeURL('now_playing');
  const response = await fetch(URL);
  const data = await response.json();

  const movies = data.results;

  return movies;
}

/*
  param : 영화 리스트
  return : vote_average가 가장 높은 영화
*/
function getPopularMovie(movies) {
  const popularMovie = movies.reduce((acc, cur) => {
    let accVoteAverage = acc.vote_average;
    let curVoteAverage = cur.vote_average;

    return accVoteAverage < curVoteAverage ? cur : acc;
  });

  return popularMovie;
}

/*
  param : 영화의 id
  return : 영화의 디테일한 정보
*/
async function getDetailMovie(movieId) {
  const URL = makeURL(movieId);
  const response = await fetch(URL);
  return response.json();
}

/*
  param : 현재 상영중인 영화 목록
  return : 평점 7이상인 영화 목록
*/
function getUpperScoreMovie(movies, score) {
  return movies.filter((movie) => movie.vote_average >= score);
}

async function main() {
  //1.현재 상영중인 영화를 가져온다.
  const movies = await getNowPlayingMovies();

  //2.영화 중 평점이 가장 높은 영화를 가져온다.
  const maxAvgMovie = getPopularMovie(movies);
  console.log(maxAvgMovie);

  //3.영화의 가장 디테일한 정보를 가져온다.
  const detailMovie = await getDetailMovie(maxAvgMovie.id);
  console.log(detailMovie.revenue);

  //c. 현재 상영 중인 영화 중 평점이 7이상인 영화를 나열해라.(짧아서 함수로 안빼도 될 듯)
  // const upperMovies = getUpperScoreMovie(movies, 7);
  const upperMovies = movies.filter((movie) => movie.vote_average >= 7);
  for (let movie of upperMovies) {
    console.log(movie.title, movie.vote_average);
  }

  //d. 현재 상영 중인 영화 중 평점이 가장 높은 영화의 포스터 이미지를 조회하시오.
  const imgPath = detailMovie.poster_path;
  console.log(imgPath);
  const preURL = 'https://image.tmdb.org/t/p/w500/'
  const URL = preURL + imgPath;
}

main();
