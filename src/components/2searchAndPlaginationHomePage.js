import refs from './utils/refs';
import initialFetchAPI from './services/initialFetchApi';
import { makeOnePage, searchMovies } from './1InitialHomePage';
import searchFetch from './services/fetchSearchMovies';

const changePageNumber = () => {
  const currentPage = initialFetchAPI.page;

  return (refs.pageButton.textContent = currentPage);
};

const nextPage = target => {
  refs.myLibHome.innerHTML = '';

  initialFetchAPI.incrementPage();
  console.log(target);
  makeOnePage();
  changePageNumber();
};

const prevPage = () => {
  const currentPage = initialFetchAPI.page;

  if (currentPage <= 1) {
    return;
  }

  refs.myLibHome.innerHTML = '';

  initialFetchAPI.decrementPage();

  makeOnePage();
  changePageNumber();
};

const changeSearchPageNumber = () => {
  const currentPage = searchFetch.page;

  return (refs.pageButton.textContent = currentPage);
};

const nextSearchPage = () => {
  refs.myLibHome.innerHTML = '';

  searchFetch.incrementPage();

  searchMovies();
  changeSearchPageNumber();
};

const prevSearchPage = () => {
  const currentPage = searchFetch.page;

  if (currentPage <= 1) {
    return;
  }

  refs.myLibHome.innerHTML = '';

  searchFetch.decrementPage();

  searchMovies();
  changeSearchPageNumber();
};

export {
  nextPage,
  prevPage,
  changePageNumber,
  nextSearchPage,
  prevSearchPage,
  changeSearchPageNumber,
};
