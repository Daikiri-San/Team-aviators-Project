import refs from './utils/refs';
import initialFetchAPI from './services/initialFetchApi';
import fetchMovieDetails from './services/fetchMovieDetails';
import { makeHomePage, typeOfQueueForBack } from './1InitialHomePage';
import {
  setWatchedLocalStorage,
  setQueueLocalStorage,
} from './localStorage/localStorage';

function drawMovieDetails({ target }) {
  if (
    !target.classList.contains('home__list--cover') ||
    target.classList.contains('home__list--hover-button')
  ) {
    return;
  }

  refs.myLibHome.innerHTML = '';
  refs.myLibList.innerHTML = '';
  refs.homePage.innerHTML = '';
  fetchMovieDetails(event).then(movie => {
    refs.detailsPage.insertAdjacentHTML(
      'afterbegin',
      `<img
      class="film-details-image"
      src="http://image.tmdb.org/t/p/w500${movie.poster_path}"
      alt="${movie.title}"
    />
    <h2 class="film-details-title">${movie.title} (${movie.release_date.slice(
        0,
        4,
      )})</h2>
    <ul class="film-info">
      <li class="film-info-item green-item">
        <div class="film-info-item__note first-note">vote / votes</div>
        <div class="film-info-item__note next-note">${movie.vote_average}  / ${
        movie.vote_count
      }</div>
      </li>
      <li class="film-info-item white-item">
        <div class="film-info-item__note first-note">popularity</div>
        <div class="film-info-item__note next-note">${movie.popularity}</div>
      </li>
      <li class="film-info-item green-item">
        <div class="film-info-item__note first-note">original title</div>
        <div class="film-info-item__note next-note">${
          movie.original_title
        }</div>
      </li>
      <li class="film-info-item white-item">
        <div class="film-info-item__note first-note">genre</div>
        <div class="film-info-item__note next-note">
          ${movie.genres.map(e => e.name).join(', ')}
        </div>
      </li>
    </ul>
    <h3 class="film-details-semititle forJS" >About</h3>
    <p class="film-details-text">
      ${movie.overview}
    </p>
    <div class="forJS film-details--hover" data-index="${movie.id}">
    <button type="button" class="film-details--hover-star for_details-button">Watched</button>
    <button type="button" class="film-details--hover-heart for_details-button">Queue</button>
    </div>
    <button type="button" id="button-back" class="btn film-details__button-back">Back</button>`,
    );
    refs.backButton = document.querySelector('#button-back');
    refs.backButton.addEventListener('click', backToPrevViewPage);
    refs.detailsPage.addEventListener('click', ToLocalStorageFromDetailsPage);
  });

  refs.myLibHome.removeEventListener('click', fetchMovieDetails);
}

const backToPrevViewPage = () => {
  const currentPage = initialFetchAPI.page;
  makeHomePage();
  typeOfQueueForBack.listType();
  console.log(typeOfQueueForBack.listType);
  typeOfQueueForBack.counterType();
};

function ToLocalStorageFromDetailsPage({ target }) {
  if (target.classList.contains('film-details--hover-star')) {
    setWatchedLocalStorage(event);
  } else if (target.classList.contains('film-details--hover-heart')) {
    setQueueLocalStorage(event);
  } else {
    return;
  }
}

export default drawMovieDetails;
