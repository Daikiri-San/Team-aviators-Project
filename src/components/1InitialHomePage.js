'use strict';

import refs from './utils/refs';
import './view/toTopButton';
import homePageMarkup from '../templates/homePageMarkup';
import initialFetchAPI from './services/initialFetchApi';
import drawMovieDetails from './4filmDetailsPage';
import searchFetch from './services/fetchSearchMovies';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {
  nextPage,
  prevPage,
  nextSearchPage,
  prevSearchPage,
  changeSearchPageNumber,
} from './2searchAndPlaginationHomePage';

const debounce = require('lodash.debounce');

const makeHomePage = pageNumber => {
  refs.homePage.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';
  initialFetchAPI.page = pageNumber;
  refs.homePage.insertAdjacentHTML('beforeend', homePageMarkup);
  refs.myLibHome = document.querySelector('#mylib-home');
  refs.prevButton = document.querySelector('#button-prev');
  refs.pageButton = document.querySelector('#button-page');
  refs.nextButton = document.querySelector('#button-next');

  refs.myLibHome.addEventListener('click', drawMovieDetails);
  refs.searchInput = document.querySelector('#search-input');
  refs.searchInput.addEventListener('input', debounce(searchMovies, 500));
};

makeHomePage(1);

const makeOnePage = () => {
  initialFetchAPI
    .fetchPopularFilms()
    .then(({ results }) => {
      results.map(result =>
        refs.myLibHome.insertAdjacentHTML(
          'beforeend',
          `  <li class="home__list-item" data-index="${result.id}">
        <div class="home__list--hover">
        <div class="home__list--hover-star home__list--hover-button">
        <i class="far fa-star"></i>
        <input type="checkbox" id="js-star-checkbox" name="star">
        </div>
        <div class="home__list--hover-like home__list--hover-button">
        <i class="far fa-heart"></i>
        <input type="checkbox" id="js-heart-checkbox" name="heart">
        </div>
        </div>
        <div class="home__list--cover">
          <div class="home__list-rate">
            <p>${result.vote_average}</p>
          </div>
          <h2 class="home__list-header">${
            result.title
          } (${result.release_date.slice(0, 4)})</h2>
        </div>
        <img class="home__list-item__img" src="http://image.tmdb.org/t/p/w500${
          result.poster_path
        }" alt="poster of ${result.title}" />
      </li>
    `,
        ),
      );
    })
    .then(() => {
      refs.nextButton.addEventListener('click', nextPage);
      refs.prevButton.addEventListener('click', prevPage);
    });
};

makeOnePage();

function searchMovies({ target }) {
  const input = target.value;
  if (input === '') {
    return;
  }
  searchFetch.query = input;
  searchFetch.page = 1;
  refs.myLibHome.innerHTML = '';
  changeSearchPageNumber();
  searchFetch
    .fetchSearchMovies()
    .then(({ results }) => {
      if (results.length === 0) {
        return;
      }
      results.map(result =>
        refs.myLibHome.insertAdjacentHTML(
          'beforeend',
          `  <li class="home__list-item" data-index="${result.id}">
        <div class="home__list--hover">
        <div class="home__list--hover-star home__list--hover-button">
        <i class="far fa-star"></i>
        <input type="checkbox" id="js-star-checkbox" name="star">
        </div>
        <div class="home__list--hover-like home__list--hover-button">
        <i class="far fa-heart"></i>
        <input type="checkbox" id="js-heart-checkbox" name="heart">
        </div>
        </div>
        <div class="home__list--cover">
          <div class="home__list-rate">
            <p>${result.vote_average}</p>
          </div>
          <h2 class="home__list-header">${
            result.title
          } (${result.release_date.slice(0, 4)})</h2>
        </div>
        <img class="home__list-item__img" src="http://image.tmdb.org/t/p/w500${
          result.poster_path
        }" alt="poster of ${result.title}" />
      </li>
    `,
        ),
      );
    })
    .then(() => {
      refs.nextButton.addEventListener('click', nextSearchPage);
      refs.prevButton.addEventListener('click', prevSearchPage);
    });
}

export { makeHomePage, makeOnePage, searchMovies };
