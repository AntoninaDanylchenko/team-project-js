import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';
import { createResultMarkup } from './components/createMarkupGalleryCards';
import { pagination, searchingMorePopularity } from './main.js';
import { container } from './main.js';

refs.searchFormEl.addEventListener('submit', onBtnSearchClick);
refs.searchFormEl.addEventListener('input', onInputSearch);

function onBtnSearchClick(e) {
  e.preventDefault();
  container.classList.add('pagination-invisible');
  refs.loader.classList.add('loader-kolo');
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
    if (answer.results.length) {
      pagination.setTotalItems(answer.total_results); //YVG задає кількість картинок, щоб була вірна загальна кількість сторінок пагінації
      pagination.movePageTo(1); //YVG скидає на першу сторінку
      refs.loader.classList.remove('loader-kolo');
      container.classList.remove('pagination-invisible');
      return createResultMarkup(answer.results);
    }
    refs.searchFormErrorEl.style.opacity = 1;
  } catch (error) {
    refs.searchFormErrorEl.style.opacity = 1;
  }
}
function onInputSearch(e) {
  findMovies.query = e.currentTarget.elements.searchQuery.value;
  if (!findMovies.query) {
    refs.searchFormErrorEl.style.opacity = 0;
    return searchingMorePopularity();
  }
}
