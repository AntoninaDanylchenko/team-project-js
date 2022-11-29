import addPhotoLib from '../images/lib-photo.jpg'
const libList = document.querySelector('.library-list')
const btnQueueLib = document.querySelector('.queue-btn')
const btnWatchLib = document.querySelector('.watched-btn')

btnWatchLib.addEventListener('click', showBlankLibrary);


function onWatchedBtnActive() {
    btnWatch.classList.add('active');
    btnWatch.classList.remove('active');
}

function onQueueBtnActive() {
    btnQueue.classList.add('active');
    btnQueue.classList.remove('active');
}


function showBlankLibrary() {
    libList.innerHTML =    `
  <li></li>
  <li>
   <a>
      <p class="library__text">There are no films yet</p>
      <img class="library__picture" src="${addPhotoLib}" alt="blank cinema">
    </a>
    </li>
  `;
}



