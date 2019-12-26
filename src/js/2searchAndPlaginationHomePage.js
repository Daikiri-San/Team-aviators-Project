'use strict';

const changePageNumber = () => {
  const currentPage = initialFetch.page;

  return (refs.pageButton.textContent = currentPage);
};

const nextPage = () => {
  refs.myLibHome.innerHTML = '';

  initialFetch.incrementPage();

  makeOnePage();
  changePageNumber();
};

const prevPage = () => {
  const currentPage = initialFetch.page;

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
