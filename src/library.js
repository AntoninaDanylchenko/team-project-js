import { modal } from './js/components/modal.js';
import { queue } from './js/queue/queue.js';

import { libraryMain } from './js/libraryMain.js';
import { createMarkupLibrary } from './js/components/createMarkupLibrary.js';
import { refs } from './js/references/references.js';

import addPhotoLib from './images/lib-photo.jpg'

let drawQueue = {};
let drawWatched = {};
refs.btnWatched.addEventListener('click', renderWatched);
refs.btnQueue.addEventListener('click', renderQueue);

refs.btnWatched.classList.remove('active');
refs.btnQueue.classList.remove('active');


function renderWatched(evt) {
  evt.preventDefault();
  refs.galleryLibraryEl.innerHTML = '';
  onWatchedBtnActive()
  if (!drawWatched || drawWatched.length === 0) {
    showPhotoLibrary();
  }

  else {
    drawMyWatched()
  }
}

function renderQueue(evt) {
  evt.preventDefault();
  refs.galleryLibraryEl.innerHTML = '';
  onQueueBtnActive()
  if (!drawWatched || drawWatched.length === 0) {
    showPhotoLibrary();
  }

  else {
    drawMyQueue()
  }
}









function drawMyQueue() {
  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  console.log(filmInLocal);
  drawQueue = filmInLocal
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
  console.log(drawQueue);

  refs.galleryLibraryEl.innerHTML = drawQueue;
}
// drawMyQueue();

function drawMyWatched() {
  // refs.galleryLibraryEl.innerHTML = '';

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
  console.log(filmInLocal);
  const drawWatched = filmInLocal
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
  refs.galleryLibraryEl.innerHTML = drawWatched ;
}
// drawMyWatched();


function onWatchedBtnActive() { 
  refs.btnWatched.classList.toggle('active');
  // refs.btnWatched.classList.add('active');
}

function onQueueBtnActive() {
  refs.btnQueue.classList.toggle('active');
  // refs.btnQueue.classList.add('active');
}


function showPhotoLibrary() {
  refs.galleryLibraryEl.innerHTML = 
    `<div class="container">
  <li>
   <a>
      <p class="library__text">There are no films yet</p>
      <img class="library__picture" src="${addPhotoLib}" alt="blank cinema">
    </a>
    </li>
 </div> `;
}