async function getPopularMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    // const path = '/popular';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });
    // const params = 'api_key=eab8c9893e725b2e167187cef66bae3d&language=ko';

    const URL = `${baseURL}${path}?${params}`;
    // const URL =
    //   'https://api.themoviedb.org/3/movie/popular?api_key=eab8c9893e725b2e167187cef66bae3d';

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    const my_movie = {
      title: 'sesac the movie',

      vote_average: 10.0,
      vote_count: 1, // 이상치 제거해야함(절삭평균)
    };

    //데이터 추가
    movies.push(my_movie);

    let maxVoteAvg = 0;
    let maxMovieTitle = 0;
    for (let movie of movies) {
      let avg = movie.vote_average;
      let title = movie.title;
      let voteCount = movie.vote_count;

      //하나의 if문 안에 묶기에는 주제가 다르기 때문에 분리하고 프로세스 순으로 나누는게 좋은 코드
      if (voteCount < 100) continue;

      maxVoteAvg < avg
        ? ((maxVoteAvg = avg), (maxMovieTitle = title))
        : ((maxVoteAvg = maxVoteAvg), (maxMovieTitle = maxMovieTitle));
    }

    // id값이 필요하다?
    for (movie of movies) {
      if (movie.title === maxMovieTitle) {
        console.log(movie);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

getPopularMovies();
