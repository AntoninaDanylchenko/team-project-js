import { refs } from './references/references.js';



refs.btnQueue.addEventListener('click', drawMyQueue);
function drawMyQueue(item) {

  refs.galleryLibraryEl.innerHTML = '';

  refs.btnWatched.classList.remove('active-lbr');
  refs.btnQueue.classList.add('active-lbr');
  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));

  if(!filmInLocal || !filmInLocal.length){
    refs.noCard.classList.remove('visually-hidden');
  return ;
  }

  refs.noCard.classList.add('visually-hidden');

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

  refs.btnQueue.classList.remove('active-lbr');
  refs.btnWatched.classList.add('active-lbr');

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  if(!filmInLocal || !filmInLocal.length){

   refs.noCard.classList.remove('visually-hidden');
    return;
  }
  refs.noCard.classList.add('visually-hidden');
  
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

  refs.galleryLibraryEl.innerHTML = draw;
 
}
drawMyWatched();

