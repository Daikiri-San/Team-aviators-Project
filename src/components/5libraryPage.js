import myLibPageMarkup from '../templates/myLibPageMarkup';
import refs from './utils/refs';
import filmListMarkup from '..//templates/filmListMarkup.hbs';
import drawMovieDetails from './4filmDetailsPage';

function makeLibPage() {
  refs.homePage.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';
  refs.myLibList.insertAdjacentHTML('beforeend', myLibPageMarkup);

  refs.watchedButton = document.querySelector('#watched-button');
  refs.queueButton = document.querySelector('#queue-button');
  refs.myLibHome = document.querySelector('#mylib-home');

  makeListOfWatched();

  refs.myLibHome.addEventListener('click', drawMovieDetails);
}

function makeListOfWatched() {
  const fromLocalStorage = JSON.parse(localStorage.getItem('watched'));
  const markup = fromLocalStorage
    .map(result => filmListMarkup(result))
    .join('');
  refs.myLibHome.insertAdjacentHTML('beforeend', markup);
}

export default makeLibPage;
