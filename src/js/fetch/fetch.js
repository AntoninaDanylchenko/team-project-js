const ref = {//todo: ВИДАЛИТИ??
  // querySearch: document.querySelector('.js-query-search'),
  // morePopular: document.querySelector('.js-load-popular'),
  // movieDetails: document.querySelector('.js-movie-id'),
  // trailerDetails: document.querySelector('.js-trailer-id'),
};

const on = {
  // stringSearchButtonClick: ref.querySearch.addEventListener(
  //   'submit',
  //   onSearchButtonClick
  // ),
  // morePopularButtonClick: ref.morePopular.addEventListener('click', findMovies),
  // movieIdClick: ref.movieDetails.addEventListener('click', findMovies),
  // trailerIdClick: ref.trailerDetails.addEventListener('click', findMovies),
};

import { findMovies } from './find-movies';

// I.
// ВИКЛИК ФУНКЦІЇ ПО КНОПЦІ ПОШУКУ
function onSearchButtonClick(event) {
  event.preventDefault();
  findMovies.queryType = 'search-on-query';
  const queryString = event.currentTarget.elements.searchQuery.value;
  findMovies.query = queryString; //передаємо строку запиту
  findMovies.page = 1; //оскільки викликаємо з кнопки пошуку - ставимо на показ першу сторінку
  const request = findMovies.find().then(function (answer) {
    console.log('searching by query:', queryString);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}

// КОЛИ ЗА ВЖЕ ВІДОМОЮ СТРОКОЮ ПОШУКУ ТРЕБА ПОКАЗАТИ ІНШУ СТОРІНКУ
function onSearchPerPage(searchString = '', page = '') {
  // event.preventDefault();
  findMovies.queryType = 'on-query-per-page';
  // const queryString = event.currentTarget.elements.searchQuery.value;
  findMovies.query = searchString; //передаємо строку запиту
  findMovies.page = page; //
  const request = findMovies.find().then(function (answer) {
    console.log('searching by queryString and page:', searchString, page);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}
onSearchPerPage('Kill', 2); //запит "Kill", видати другу сторінку.

// II.
// ВИКЛИК ФУНКЦІЇ, КОЛИ ТРЕБА ЗАВАНТАЖИТИ ПОПУЛЯРНІ ВІДЕО

function searchingMorePopular(page = 1) {
  findMovies.page = page;
  findMovies.query = '';
  findMovies.queryType = 'popular';
  const request = findMovies.find().then(function (answer) {
    console.log('searching by popularity, page #:', page);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}

searchingMorePopular(); //якщо першу сторінку
searchingMorePopular(2); //якщо другу сторінку ...

// III.
// ВИКЛИК ФУНКЦІЇ, КОЛИ ТРЕБА ДЕТАЛЬНУ ІНФУ ВІДЕО ПО ID:
function getInfoByID(movieID = 414419) {
  // findMovies.page = page;
  findMovies.query = movieID;
  findMovies.queryType = 'full-info';
  const request = findMovies.find().then(function (answer) {
    console.log('searching full info by ID:', movieID);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}

getInfoByID(414419);

// IV.
// ВИКЛИК ФУНКЦІЇ, КОЛИ ТРЕБА ДЕТАЛЬНУ ІНФУ ЩОДО ТРЕЙЛЕРА ПО ID:
function getVideoByID(movieID = 414419) {
  // findMovies.page = page;
  findMovies.query = movieID;
  findMovies.queryType = 'trailer-info';
  const request = findMovies.find().then(function (answer) {
    console.log('searching trailer info by ID:', movieID);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
    console.log(
      'site:',
      answer.results[0].site,
      'key:',
      answer.results[0].key,
      `youtube link: https://youtu.be/${answer.results[0].key}`
    );
  });
}

getVideoByID(414419);
