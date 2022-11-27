// import { refs } from '../references/references';

let libBtnId = '';
// refs.watchBtnEL = document.querySelector('[data-watched]');
// refs.queueBtnEL = document.querySelector('[data-queue]');

refs.watchBtnEL.addEventListener('click', onLibBtnClick);
refs.queueBtnEL.addEventListener('click', onLibBtnClick);

// має відображати фільми із watched
function onLibBtnClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.id === 'queue') {
    refs.watchBtnEL.classList.remove('btn-orange');
    refs.queueBtnEL.classList.add('btn--orange');
  } else {
    refs.queueBtnEL.classList.remove('btn--orange');
    refs.watchBtnEL.classList.add('btn--orange');
  }

  libBtnId = e.target.id;

  addBtnLibWatchQueue(libBtnId);
  localStorage.setItem('Library', libBtnId);
}
//
// if (JSON.parse(localStorage.getItem('localStorageData')) === null) {
//     return;
// }

addBtnLibWatchQueue('watched', true);

function addBtnLibWatchQueue(onBtnClick, isWatched = false) {
  //список фильмів з localStorage
  let results = null;
  if (isWatched) {
    localStorage.setItem('Library', 'watched');
  }
  let localStorageData = JSON.parse(localStorage.getItem('localStorageData'));

  if (onBtnClick === 'watched') {
    if (
      JSON.parse(localStorage.getItem('localStorageData')) === null ||
      JSON.parse(localStorage.getItem('localStorageData')).watchedFilms
        .length === 0
    ) {
      //  потрібно додати функцію, яка додає розмітку
      return;
    }
    results = localStorageData.watchedFilms;
  }

  if (onBtnClick === 'queue') {
    if (
      JSON.parse(localStorage.getItem('localStorageData')) === null ||
      JSON.parse(localStorage.getItem('localStorageData')).queueFilms.length ===
        0
    ) {
      //  потрібно додати функцію, яка додає розмітку
      return;
    }
    results = localStorageData.queueFilms;
  }
}
