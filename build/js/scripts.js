"use strict";

const key = "259c02d1f1f516a6001436d2cce8084d";
const baseURL = "https://api.themoviedb.org/3/movie";
const refs = {
  homePage: document.querySelector("#home-page"),
  detailsPage: document.querySelector("#film-info"),
  myLibList: document.querySelector("#mylib-list"),
  ScrollButton: document.querySelector(".scroll__button")
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

refs.ScrollButton.addEventListener("click", toTop);

function makeHomePage() {
  refs.detailsPage.innerHTML = "";
  refs.myLibList.innerHTML = "";
  refs.homePage.insertAdjacentHTML("beforeend", `  <form action="#" class="home__search">
    <input
      type=""
      name="query"
      placeholder="Write movie name and click Enter"
      class="home__input"
    />
  </form>
  <ul id="mylib-home" class="list home__list"></ul>
  <div class="home__button">
    <button type="button" class="btn home__button-prew">Prev</button>
    <button type="button" class="btn home__button-page">1</button>
    <button type="button" class="btn home__button-next">Next</button>
  </div>`);
  refs.myLibHome = document.querySelector("#mylib-home");
  refs.listItem = document.querySelector(".home__list-item");
}

const initialFetch = {
  page: 1,

  fetchPopularFilms() {
    return fetch(`${baseURL}/popular?api_key=${key}&page=${this.page}`).then(res => res.json().catch(error => console.log(error)));
  },

  incrementPage() {
    this.page += 1;
  },

  decrementPage() {
    this.page -= 1;
  }

};
makeHomePage();
initialFetch.fetchPopularFilms().then(({
  results
}) => {
  console.log(results);
  results.map(result => refs.myLibHome.insertAdjacentHTML("beforeend", `  <li class="home__list-item" data-index="${result.id}">
      <div class="home__list--cover">
        <div class="home__list-rate">
          <p>${result.vote_average}</p>
        </div>
        <h2 class="home__list-header">${result.title} (${result.release_date.slice(0, 4)})</h2>
      </div>
      <img class="home__list-item__img" src="http://image.tmdb.org/t/p/w500${result.poster_path}" alt="poster of ${result.title}" />
    </li>
  `));
});
refs.myLibHome.addEventListener("click", fetchMoovieDetails);

function fetchMoovieDetails(e) {
  return fetch(`https://api.themoviedb.org/3/movie/${e.target.closest(".home__list-item").dataset.index}?api_key=${key}`).then(res => res.json()).then(drawMoovieDetails).catch(console.log);
}

function drawMoovieDetails(moovie) {
  refs.myLibHome.innerHTML = "";
  refs.myLibList.innerHTML = "";
  refs.homePage.innerHTML = "";
  refs.detailsPage.insertAdjacentHTML("afterbegin", `<article class="film-details">
  <img
    class="film-details-image"
    src="http://image.tmdb.org/t/p/w500${moovie.poster_path}"
    alt="${moovie.title}"
  />
  <h2 class="film-details-title">${moovie.title} (${moovie.release_date.slice(0, 4)})</h2>
  <ul class="film-info">
    <li class="film-info-item green-item">
      <div class="film-info-item__note first-note">vote / votes</div>
      <div class="film-info-item__note next-note">${moovie.vote_average}  / ${moovie.vote_count}</div>
    </li>
    <li class="film-info-item white-item">
      <div class="film-info-item__note first-note">popularity</div>
      <div class="film-info-item__note next-note">${moovie.popularity}</div>
    </li>
    <li class="film-info-item green-item">
      <div class="film-info-item__note first-note">original title</div>
      <div class="film-info-item__note next-note">${moovie.original_title}</div>
    </li>
    <li class="film-info-item white-item">
      <div class="film-info-item__note first-note">genre</div>
      <div class="film-info-item__note next-note">
        ${moovie.genres.map(e => e.name).join(", ")}
      </div>
    </li>
  </ul>
  <h3 class="film-details-semititle">About</h3>
  <p class="film-details-text">
    ${moovie.overview}
  </p>
</article>`);
}



