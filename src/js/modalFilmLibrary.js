import { refs } from './references/references';
import  templateModalCard  from '../templates/templateModalCard.hbs';

refs.galleryLibraryEl.addEventListener('click', onModalOpenFilmLibrary);
// refs.btnAddToWatch.addEventListener('click', locSetOne);
// refs.btnAddToaddToQueue.addEventListener('click', locSetOne);

function onModalOpenFilmLibrary(e) {
  e.preventDefault();

  refs.filmCardEl.innerHTML = '';
  //   refs.modalLoader.classList.add('loader-lines');
  document.body.classList.add('body-is-hidden');

  refs.modalFilmBtnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscBtnPress);
  refs.modalBackdrop.addEventListener('click', onBackdropClick);

  const idClickFilm = e.target.id;
  console.log(idClickFilm);
  getInfrofromLocalStorage(idClickFilm);
}

function closeModal() {
  refs.modalBackdrop.classList.remove('active');
  refs.modalFilm.classList.remove('active');
  document.body.classList.remove('body-is-hidden');

  refs.modalFilmBtnClose.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscBtnPress);
  refs.modalBackdrop.removeEventListener('click', onBackdropClick);
}

export function onEscBtnPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

export function onBackdropClick(e) {
  if (e.target === refs.modalBackdrop) {
    closeModal();
  }
}

function getInfrofromLocalStorage(idfilm) {
  const filmInLocalAdd = JSON.parse(localStorage.getItem('Add-to-watched'));
  const filmInLocalQu = JSON.parse(localStorage.getItem('Add-to-queue'));
 idfilm = Number(idfilm);
  const idLibraryObj = filmInLocalAdd.find(i => { if(i.id === idfilm ){
     return i ;}}
  );
  console.log(idLibraryObj)
  //     //  можна переписати окремою функцією
  if (filmInLocalAdd) {
    filmInLocalAdd.find(item => {
      return item.id === idfilm;
    })
      ? (refs.btnAddToWatch.textContent = 'Remove Film')
      : (refs.btnAddToWatch.textContent = 'Add to watched');
  }
  if (filmInLocalQu) {
    filmInLocalQu.find(item => {
      return item.id === idfilm;
    })
      ? (refs.btnAddToaddToQueue.textContent = 'Remove Film')
      : (refs.btnAddToaddToQueue.textContent = 'Add to queue');
  }

  refs.modalBackdrop.classList.add('active');
  refs.modalFilm.classList.add('active');

  // console.log(item.id);

    createFilmCardsLibrary(idLibraryObj);
}
``
function createFilmCardsLibrary(i) {
  //   refs.modalLoader.classList.remove('loader-points');
  //   refs.modalLoader.classList.remove('loader-lines');

  const genreArr = i.genres.map(genre => genre.name);
  const genreStr = genreArr.join(', ');
  const genreVoit = i.vote_average.toFixed(1);
  const genrePopularity = Math.round(i.popularity);
  const cardOb = {
    poster_path: i.poster_path,
    title: i.title,
    id: i.id,
    title: i.title,
    name: i.name,
    genreVoit,
    vote_count: i.vote_count,
    genrePopularity,
    original_title: i.original_title,
    genreStr,
    overview: i.overview,
  };
console.log(cardOb);
  return refs.filmCardEl.innerHTML = templateModalCard(cardOb);
}

// // функція що додає фільм в локалсторедж по ключу(текст який вказаний на кнопці), в задежносты на яку кнопку тиснеш
// export async function locSetOne(e) {
//   try {
//     let key = '';
//     if (e.target.classList.value === 'film-card-addToWatched') {
//       key = 'Add-to-watched';
//       console.log(key, 22);
//     }
//     if (e.target.classList.value === 'film-card-addToQueue') {
//       key = 'Add-to-queue';
//       console.log(key, 23);
//     }

//     key = key.trim().split(' ').join('-');

//     let filmToAdd = await findMovies.find();
//     console.log(filmToAdd);
//     console.log(e.target.classList.value);¸