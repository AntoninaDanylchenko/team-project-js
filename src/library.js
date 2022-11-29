import { modal } from './js/components/modal.js';
import { queue } from './js/queue/queue.js';

import { libraryMain } from './js/libraryMain.js';
import { createMarkupLibrary } from './js/components/createMarkupLibrary.js';
import { refs } from './js/references/references.js';
refs.btnQueue.addEventListener('click', drawMyQueue);
function drawMyQueue() {
  // refs.galleryLibraryEl.innerHTML = '';
  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  console.log(filmInLocal);
  const draw = filmInLocal
    .map(
      item => `<div class="container">
    <li class='library-item'>
    <a
      class='library-gallery__item'
      href='#'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div class='card'>

        <img
          src='https://image.tmdb.org/t/p/w500${item.poster_path}'
          class='library-card__img'
          alt='${item.title}'
          id='${item.id}'
        />
        <div class='library-info'>
          <h3 class='library-info__title'>${item.title}</h3>
          <div class='library-wrapper'>
            <p class='library-info__genre'>${item.genre_ids} | ${item.release_date}</p>
            <p class='library-rating is-hidden'>${item.vote_average}</p>
          </div>
        </div>
      </div>
    </a>
  </li>
  </div>`
    )
    .join();
  console.log(draw);

  refs.galleryLibraryEl.innerHTML = draw;
}
drawMyQueue();
refs.btnWatched.addEventListener('click', drawMyWatched);
function drawMyWatched() {
  // refs.galleryLibraryEl.innerHTML = '';

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
  console.log(filmInLocal);
  const draw = filmInLocal
    .map(
      item => `<div class="container">
    <li class='library-item'>
    <a
      class='library-gallery__item'
      href='#'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div class='card'>

        <img
          src='https://image.tmdb.org/t/p/w500${item.poster_path}'
          class='library-card__img'
          alt='${item.title}'
          id='${item.id}'
        />
        <div class='library-info'>
          <h3 class='library-info__title'>${item.title}</h3>
          <div class='library-wrapper'>
            <p class='library-info__genre'>${item.genre_ids} | ${item.release_date}</p>
            <p class='library-rating is-hidden'>${item.vote_average}</p>
          </div>
        </div>
      </div>
    </a>
  </li>
  </div>`
    )
    .join();
  console.log();
  refs.galleryLibraryEl.innerHTML = draw;
}
drawMyWatched();
