

import { modal } from './js/components/modal.js';
import { queue } from './js/queue/queue.js';

import { libraryMain } from './js/libraryMain.js';
import { createMarkupLibrary } from './js/components/createMarkupLibrary.js';
import { refs } from './js/references/references.js';

import addPhotoLib from './images/lib-photo.jpg'

// let drawQueue = {};
// let drawWatched = {};
refs.btnWatched.addEventListener('click', drawMyWatched);
refs.btnQueue.addEventListener('click', drawMyQueue);

function drawMyQueue(evt) {
    evt.preventDefault();
  refs.galleryLibraryEl.innerHTML = '';

    onQueueBtnActive();

  let draw = [];

  if (!draw || draw.lenght === 0) {
     showPhotoLibrary();
  }

  else {
      const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  draw = filmInLocal
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


  refs.galleryLibraryEl.innerHTML = draw;
}
  }


function drawMyWatched(evt) {
  evt.preventDefault();
  refs.galleryLibraryEl.innerHTML = '';
    onWatchedBtnActive();
 
  let draw = [];
  if (!draw || draw.lenght === 0) {
    showPhotoLibrary();
  }
  else {
      const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
  draw = filmInLocal
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

  refs.galleryLibraryEl.innerHTML = draw ;
  }

}
drawMyWatched();


function onWatchedBtnActive() { 
     refs.btnQueue.classList.remove('active');
  refs.btnWatched.classList.add('active');

}

function onQueueBtnActive() {
    refs.btnWatched.classList.remove('active');
  refs.btnQueue.classList.add('active');
 
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













// import { modal } from './js/components/modal.js';
// import { queue } from './js/queue/queue.js';
// import { libraryMain } from './js/libraryMain.js';
// import { createMarkupLibrary } from './js/components/createMarkupLibrary.js';
// import { refs } from './js/references/references.js';

// refs.btnQueue.addEventListener('click', drawMyQueue);
// function drawMyQueue() {
//   // refs.galleryLibraryEl.innerHTML = '';
//   const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
//   console.log(filmInLocal);
//   const draw = filmInLocal
//     .map(
//       item => `<div class="library-wraper">
//         <a
//       class='library-gallery__item'
//       href='#'
//       target='_blank'
//       rel='noopener noreferrer'
//     >
      
//         <img
//           src='${item.poster_path}'
//           class='library-card__img'
//           alt='${item.title}'
//           id='${item.id}'
//         />
//         <div class='library-info'>
//           <h3 class='library-info__title'>${item.title}</h3>
//           <div class='wrap-library'>
//             <p class='library-info__genre'>${item.genre_id} | ${item.release_date}</p>
//                       <span class ="film-rating">${item.vote_average}</span>
//             </div>
        
//       </div>
//     </a>
  
//   </div>`
//     )

//     .join(' ');

//   // console.log(draw);

//   refs.galleryLibraryEl.innerHTML = draw;
// }
// drawMyQueue();
// refs.btnWatched.addEventListener('click', drawMyWatched);
// function drawMyWatched() {
//   // refs.galleryLibraryEl.innerHTML = '';

//   const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
//   // console.log(filmInLocal);
//   const draw = filmInLocal
//     .map(
//       item => `<div class="library-wraper">
   
//     <a
//       class='library-gallery__item'
//       href='#'
//       target='_blank'
//       rel='noopener noreferrer'
//     >
      

//         <img
//           src='${item.poster_path}'
//           class='library-card__img'
//           alt='${item.title}'
//           id='${item.id}'
//         />
//         <div class='library-info'>
//           <h3 class='library-info__title'>${item.title}</h3>
//           <div class='wrap-library'>
//             <p class='library-info__genre'>${item.genre_id} | ${item.release_date}</p>
//          <span class ="film-rating">${item.vote_average}</span>
//           </div></div>
//     </a>
  
//   </div>`
//     )
//     .join(' ');

//   refs.galleryLibraryEl.innerHTML = draw;
// }
// drawMyWatched();


