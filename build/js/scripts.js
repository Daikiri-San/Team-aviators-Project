'use strict';

var key = '259c02d1f1f516a6001436d2cce8084d';
var baseURL = 'https://api.themoviedb.org/3/movie';
var refs = {
  homePage: document.querySelector('#home-page'),
  detailsPage: document.querySelector('#film-info'),
  myLibList: document.querySelector('#mylib-list'),
  ScrollButton: document.querySelector('.scroll__button')
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

refs.ScrollButton.addEventListener('click', toTop);

function makeHomePage() {
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';
  refs.homePage.insertAdjacentHTML('beforeend', "  <form action=\"#\" class=\"home__search\">\n    <input\n      type=\"\"\n      name=\"query\"\n      placeholder=\"Write movie name and click Enter\"\n      class=\"home__input\"\n    />\n  </form>\n  <ul id=\"mylib-home\" class=\"list home__list\"></ul>\n  <div class=\"home__button\">\n    <button type=\"button\" id=\"button-prev\" class=\"btn home__button-prew\">Prev</button>\n    <button type=\"button\" id=\"button-page\" class=\"btn home__button-page\">1</button>\n    <button type=\"button\" id=\"button-next\" class=\"btn home__button-next\">Next</button>\n  </div>");
  refs.myLibHome = document.querySelector('#mylib-home');
  refs.prevButton = document.querySelector('#button-prev');
  refs.pageButton = document.querySelector('#button-page');
  refs.nextButton = document.querySelector('#button-next');
}

var initialFetch = {
  page: 1,
  fetchPopularFilms: function fetchPopularFilms() {
    return fetch("".concat(baseURL, "/popular?api_key=").concat(key, "&page=").concat(this.page)).then(function (res) {
      return res.json().catch(function (error) {
        return console.log(error);
      });
    });
  },
  incrementPage: function incrementPage() {
    this.page++;
  },
  decrementPage: function decrementPage() {
    this.page--;
  }
};
makeHomePage();

var makeOnePage = function makeOnePage() {
  initialFetch.fetchPopularFilms().then(function (_ref) {
    var results = _ref.results;
    console.log(results);
    results.map(function (result) {
      return refs.myLibHome.insertAdjacentHTML('beforeend', "  <li class=\"home__list-item data-index=\"".concat(result.id, "\"\">\n        <div class=\"home__list--cover\">\n          <div class=\"home__list-rate\">\n            <p>").concat(result.vote_average, "</p>\n          </div>\n          <h2 class=\"home__list-header\">").concat(result.title, " (").concat(result.release_date.slice(0, 4), ")</h2>\n        </div>\n        <img class=\"home__list-item__img\" src=\"http://image.tmdb.org/t/p/w500").concat(result.poster_path, "\" alt=\"poster of ").concat(result.title, "\" />\n      </li>\n    "));
    });
  });
};

makeOnePage();
'use strict';

var changePageNumber = function changePageNumber() {
  var currentPage = initialFetch.page;
  return refs.pageButton.textContent = currentPage;
};

var nextPage = function nextPage() {
  refs.myLibHome.innerHTML = '';
  initialFetch.incrementPage();
  makeOnePage();
  changePageNumber();
};

var prevPage = function prevPage() {
  var currentPage = initialFetch.page;

  if (currentPage <= 1) {
    return;
  }

  refs.myLibHome.innerHTML = '';
  initialFetch.decrementPage();
  makeOnePage();
  changePageNumber();
};

refs.nextButton.addEventListener('click', nextPage);
refs.prevButton.addEventListener('click', prevPage);
"use strict";
"use strict";
"use strict";