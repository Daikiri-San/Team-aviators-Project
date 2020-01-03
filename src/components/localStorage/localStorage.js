import fetchMovieDetails from '../services/fetchMovieDetails';
import pnotifyAlert from '../vendors/pnotifyAlert';

function setWatchedLocalStorage(e) {
  const newItem = {};
  fetchMovieDetails(e).then(data => {
    newItem.id = data.id;
    newItem.poster = `http://image.tmdb.org/t/p/w500${data.poster_path}`;
    newItem.title = data.title;
    newItem.votes = data.vote_average;
    newItem.year = data.release_date.slice(0, 4);
    const oldItems = JSON.parse(localStorage.getItem('watched')) || [];

    const idOfOldItems = oldItems.map(({ id }) => id);

    if (idOfOldItems.includes(data.id)) {
      const filteredItems = oldItems.filter(obj => obj.id !== data.id);
      localStorage.setItem('watched', JSON.stringify(filteredItems));
      return pnotifyAlert('removeWatched', data.title);
    }
    oldItems.push(newItem);
    localStorage.setItem('watched', JSON.stringify(oldItems));
    pnotifyAlert('addWatched', data.title);
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
    const idOfOldItems = oldItems.map(({ id }) => id);

    if (idOfOldItems.includes(data.id)) {
      const filteredItems = oldItems.filter(obj => obj.id !== data.id);
      localStorage.setItem('queue', JSON.stringify(filteredItems));
      return pnotifyAlert('removeQueue', data.title);
    }
    oldItems.push(newItem);
    localStorage.setItem('queue', JSON.stringify(oldItems));
    pnotifyAlert('addQueue', data.title);
  });
}

export { setWatchedLocalStorage, setQueueLocalStorage };
