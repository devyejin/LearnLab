function getUrl(path, lang) {
  const baseURL = 'https://api.themoviedb.org/3/movie/';
  const params = new URLSearchParams({
    api_key: '7597ee9dc2d7ad0cf75f546eb381f3be',
    language: lang,
  });

  return `${baseURL}${path}?${params}`;
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

    let maxVoteAvg = 0;
    let maxMovieId = 0;
    let maxMovie = null;
    for (let movie of movies) {
      let voteAvg = movie.vote_average;
      let movieId = movie.id;

      // maxVoteAvg < voteAvg
      //   ? ((maxVoteAvg = voteAvg), (maxMovieId = movieId))
      //   : ((maxVoteAvg = maxVoteAvg), (maxMovieId = maxMovieId));

      //굳이 id값 뽑아내지 않고, 그냥 movie 자체를 계속 덮어씌우는게 로직이 깔끔함
      maxVoteAvg < voteAvg
        ? ((maxVoteAvg = voteAvg), (maxMovie = movie))
        : ((maxVoteAvg = maxVoteAvg), (maxMovie = maxMovie));
    }

    console.log(maxMovie);

    // for (movie of movies) {
    //   if (movie.id === maxMovieId) {
    //     console.log(movie.id);
    //     console.log(movie);

    //     //평점 가장 높은 영화의 수익
    //     console.log(movie.rev);
    //   }
    // }
  } catch (error) {
    console.error(console.error());
  }
}

getNowPlaying();
