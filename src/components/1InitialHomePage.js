'use strict';

import refs from './utils/refs';
import './view/toTopButton';
import homePageMarkup from '../templates/homePageMarkup';
import initialFetchAPI from './services/initialFetchApi';
import drawMovieDetails from './4filmDetailsPage';

function makeHomePage() {
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';
  refs.homePage.insertAdjacentHTML('beforeend', homePageMarkup);
  refs.myLibHome = document.querySelector('#mylib-home');
  refs.prevButton = document.querySelector('#button-prev');
  refs.pageButton = document.querySelector('#button-page');
  refs.nextButton = document.querySelector('#button-next');

  refs.myLibHome.addEventListener('click', drawMovieDetails);
}

makeHomePage();

const makeOnePage = () => {
  initialFetchAPI.fetchPopularFilms().then(({ results }) => {
    results.map(result =>
      refs.myLibHome.insertAdjacentHTML(
        'beforeend',
        `  <li class="home__list-item" data-index="${result.id}">
        <div class="home__list--hover">
        <div class="home__list--hover-like home__list--hover-button">
        <img class="home__list--hover-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIZ6g-Yv32nCcwP-4464nbYB643PtpR8MrhP4Rq0oPyn81pB-Zg&s" alt="like">
        </div>
        <div class="home__list--hover-star home__list--hover-button">
        <img class="home__list--hover-img" src="../images/films-list/star.png" alt="rate">
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
  });
};

makeOnePage();

export default makeOnePage;
