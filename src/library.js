import { modal } from './js/components/modal.js';
import { queue } from './js/queue/queue.js';

import { libraryMain } from './js/libraryMain.js';
import { createMarkupLibrary } from './js/components/createMarkupLibrary.js';




function drawMyQueue() {
  // someEl('.card').innerHTML = '';

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  console.log(filmInLocal);
  const draw = filmInLocal
    .map(
      item => `<div class="container">
    <h4><b>${item.title}</b></h4>
    <p>${item.vote_count}</p>
  </div>`
    )
    .join();
  console.log(draw);


  // someEl('.card').innerHTML = draw;
}
drawMyQueue()

function drawMyWatched() {
  // someEl('.card').innerHTML = '';

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
  console.log(filmInLocal);
  const draw = filmInLocal
    .map(
      item => `<div class="container">
    <h4><b>${item.title}</b></h4>
    <p>${item.vote_count}</p>
  </div>`
    )
    .join();
  console.log(draw);


  // someEl('.card').innerHTML = draw;
}
drawMyWatched()

