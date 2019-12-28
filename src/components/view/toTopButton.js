import refs from '../utils/refs';

function toTop() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;

  const scrollOptions = {
    left: 0,
    top: height,
    behavior: 'smooth',
  };

  document.body.scrollTo(scrollOptions);
}

refs.ScrollButton.addEventListener('click', toTop);
