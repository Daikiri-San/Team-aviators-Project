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

  refs.watchedButton.addEventListener('click', makeListOfWatched);
  refs.queueButton.addEventListener('click', makeListOfQueue);
  refs.myLibHome.addEventListener('click', drawMovieDetails);
}

function makeListOfWatched() {
  refs.myLibHome.innerHTML = '';
  refs.queueButton.classList.remove('active-nav-button');
  refs.watchedButton.classList.add('active-nav-button');
  const fromLocalStorage = JSON.parse(localStorage.getItem('watched'));
  if (fromLocalStorage === null) {
    return refs.myLibHome.insertAdjacentHTML(
      'beforeend',
      `<div class="no-list">
      <h2 class="no-list__item">You do not have watched movies :(</h2>
        <h3 class="no-list__item">Add them :)</h3>
        </div>`,
    );
  }
  const markup = fromLocalStorage
    .map(result => filmListMarkup(result))
    .join('');
  refs.myLibHome.insertAdjacentHTML('beforeend', markup);
}

function makeListOfQueue() {
  refs.myLibHome.innerHTML = '';
  refs.watchedButton.classList.remove('active-nav-button');
  refs.queueButton.classList.add('active-nav-button');
  const fromLocalStorage = JSON.parse(localStorage.getItem('queue'));
  if (fromLocalStorage === null) {
    return refs.myLibHome.insertAdjacentHTML(
      'beforeend',
      `<div class="no-list">
      <h2 class="no-list__item">There are no movies in queue list :(</h2>
        <h3 class="no-list__item">Add them :)</h3>
        </div>`,
    );
  }
  const markup = fromLocalStorage
    .map(result => filmListMarkup(result))
    .join('');
  refs.myLibHome.insertAdjacentHTML('beforeend', markup);
}

export default makeLibPage;
