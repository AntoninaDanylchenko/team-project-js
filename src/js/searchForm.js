import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';
import { createResultMarkup } from './components/createMarkupGalleryCards';

refs.searchFormEl.addEventListener('submit', onBtnSearchClick);

function onBtnSearchClick(e) {
  e.preventDefault();
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

    return createResultMarkup(answer.results);
  } catch (error) {
    console.log(error.message);
  }
}
