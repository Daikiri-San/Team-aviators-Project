import refs from './utils/refs';
import initialFetchAPI from './services/initialFetchApi';
import fetchMovieDetails from './services/fetchMovieDetails';
import setLocalStorage from './localStorage/localStorage';
import homePageMarkup from '../templates/homePageMarkup';
import { makeOnePage, searchMovies } from './1InitialHomePage';
import { changePageNumber } from './2searchAndPlaginationHomePage';

const debounce = require('lodash.debounce');

function drawMovieDetails({ target }) {
  if (
    !target.classList.contains('home__list--cover') ||
    target.classList.contains('home__list--hover-button')
  ) {
    return;
  }

  setLocalStorage(event);

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
    <h3 class="film-details-semititle">About</h3>
    <p class="film-details-text">
      ${movie.overview}
    </p>
    <button type="button" id="button-back" class="btn film-details__button-back">Back</button>`,
    );
    refs.backButton = document.querySelector('#button-back');
    refs.backButton.addEventListener('click', backToPrevViewPage);
  });

  refs.myLibHome.removeEventListener('click', fetchMovieDetails);
}

const makePrevViewPage = page => {
  refs.homePage.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';

  initialFetchAPI.page = page;

  refs.homePage.insertAdjacentHTML('beforeend', homePageMarkup);
  refs.myLibHome = document.querySelector('#mylib-home');
  refs.prevButton = document.querySelector('#button-prev');
  refs.pageButton = document.querySelector('#button-page');
  refs.nextButton = document.querySelector('#button-next');

  refs.myLibHome.addEventListener('click', drawMovieDetails);
  refs.searchInput = document.querySelector('#search-input');
  refs.searchInput.addEventListener('input', debounce(searchMovies, 500));
};

const backToPrevViewPage = () => {
  const currentPage = initialFetchAPI.page;
  makePrevViewPage(currentPage);
  makeOnePage();

  changePageNumber();
};

export default drawMovieDetails;
