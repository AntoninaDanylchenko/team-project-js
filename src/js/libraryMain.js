import { Notify } from 'notiflix';
import { refs } from './references/references.js';



// function clearTextOfLocalStorage(){
//   const filmInLocalQ = JSON.parse(localStorage.getItem('Add-to-queue'));
//   const filmInLocalW = JSON.parse(localStorage.getItem('Add-to-watched'));
//     if(filmInLocalQ || !filmInLocalQ.length){
//       refs.galleryLibraryEl.innerHTML = "You didn`t add any film";

//     }
//    if(!filmInLocalW || !filmInLocalW.length){
//     refs.galleryLibraryEl.innerHTML = "You didn`t add any film";

//     }
//    }
// clearTextOfLocalStorage();

function noCardinLocalStorage(){
  // if(refs.galleryLibraryEl.closest('.no-card')){
  //   Notify.failure("exit ");
  //   return;
  // }
// const noCardLibraryInfo = document.createElement('h2');
// noCardLibraryInfo.textContent = "You didn`t add any film to  this position";
// noCardLibraryInfo.classList.add("no-card");

// refs.noCard.append(noCardLibraryInfo);
refs.noCard.classList.remove('visually-hidden');

}





refs.btnQueue.addEventListener('click', drawMyQueue);
function drawMyQueue(item) {
  refs.galleryLibraryEl.innerHTML = '';
  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));

  if(!filmInLocal || !filmInLocal.length){
    refs.noCard.classList.remove('visually-hidden');
  return ;
  }
// Notify.warning("add hidden ")
  refs.noCard.classList.add('visually-hidden');


  // console.log(filmInLocal);
  // console.log(filmInLocal[0].genres);
  const draw = filmInLocal
    .map(item => {
      const genreFilmsArr = item.genres.map(genre => genre.name);
      const genreFilmStr = genreFilmsArr.join(', ');
      const genreVoit = item.vote_average.toFixed(1);
      const year = item.release_date.slice(0, 4);
      console.log(genreFilmStr, genreVoit);
      console.log(year);
      return `<div class="library-wraper">
            <a
          class='library-gallery__item'
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >

            <img
              src='${item.poster_path}'
              class='library-card__img'
              alt='${item.title}'
              id='${item.id}'
            />
            <div class='library-info'>
              <h3 class='library-info__title'>${item.title}</h3>
              <div class='wrap-library'>
                <p class='library-info__genre'>${genreFilmStr} | ${year}</p>
                          <span class ="film-rating">${genreVoit}</span>
                </div>

          </div>
        </a>

      </div>`;
    })
    .join(' ');
  // console.log(draw);
  refs.galleryLibraryEl.innerHTML = draw;
  //   drawMyQueue();
}

refs.btnWatched.addEventListener('click', drawMyWatched);
function drawMyWatched(item) {
  refs.galleryLibraryEl.innerHTML = '';

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  if(!filmInLocal || !filmInLocal.length){

   refs.noCard.classList.remove('visually-hidden');
    return;
  }
  // Notify.warning('add hidden')
  refs.noCard.classList.add('visually-hidden');
  

  // console.log(filmInLocal);
  // console.log(filmInLocal[0].genres);
  const draw = filmInLocal
    .map(item => {
      const genreFilmsArr = item.genres.map(genre => genre.name);
      const genreFilmStr = genreFilmsArr.join(', ');
      const genreVoit = item.vote_average.toFixed(1);
      const year = item.release_date.slice(0, 4);
      console.log(genreFilmStr, genreVoit);
      console.log(year);
      return `<div class="library-wraper">
            <a
          class='library-gallery__item'
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >

            <img
              src='${item.poster_path}'
              class='library-card__img'
              alt='${item.title}'
              id='${item.id}'
            />
            <div class='library-info'>
              <h3 class='library-info__title'>${item.title}</h3>
              <div class='wrap-library'>
                <p class='library-info__genre'>${genreFilmStr} | ${year}</p>
                          <span class ="film-rating">${genreVoit}</span>
                </div>

          </div>
        </a>

      </div>`;
    })
    .join(' ');
  // console.log(draw);
  refs.galleryLibraryEl.innerHTML = draw;
 
}
drawMyWatched();

