import { findMovies } from './fetch/find-movies';

import { createResultMarkup } from './components/createMarkupGalleryCards';
import { refs } from './references/references';
import { log } from 'handlebars';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import {cssLoader} from './css-loader';
// cssLoader('show', refs.cssLoader)

let paginationItemsSetup = false; //todo: YVG (чи правильна логіка?)
// https://www.themoviedb.org/talk/634aafe8688cd0008135482c//todo: (обговорити разом ліміт)
export async function searchingMorePopularity(page = 1) {
  //todo: обговорити помилку на 495, 489, 485, 479...)
  findMovies.page = page;
  findMovies.query = '';
  findMovies.queryType = 'popular';
  const request = await findMovies.find().then(function (answer) {
    console.log('searching by popularity, page #:', page);
    cssLoader('hide', refs.cssLoader)
    console.log(answer);
    createResultMarkup(answer.results);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
    window.scrollTo(0, -400);
    container.classList.remove('pagination-invisible')
    if (!paginationItemsSetup) {
      //todo: YVG
      console.log('paginationItemsSetup run');
      pagination.setTotalItems(answer.total_results);
      paginationItemsSetup = true;
    }
  });
}
console.log(window.innerWidth);
searchingMorePopularity();
function adaptViewPagination(){
  if (window.innerWidth <= 768) {
    return {
      totalItems: 500,
      itemsPerPage: 20,
      visiblePages: 3,
      centerAlign: true,
    }}
    if (window.innerWidth > 768) {
      return {
        totalItems: 500,
        itemsPerPage: 20,
        visiblePages: 7,
        centerAlign: true,
      }}
}
const container = document.getElementById('tui-pagination-container');
export let pagination = new Pagination(container, adaptViewPagination());


pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
  // console.log(event);

  console.log(`queryToPagination ${findMovies.queryToPagination}`);
  console.log(`queryTypeToPagination ${findMovies.queryTypeToPagination}`);

  if (findMovies.queryTypeToPagination === 'popular') {
    console.log('popular pgination start');
    searchingMorePopularity(currentPage);
  }
  if (findMovies.queryTypeToPagination === 'search-on-query') {
    console.log('query pagination start');
    console.log(`queryToPagination2 ${findMovies.queryToPagination}`);
    console.log(`queryTypeToPagination2 ${findMovies.queryTypeToPagination}`);

    onQuerySearchPagination(findMovies.queryToPagination, currentPage);
    // pagination.movePageTo(1);
  }
});

// ЩЕ ПОТРІБНО - ЗНАЙТИ ЯК "СКИНУТИ" ПАГІНАЦІЮ НА ПЕРШУ СТОРІНКУ
// ТА РОБИТИ ЦЕ ПРИ КОЖНОМУ ЗАПИТІ ЧЕРЕЗ ПОЛЕ ПОШУКУ, У SEARCHFORMS

// НИЖЧЕ - ДЕЯКЕ ДУБЛЮВАННЯ, БУДЕ ПОТРІБНО ЗРОБИТИ РЕФАКТОРІНГ

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


