'use strict';

import refs from './utils/refs';
import './view/toTopButton';
import homePageMarkup from '../templates/homePageMarkup';
import initialFetchAPI from './services/initialFetchApi';
import drawMovieDetails from './4filmDetailsPage';
import searchFetch from './services/fetchSearchMovies';
import {
  setWatchedLocalStorage,
  setQueueLocalStorage,
} from './localStorage/localStorage';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {
  nextPage,
  prevPage,
  nextSearchPage,
  prevSearchPage,
  changeSearchPageNumber,
} from './2searchAndPlaginationHomePage';
import { changePageNumber } from './2searchAndPlaginationHomePage';
import {
  buttonCheckWatched,
  buttonCheckQueue,
  activeToggle,
} from './view/buttonCheck';

const debounce = require('lodash.debounce');
const Handlebars = require('handlebars');

Handlebars.registerHelper('slice', function(aString) {
  return aString.slice(0, 4);
});

const typeOfQueueForBack = {
  listType: makeOnePage,
  counterType: changePageNumber,
};

function makeHomePage() {
  refs.homePage.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';
  refs.homePage.insertAdjacentHTML('beforeend', homePageMarkup);
  refs.myLibHome = document.querySelector('#mylib-home');
  refs.paginationSection = document.querySelector('.home__button');
  refs.prevButton = document.querySelector('#button-prev');
  refs.pageButton = document.querySelector('#button-page');
  refs.nextButton = document.querySelector('#button-next');

  refs.myLibHome.addEventListener('click', drawMovieDetails);
  refs.searchInput = document.querySelector('#search-input');
  refs.searchInput.addEventListener('input', debounce(firstSearchMovies, 600));
}

makeHomePage();

function firstTimeHomePage() {
  initialFetchAPI.page = 1;
  makeHomePage();
}

function makeOnePage() {
  typeOfQueueForBack.listType = makeOnePage;
  typeOfQueueForBack.counterType = changePageNumber;
  initialFetchAPI
    .fetchPopularFilms()
    .then(({ results }) => {
      results.map(result =>
        refs.myLibHome.insertAdjacentHTML(
          'beforeend',
          `  <li class="home__list-item forJS" data-index="${result.id}">
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
        <div class="home__list--hover">
        <button type="button" class="home__list--hover-star for_button">Watched</button>
        <button type="button" class="home__list--hover-heart for_button">Queue</button>
        </div>
      </li>
    `,
        ),
      );
    })
    .then(() => {
      refs.nextButton.removeEventListener('click', nextSearchPage);
      refs.prevButton.removeEventListener('click', prevSearchPage);
      refs.nextButton.addEventListener('click', nextPage);
      refs.prevButton.addEventListener('click', prevPage);
      refs.myLibHome.addEventListener('click', ToLocalStorage);
      refs.myLibHome.addEventListener('click', activeToggle);
      refs.movieItems = document.querySelectorAll('.home__list-item');
    })
    .then(() => {
      const storageWatchedItems =
        JSON.parse(localStorage.getItem('watched')) || [];
      const storageQueueItems = JSON.parse(localStorage.getItem('queue')) || [];
      const idOfWathcedItems = storageWatchedItems.map(({ id }) => id);
      const idOfQueueItems = storageQueueItems.map(({ id }) => id);
      const arrayOfMovieItems = Array.from(refs.movieItems);

      arrayOfMovieItems.map(el => {
        buttonCheckWatched(el, idOfWathcedItems);
        buttonCheckQueue(el, idOfQueueItems);
        return;
      });
    })
    .catch(console.warn);
}

function ToLocalStorage({ target }) {
  if (target.classList.contains('home__list--hover-star')) {
    setWatchedLocalStorage(event);
  } else if (target.classList.contains('home__list--hover-heart')) {
    setQueueLocalStorage(event);
  } else {
    return;
  }
}

makeOnePage();

function firstSearchMovies() {
  searchFetch.page = 1;
  searchMovies();
  typeOfQueueForBack.listType = searchMovies;
  typeOfQueueForBack.counterType = changeSearchPageNumber;
}

function searchMovies() {
  const input = refs.searchInput.value || searchFetch.query;
  if (input === '') {
    return;
  }
  searchFetch.query = input;
  refs.myLibHome.innerHTML = '';
  searchFetch
    .fetchSearchMovies()
    .then(({ results }) => {
      if (results.length === 0) {
        refs.paginationSection.classList.add('hidden');
        return refs.myLibHome.insertAdjacentHTML(
          'beforeend',
          `<div class="no-list">
          <h2 class="no-list__item">Sorry, no movies found :(</h2>
            <h3 class="no-list__item">Try another name :)</h3>
            </div>`,
        );
      }
      refs.paginationSection.classList.remove('hidden');
      results.map(result =>
        refs.myLibHome.insertAdjacentHTML(
          'beforeend',
          `  <li class="home__list-item forJS" data-index="${result.id}">

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
        <div class="home__list--hover">
        <button type="button" class="home__list--hover-star for_button">Watched</button>
        <button type="button" class="home__list--hover-heart for_button">Queue</button>
        </div>
      </li>
    `,
        ),
      );
    })
    .then(() => {
      refs.nextButton.removeEventListener('click', nextPage);
      refs.prevButton.removeEventListener('click', prevPage);
      refs.nextButton.addEventListener('click', nextSearchPage);
      refs.prevButton.addEventListener('click', prevSearchPage);
      refs.myLibHome.addEventListener('click', ToLocalStorage);
      refs.myLibHome.addEventListener('click', activeToggle);
      refs.movieItems = document.querySelectorAll('.home__list-item');
    })
    .then(() => {
      const storageWatchedItems =
        JSON.parse(localStorage.getItem('watched')) || [];
      const storageQueueItems = JSON.parse(localStorage.getItem('queue')) || [];
      const idOfWathcedItems = storageWatchedItems.map(({ id }) => id);
      const idOfQueueItems = storageQueueItems.map(({ id }) => id);
      const arrayOfMovieItems = Array.from(refs.movieItems);

      arrayOfMovieItems.map(el => {
        buttonCheckWatched(el, idOfWathcedItems);
        buttonCheckQueue(el, idOfQueueItems);
        return;
      });
    })
    .catch(console.warn);
}

export {
  makeOnePage,
  makeHomePage,
  firstTimeHomePage,
  searchMovies,
  ToLocalStorage,
  typeOfQueueForBack,
};
