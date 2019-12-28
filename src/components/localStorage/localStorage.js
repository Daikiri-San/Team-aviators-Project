import fetchMovieDetails from '../services/fetchMovieDetails';

function setWatchedLocalStorage(e) {
  console.log(e);
  const newItem = {};
  fetchMovieDetails(e).then(data => {
    newItem.id = data.id;
    newItem.poster = `http://image.tmdb.org/t/p/w500${data.poster_path}`;
    newItem.title = data.title;
    newItem.votes = data.vote_average;
    newItem.year = data.release_date.slice(0, 4);
    const oldItems = JSON.parse(localStorage.getItem('watched')) || [];

    const idNewElements = oldItems.map(({ id }) => id);

    if (!idNewElements.includes(data.id)) {
      oldItems.push(newItem);
      localStorage.setItem('watched', JSON.stringify(oldItems));
    }
  });
}

function setQueueLocalStorage(e) {
  const newItem = {};
  fetchMovieDetails(e).then(data => {
    newItem.id = data.id;
    newItem.poster = `http://image.tmdb.org/t/p/w500${data.poster_path}`;
    newItem.title = data.title;
    newItem.votes = data.vote_average;
    newItem.year = data.release_date.slice(0, 4);
    const oldItems = JSON.parse(localStorage.getItem('queue')) || [];
    const idNewElements = oldItems.map(({ id }) => id);
    if (idNewElements.includes(data.id)) {
      return;
    }
    oldItems.push(newItem);
    localStorage.setItem('queue', JSON.stringify(oldItems));
  });
}

export { setWatchedLocalStorage, setQueueLocalStorage };
