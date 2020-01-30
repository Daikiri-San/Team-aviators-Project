import refs from '../utils/refs';

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

refs.ScrollButton.addEventListener('click', toTop);

export default toTop;
