import refs from './utils/refs';
import initialFetchAPI from './services/initialFetchApi';

import fetchMovieDetails from './services/fetchMovieDetails';

import { makeOnePage, makeHomePage } from './1InitialHomePage';
import {
  prevPage,
  nextPage,
  changePageNumber,
} from './2searchAndPlaginationHomePage';

function drawMovieDetails({ target }) {
  if (
    !target.classList.contains('home__list--cover') ||
    target.classList.contains('home__list--hover-button')
  ) {
    console.log(target);
    return;
  }
  console.log(target);
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
    </p>`,
    );
    refs.backButton = document.querySelector('#button-back');
    refs.backButton.addEventListener('click', backToHomePage);
    console.log(refs.backButton);
  });

  refs.myLibHome.removeEventListener('click', fetchMovieDetails);
}
//=================================================

// const changePageNumber = () => {
//   const currentPage = initialFetchAPI.page;

//   return (refs.pageButton.textContent = currentPage);
// };

// const nextPage = target => {
//   refs.myLibHome.innerHTML = '';

//   initialFetchAPI.incrementPage();
//   console.log(target);
//   makeOnePage();
//   changePageNumber();
// };

// const prevPage = () => {
//   const currentPage = initialFetchAPI.page;

//   if (currentPage <= 1) {
//     return;
//   }

//   refs.myLibHome.innerHTML = '';

//   initialFetchAPI.decrementPage();

//   makeOnePage();
//   changePageNumber();
// };
//=====================================================

const backToHomePage = () => {
  makeHomePage();
  makeOnePage();
  
  
  refs.nextButton.addEventListener('click', nextPage);
  refs.prevButton.addEventListener('click', prevPage);
};

export default drawMovieDetails;
