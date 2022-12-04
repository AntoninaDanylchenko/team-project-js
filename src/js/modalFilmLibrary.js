import { refs } from './references/references';
import templateModalCard from '../templates/templateModalCard.hbs';
import { drawMyWatched } from './libraryMain';
import { drawMyQueue } from './libraryMain';

refs.galleryLibraryEl.addEventListener('click', onModalOpenFilmLibrary);
refs.btnAddToWatch.addEventListener('click', libraryButtons);
refs.btnAddToaddToQueue.addEventListener('click', libraryButtons);

function onModalOpenFilmLibrary(e) {
  e.preventDefault();

  if (e.target.nodeName === 'DIV') {
    return;
  }

  refs.filmCardEl.innerHTML = '';
  document.body.classList.add('body-is-hidden');

  refs.modalFilmBtnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscBtnPress);
  refs.modalBackdrop.addEventListener('click', onBackdropClick);

  const idClickFilm = e.target.id;

  getInfoFromLocalStorage(idClickFilm);

  return idClickFilm;
}

function libraryButtons(event) {
  let key = '';
  if (event.target.classList.value === 'film-card-addToWatched') {
    key = 'Add-to-watched';
    console.log(key, 22);
    // console.dir(event.target.textContent)
    console.log(idFilm);
  }
  if (event.target.classList.value === 'film-card-addToQueue') {
    key = 'Add-to-queue';
    console.log(key, 23, event.target);
    console.log(idFilm);
  }

  if (event.target.textContent === 'Remove Film') {
    if (event.target.classList.value === 'film-card-addToWatched') {
      console.log('www');
      const index = filmInLocalAdd.findIndex(item => item.id === idFilm);
      filmInLocalAdd.splice(index, 1);
      console.log(filmInLocalAdd);
      localStorage.setItem('Add-to-watched', JSON.stringify(filmInLocalAdd));
      drawMyWatched();
      event.target.textContent = 'Add to Watched';
    }
    if (event.target.classList.value === 'film-card-addToQueue') {
      console.log('qqq');
      const index = filmInLocalQu.findIndex(item => item.id === idFilm);
      filmInLocalQu.splice(index, 1);
      console.log(filmInLocalQu);
      localStorage.setItem('Add-to-queue', JSON.stringify(filmInLocalQu));
      drawMyQueue();
      event.target.textContent = 'Add to Queue';
    }
  }

  if (event.target.textContent === 'Add to queue') {
    console.log('to queue');

    const film = filmInLocalAdd.find(film => film.id === idFilm);
    filmInLocalQu = [...filmInLocalQu, film];
    console.log(filmInLocalQu);
    localStorage.setItem('Add-to-queue', JSON.stringify(filmInLocalQu));
    event.target.textContent = 'Remove Film';
  }
  if (event.target.textContent === 'Add to watched') {
    console.log('to watched');
    console.log(filmInLocalAdd);
    const film = filmInLocalQu.find(film => film.id === idFilm);
    filmInLocalAdd = [...filmInLocalAdd, film];
    console.log(filmInLocalAdd);
    localStorage.setItem('Add-to-watched', JSON.stringify(filmInLocalAdd));
    event.target.textContent = 'Remove Film';
  }
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

let idFilm = '';
let filmInLocalAdd = '';
let filmInLocalQu = '';

function getInfoFromLocalStorage(idfilm) {
  filmInLocalAdd = JSON.parse(localStorage.getItem('Add-to-watched'));
  filmInLocalQu = JSON.parse(localStorage.getItem('Add-to-queue'));
  idfilm = Number(idfilm);

  idFilm = idfilm;

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
  filmInLocalAdd.find(i => {
    if (i.id === idfilm) {
      return createFilmCardsLibrary(i);
    }
  });
  filmInLocalQu.find(i => {
    if (i.id === idfilm) {
      return createFilmCardsLibrary(i);
    }
  });
  // createFilmCardsLibrary(idLibraryObj);
}

``;

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
  return (refs.filmCardEl.innerHTML = templateModalCard(cardOb));
}

// функція що додає фільм в локалсторедж по ключу(текст який вказаний на кнопці), в задежносты на яку кнопку тиснеш
//  function removeBtnLibrary(e) {

//     let key = '';
//     if (e.target.classList.value === 'film-card-addToWatched') {
//       key = 'Add-to-watched';
//       console.log(key, 22);
//     }
//     if (e.target.classList.value === 'film-card-addToQueue') {
//       key = 'Add-to-queue';
//       console.log(key, 23);

//     key = key.trim().split(' ').join('-');

//     if (
//       refs.btnAddToWatch.textContent === 'Remove Film' &&
//       e.target.classList.value === 'film-card-addToWatched'
//     ) {
//       const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
//       console.log(filmInLocal);
//       const index = filmInLocal.findIndex(item => item.id === filmToAdd.id);
//       filmInLocal.splice(index);
//       console.log(filmInLocal);
//       localStorage.removeItem('Add-to-watched');
//       localStorage.setItem('Add-to-watched', JSON.stringify(filmInLocal));
//       refs.btnAddToWatch.textContent = 'Add to watched';
//       return;
//     }

//     if (
//       refs.btnAddToaddToQueue.textContent === 'Remove Film' &&
//       e.target.classList.value === 'film-card-addToQueue'
//     ) {
//       const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
//       console.log(filmInLocal, 14);
//       const index = filmInLocal.findIndex(item => item.id === filmToAdd.id);
//       filmInLocal.splice(index, 1);
//       console.log(filmInLocal, 15);

//       localStorage.removeItem('Add-to-queue');
//       localStorage.setItem('Add-to-queue', JSON.stringify(filmInLocal));
//       refs.btnAddToaddToQueue.textContent = 'Add to queue';
//       return;
//     }
//     if (key === 'Add-to-watched') {
//       refs.btnAddToWatch.textContent = 'Remove Film';
//     } else {
//       refs.btnAddToaddToQueue.textContent = 'Remove Film';
//     }

//     const filmInLocal = JSON.parse(localStorage.getItem(key));

//     if (!filmInLocal) {
//       console.log('Clear');
//     } else {
//       filmInLocal.map(i =>
//         i.title ? console.log(i.title) : console.log(i.name)
//       );
//     }

//     findMovies.queryType = 'full-info';

//     if (filmToAdd === 'noAnswer') {
//       filmToAdd = noAnswer;
//     }
//     console.log(filmToAdd.title);
//     let filmArr = [];

//     if (!filmInLocal) {
//       if (!filmToAdd.title) {
//         Notify.failure('Sorry error, try again');

//         return;
//       }
//       filmArr.push(filmToAdd);
//       localStorage.setItem(key, JSON.stringify(filmArr));

//       console.log('localStorage was clear, Film Added');

//       return;
//     } else if (
//       filmInLocal.find(item => item.id === filmToAdd.id) ||
//       !filmToAdd.title
//     ) {
//       Notify.warning('Sorry, you have this film in the Library');
//       return;
//     }

//     filmArr = [...filmInLocal, filmToAdd];
//     filmArr.map(i => (i.title ? console.log(i.title) : console.log(i.name)));
//     localStorage.setItem(key, JSON.stringify(filmArr));
//     return;
//   }
// }
