async function getNowPlaying() {
  try {
    const URL = 'https://api.themoviedb.org/3/movie/now_playing' + api_key;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    log.error(error);
  }
}
// getMovie();

function getUrl(path, lang) {
  const baseURL = 'https://api.themoviedb.org/3/movie/';
  const params = new URLSearchParams({
    api_key: '7597ee9dc2d7ad0cf75f546eb381f3be',
    language: lang,
  });

  // return baseURL + path + params;
  return `${baseURL}${path}?${params}`;
}

async function getPopularMovie() {
  try {
    // const baseURL = 'https://api.themoviedb.org/3/movie/popular' + api_key;
    // const path = '/popular'
    // const params = 'api_key=7597ee9dc2d7ad0cf75f546eb381f3be'

    const URL = getUrl('popular', 'zh');
    console.log(URL);
    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;
    // console.log(movies);

    for (movie of movies.slice(0, 3)) {
      console.log(`title : ${movie.title}`);
    }
  } catch (error) {
    console.error(`error : ${error}`);
  }
}

getPopularMovie();
