function buttonCheckWatched(elem, array) {
  const idOfItem = Number(elem.dataset.index);
  const buttonWatch = elem.lastElementChild.firstElementChild;

  if (array.includes(idOfItem)) {
    buttonWatch.classList.add('inList');
    return;
  }
  buttonWatch.classList.remove('inList');
  return;
}

function buttonCheckQueue(elem, array) {
  const idOfItem = Number(elem.dataset.index);
  const buttonQueue = elem.lastElementChild.lastElementChild;

  if (array.includes(idOfItem)) {
    buttonQueue.classList.add('inList');
    return;
  }
  buttonQueue.classList.remove('inList');
  return;
}

function detailsPageButtonCheckWatch(elem) {
  const idOfItem = Number(elem.dataset.index);
  const storageItems = JSON.parse(localStorage.getItem('queue')) || [];

  const idOfStorageItems = storageItems.map(({ id }) => id);
  const buttonQueue = elem.firstElementChild;

  if (idOfStorageItems.includes(idOfItem)) {
    buttonQueue.classList.add('inList');
    return;
  }
  buttonQueue.classList.remove('inList');
  return;
}

function detailsPageButtonCheckQueue(elem) {
  const idOfItem = Number(elem.dataset.index);
  const storageItems = JSON.parse(localStorage.getItem('queue')) || [];

  const idOfStorageItems = storageItems.map(({ id }) => id);
  const buttonQueue = elem.lastElementChild;

  if (idOfStorageItems.includes(idOfItem)) {
    buttonQueue.classList.add('inList');
    return;
  }
  buttonQueue.classList.remove('inList');
  return;
}

function activeToggle({ target }) {
  if (!target.hasAttribute('type')) {
    return;
  }
  target.classList.toggle('inList');
}

export {
  buttonCheckWatched,
  buttonCheckQueue,
  activeToggle,
  detailsPageButtonCheckWatch,
  detailsPageButtonCheckQueue,
};
