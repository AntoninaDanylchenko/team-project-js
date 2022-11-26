
const ref = {
  querySearch: document.querySelector('.js-query-search'),
  morePopular: document.querySelector('.js-load-popular'),
  movieDetails: document.querySelector('.js-movie-id'),
  trailerDetails: document.querySelector('.js-trailer-id'),
}

const on = {
  stringSearchButtonClick: ref.querySearch.addEventListener('submit', findMovies),
  morePopularButtonClick: ref.morePopular.addEventListener('click', findMovies),
  movieIdClick: ref.movieDetails.addEventListener('click', findMovies),
  trailerIdClick: ref.trailerDetails.addEventListener('click', findMovies),
}

import {findMovies} from './find-movies';
