import refs from './utils/refs';
import { makeHomePage, makeOnePage } from './1InitialHomePage';
import makeLibPage from './5libraryPage';

refs.logo.addEventListener('click', makeHomePage);
refs.logo.addEventListener('click', makeOnePage);
refs.homeButton.addEventListener('click', makeHomePage);
refs.homeButton.addEventListener('click', makeOnePage);
refs.myLibButton.addEventListener('click', makeLibPage);
