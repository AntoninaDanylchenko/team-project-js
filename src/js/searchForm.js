import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';
import { createResultMarkup } from './components/createMarkupGalleryCards';
import debounce from 'lodash.debounce';
import { searchingMorePopularity } from './main.js';

refs.searchFormEl.addEventListener('submit', onBtnSearchClick);
refs.searchFormEl.addEventListener('input', onInputSearch);

function onBtnSearchClick(e) {
  e.preventDefault();
  refs.searchFormErrorEl.style.opacity = 0;
  findMovies.queryType = 'search-on-query';
  findMovies.query = e.currentTarget.elements.searchQuery.value;
  findMovies.page = 1;

  refs.galleryEl.innerHTML = '';

  loadMovie();
}

async function loadMovie() {
  try {
    const answer = await findMovies.find();
    console.log(answer);
    if (answer.results.length !== 0) {
      return createResultMarkup(answer.results);
    }

    refs.searchFormErrorEl.style.opacity = 1;
  } catch (error) {
    console.log(error.message);
    refs.searchFormErrorEl.style.opacity = 1;
  }
}
function onInputSearch(e) {
  findMovies.query = e.currentTarget.elements.searchQuery.value;
  console.log(findMovies.query);
  if (findMovies.query === '') {
    refs.searchFormErrorEl.style.opacity = 0;
    return searchingMorePopularity();
  }
}
