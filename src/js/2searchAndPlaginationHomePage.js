'use strict';

let currentPage = +refs.pageButton.textContent;

const incrementPageNumber = () => {
  const nextPageNumber = currentPage++ + 1;
  console.log(nextPageNumber);

  return (refs.pageButton.textContent = nextPageNumber);
};

const decrementPageNumber = () => {
  const nextPageNumber = currentPage-- - 1;
  console.log(nextPageNumber);

  return (refs.pageButton.textContent = nextPageNumber);
};

const nextPage = () => {
  refs.myLibHome.innerHTML = '';
  initialFetch.incrementPage();
  makeOnePage();
  incrementPageNumber();
  // console.dir(+refs.pageButton.textContent);
};

const prevPage = () => {
  if (currentPage <= 1) {
    return;
  }
  refs.myLibHome.innerHTML = '';
  initialFetch.decrementPage();
  makeOnePage();
  decrementPageNumber();
};

refs.nextButton.addEventListener('click', nextPage);
refs.prevButton.addEventListener('click', prevPage);
