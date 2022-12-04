import { refs } from './references/references';
import templateModalCard from '../templates/templateModalCard.hbs';
import { drawMyWatched } from './libraryMain';
import {drawMyQueue} from './libraryMain';

refs.galleryLibraryEl.addEventListener('click', onModalOpenFilmLibrary);
refs.btnAddToWatch.addEventListener('click', libraryButtons);
refs.btnAddToaddToQueue.addEventListener('click', libraryButtons);

let idFilm = '';
let filmInLocalWatched = '';
let filmInLocalQueue = '';
let filmRemoved = '';

const beforeRemove = {
  // watchedBeforeRemove: NaN,
  // queueBeforeRemove: NaN,
  // filmRemovedFromWatched: NaN,
  // filmRemovedFromQueued: NaN,
  filmOpened: NaN,

  // saveWached(array) {
  //   this.watchedBeforeRemove = array;
  // },
  // saveQueue(array) {
  //   this.queueBeforeRemove = array;
  // },
  // saveFilmWatched(obj) {
  //   this.filmRemovedFromWatched = obj;
  // },
  // saveFilmQueued(obj) {
  //   this.filmRemovedFromQueued = obj;
  // },
  saveOpened(obj) {
    this.filmOpened= obj;
  }
}


 function onModalOpenFilmLibrary(e) {
    e.preventDefault();

    refs.filmCardEl.innerHTML = '';
    //   refs.modalLoader.classList.add('loader-lines');
    document.body.classList.add('body-is-hidden');

    refs.modalFilmBtnClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscBtnPress);
    refs.modalBackdrop.addEventListener('click', onBackdropClick);

    const idClickFilm = e.target.id;
    getInfoFromLocalStorage(idClickFilm);
    return idClickFilm;

  };


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
      console.log(key, 23, event.target.textContent.trim());
      console.log(idFilm);

    }

    if (event.target.textContent === 'Remove Film') {

        if (event.target.classList.value === 'film-card-addToWatched') {
          const filmsInWatchedStorage = JSON.parse(localStorage.getItem('Add-to-watched'));
          console.log(filmsInWatchedStorage);
          const index = filmsInWatchedStorage.findIndex(item => item.id === idFilm);
          console.log(index);
          const removedFilm = filmsInWatchedStorage.splice(index, 1);
          console.log(removedFilm[0]);
          console.log(filmsInWatchedStorage);
          localStorage.setItem('Add-to-watched', JSON.stringify(filmsInWatchedStorage));
          event.target.textContent = 'Add to watched';
          if(refs.btnWatched.classList.contains('active-lbr')) {
            return drawMyWatched();
          }

          if(refs.btnQueue.classList.contains('active-lbr')) {
            return drawMyQueue();
          }
          return;
      }
      if (event.target.classList.value === 'film-card-addToQueue') {
        const filmsInQueuedStorage = JSON.parse(localStorage.getItem('Add-to-queue'));
        const index = filmsInQueuedStorage.findIndex(item => item.id === idFilm);
        const removedFilm = filmsInQueuedStorage.splice(index, 1);
        // console.log(filmsToSave);
        localStorage.setItem('Add-to-queue', JSON.stringify(filmsInQueuedStorage));
        event.target.textContent = 'Add to queue';
        if(refs.btnWatched.classList.contains('active-lbr')) {
          return drawMyWatched();
        }

        if(refs.btnQueue.classList.contains('active-lbr')) {
          return drawMyQueue();
        }
        return;
      }
    }

    if (event.target.textContent.trim() === 'Add to queue') {
      console.log('to queue')
      const film = beforeRemove.filmOpened
      const filmsInQueueStorage = JSON.parse(localStorage.getItem('Add-to-queue'));
      const filmsToSave = [...filmsInQueueStorage, film];
      console.log(filmsInQueueStorage);
      console.log(film);
      console.log(filmsToSave);
      localStorage.setItem('Add-to-queue', JSON.stringify(filmsToSave));
      event.target.textContent = 'Remove Film';
      if(refs.btnWatched.classList.contains('active-lbr')) {
        return drawMyWatched();
      }

      if(refs.btnQueue.classList.contains('active-lbr')) {
        return drawMyQueue();
      }
      return;
    }
    if (event.target.textContent === 'Add to watched') {
      console.log('to watched')
      const film = beforeRemove.filmOpened
      const filmsInWatchedStorage = JSON.parse(localStorage.getItem('Add-to-watched'));
      const filmsToSave = [...filmsInWatchedStorage, film];
      console.log(filmsInWatchedStorage);
      console.log(film);
      console.log(filmsToSave);
      localStorage.setItem('Add-to-watched', JSON.stringify(filmsToSave));
      event.target.textContent = 'Remove Film';
      if(refs.btnWatched.classList.contains('active-lbr')) {
        return drawMyWatched();
      }

      if(refs.btnQueue.classList.contains('active-lbr')) {
        return drawMyQueue();
      }
      return;
    }

  };


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

  function getInfoFromLocalStorage(idfilm) {
  filmInLocalWatched = JSON.parse(localStorage.getItem('Add-to-watched'));
  filmInLocalQueue = JSON.parse(localStorage.getItem('Add-to-queue'));
  idfilm = Number(idfilm);
  idFilm = idfilm;

  //     //  можна переписати окремою функцією
  if (filmInLocalWatched) {
    filmInLocalWatched.find(item => {
      return item.id === idfilm;
    })
      ? (refs.btnAddToWatch.textContent = 'Remove Film')
      : (refs.btnAddToWatch.textContent = 'Add to watched');
  }
  if (filmInLocalQueue) {
    filmInLocalQueue.find(item => {
      return item.id === idfilm;
    })
      ? (refs.btnAddToaddToQueue.textContent = 'Remove Film')
      : (refs.btnAddToaddToQueue.textContent = 'Add to queue');
  }

  refs.modalBackdrop.classList.add('active');
  refs.modalFilm.classList.add('active');

  // console.log(item.id);
  if (filmInLocalWatched) {
    filmInLocalWatched.find(i => {
        if (i.id === idfilm) {
          console.log(i);
          beforeRemove.saveOpened(i);
          return createFilmCardsLibrary(i);
        }
      },
    );
  }
  if (filmInLocalQueue) {
    filmInLocalQueue.find(i => {
      if (i.id === idfilm) {
        console.log(i);
        beforeRemove.saveOpened(i);
        return createFilmCardsLibrary(i);
      }
    });
  }
  // createFilmCardsLibrary(idLibraryObj);
}

``;

function createFilmCardsLibrary(i) {
  const genreArr = i.genres.map(genre => genre.name);
  const genreStr = genreArr.join(', ');
  const genreVoit = i.vote_average.toFixed(1);
  const genrePopularity = Math.round(i.popularity);
  const cardOb = {
    poster_path: i.poster_path,
    title: i.title,
    id: i.id,
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