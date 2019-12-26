const key = '259c02d1f1f516a6001436d2cce8084d';
const baseURL = 'https://api.themoviedb.org/3/movie';

function fetchMovieDetails(e) {
  return fetch(
    `${baseURL}/${
      e.target.closest('.home__list-item').dataset.index
    }?api_key=${key}`,
  )
    .then(res => res.json())
    .catch(console.log);
}

export default fetchMovieDetails;
