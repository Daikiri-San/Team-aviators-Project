import fetchMovieDetails from '../services/fetchMovieDetails';

function setLocalStorage(e) {
  const newItem = {};
  fetchMovieDetails(e).then(data => {
    newItem.id = data.id;
    newItem.poster = `http://image.tmdb.org/t/p/w500${data.poster_path}`;
    newItem.title = data.title;
    newItem.votes = data.vote_average;
    newItem.year = data.release_date.slice(0, 4);
    const oldItems = JSON.parse(localStorage.getItem('watched')) || [];
    oldItems.push(newItem);
    localStorage.setItem('watched', JSON.stringify(oldItems));
  });
}

export default setLocalStorage;
