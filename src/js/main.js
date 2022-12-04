import { findMovies } from './fetch/find-movies';

import { createResultMarkup } from './components/createMarkupGalleryCards';
import { refs } from './references/references';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

let paginationItemsSetup = false;
export async function searchingMorePopularity(page = 1) {
  findMovies.page = page;
  findMovies.query = '';
  findMovies.queryType = 'popular';
  const request = await findMovies.find().then(function (answer) {
    refs.loader.classList.remove('loader-kolo');

    createResultMarkup(answer.results);
    window.scrollTo(0, -400);
    container.classList.remove('pagination-invisible');
    if (!paginationItemsSetup) {
      pagination.setTotalItems(answer.total_results);
      paginationItemsSetup = true;
    }
  });
}

//  ПАГІНАЦІЯ відображення кількості сторінок
searchingMorePopularity();
function adaptViewPagination() {
  if (window.innerWidth <= 768) {
    return {
      totalItems: 500,
      itemsPerPage: 20,
      visiblePages: 3,
      centerAlign: true,
    };
  }
  if (window.innerWidth > 768) {
    return {
      totalItems: 500,
      itemsPerPage: 20,
      visiblePages: 7,
      centerAlign: true,
    };
  }
}
export const container = document.getElementById('tui-pagination-container');
export let pagination = new Pagination(container, adaptViewPagination());

pagination.on('afterMove', event => {
  const currentPage = event.page;

  if (findMovies.queryTypeToPagination === 'popular') {
    searchingMorePopularity(currentPage);
  }
  if (findMovies.queryTypeToPagination === 'search-on-query') {
    onQuerySearchPagination(findMovies.queryToPagination, currentPage);
  }
});

function onQuerySearchPagination(query, page) {
  refs.searchFormErrorEl.style.opacity = 0;
  findMovies.queryType = 'search-on-query';
  findMovies.query = query;
  findMovies.page = page;

  refs.galleryEl.innerHTML = '';

  loadMovie2();
}

async function loadMovie2() {
  try {
    const answer = await findMovies.find();
    if (answer.results.length !== 0) {
      return createResultMarkup(answer.results);
    }

    refs.searchFormErrorEl.style.opacity = 1;
  } catch (error) {
    refs.searchFormErrorEl.style.opacity = 1;
  }
}
