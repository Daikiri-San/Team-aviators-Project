import refs from './utils/refs';
import { firstTimeHomePage, makeOnePage } from './1InitialHomePage';
import makeLibPageFromWathed from './5libraryPage';

refs.logo.addEventListener('click', firstTimeHomePage);
refs.logo.addEventListener('click', makeOnePage);
refs.homeButton.addEventListener('click', firstTimeHomePage);
refs.homeButton.addEventListener('click', makeOnePage);
refs.myLibButton.addEventListener('click', makeLibPageFromWathed);
