import myLibPageMarkup from '../templates/myLibPageMarkup';
import refs from './utils/refs';

function makeLibPage() {
  refs.homePage.innerHTML = '';
  refs.detailsPage.innerHTML = '';
  refs.myLibList.innerHTML = '';
  refs.myLibList.insertAdjacentHTML('beforeend', myLibPageMarkup);

  refs.watchedButton = document.querySelector('#watched-button');
  refs.queueButton = document.querySelector('#queue-button');
  refs.myLibHome = document.querySelector('#mylib-home');

  const fromLocalStorage = JSON.parse(localStorage.getItem('film'));
  console.log(fromLocalStorage);
}

export default makeLibPage;
