import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { noAnswer } from './components/noAnswer-template.js';
import templateModalCard from '../templates/templateModalCard.hbs';
import templateNoInfoCard from '../templates/templateNoInfoCard.hbs';

refs.galleryEl.addEventListener('click', onModalOpenFilm);
refs.btnAddToWatch.addEventListener('click', locSetOne);
refs.btnAddToaddToQueue.addEventListener('click', locSetOne);

export function onModalOpenFilm(e) {
  e.preventDefault();

  if (e.target.nodeName === 'DIV') {
    return;
  }

  refs.filmCardEl.innerHTML = '';
  refs.loader.classList.add('loader-lines');
  document.body.classList.add('body-is-hidden');

  refs.modalFilmBtnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscBtnPress);
  refs.modalBackdrop.addEventListener('click', onBackdropClick);

  const idClickFilm = e.target.id;
  console.log(idClickFilm);
  findMovies.query = idClickFilm;
  findMovies.queryType = 'full-info';
  getInfoByID();
}

export function closeModal() {
  refs.modalBackdrop.classList.remove('active');
  refs.modalFilm.classList.remove('active');
  document.body.classList.remove('body-is-hidden');

  refs.modalFilmBtnClose.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscBtnPress);
  refs.modalBackdrop.removeEventListener('click', onBackdropClick);

  refs.btnAddToWatch.style.opacity = 1;
  refs.btnAddToWatch.style.cursor = 'pointer';
  refs.btnAddToWatch.disabled = false;

  refs.btnAddToaddToQueue.style.opacity = 1;
  refs.btnAddToaddToQueue.style.cursor = 'pointer';
  refs.btnAddToWatch.disabled = false;
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

async function getInfoByID() {
  try {
    const answer = await findMovies.find();

    const filmInLocalAdd = JSON.parse(localStorage.getItem('Add-to-watched'));
    const filmInLocalQu = JSON.parse(localStorage.getItem('Add-to-queue'));
    //  можна переписати окремою функцією
    if (filmInLocalAdd) {
      filmInLocalAdd.find(item => {
        console.log(item.id);
        return item.id === answer.id;
      })
        ? (refs.btnAddToWatch.textContent = 'Remove Film')
        : (refs.btnAddToWatch.textContent = 'Add to watched');
    }
    if (filmInLocalQu) {
      filmInLocalQu.find(item => {
        console.log(item.id);
        return item.id === answer.id;
      })
        ? (refs.btnAddToaddToQueue.textContent = 'Remove Film')
        : (refs.btnAddToaddToQueue.textContent = 'Add to queue');
    }
    //

    if (answer === 'noAnswer') {
      console.log('noAnswer is there');

      refs.btnAddToWatch.style.opacity = 0;
      refs.btnAddToWatch.style.cursor = 'default';
      refs.btnAddToWatch.disabled = true;

      refs.btnAddToaddToQueue.style.opacity = 0;
      refs.btnAddToaddToQueue.style.cursor = 'default';
      refs.btnAddToWatch.disabled = true;

      // refs.btnAddToWatch.remove();

      refs.modalBackdrop.classList.add('active');
      refs.modalFilm.classList.add('active');

      return noFilmCard(noAnswer);
    }
    refs.modalBackdrop.classList.add('active');
    refs.modalFilm.classList.add('active');

    return createFilmCards(answer);
  } catch (error) {
    console.log(error.message);
  }
}
function noFilmCard(card) {
  // const genreArr = card.genres.map(genre => genre.name);
  // const genreStr = genreArr.join(', ');
  // const genreVoit = card.vote_average.toFixed(1);
  // const genrePopularity = Math.round(card.popularity);

  refs.loader.classList.remove('loader-points');
  refs.loader.classList.remove('loader-lines');
  // const cardS = {
  //   poster_path,
  // };
  console.log(card);
  return (refs.filmCardEl.innerHTML = templateNoInfoCard(card));
}

function createFilmCards(card) {
  const genreArr = card.genres.map(genre => genre.name);
  const genreStr = genreArr.join(', ');
  const genreVoit = card.vote_average.toFixed(1);
  const genrePopularity = Math.round(card.popularity);

  refs.loader.classList.remove('loader-points');
  refs.loader.classList.remove('loader-lines');
  const cardS = {
    poster_path: card.poster_path,
    title: card.title,
    id: card.id,
    title: card.title,
    name: card.name,
    genreVoit,
    vote_count: card.vote_count,
    genrePopularity,
    original_title: card.original_title,
    genreStr,
    overview: card.overview,
  };
  console.log(cardS);
  return (refs.filmCardEl.innerHTML = templateModalCard(cardS));
}

// функція що додає фільм в локалсторедж по ключу(текст який вказаний на кнопці), в задежносты на яку кнопку тиснеш
export async function locSetOne(e) {
  try {
    let key = '';
    if (e.target.classList.value === 'film-card-addToWatched') {
      key = 'Add-to-watched';
      console.log(key, 22);
    }
    if (e.target.classList.value === 'film-card-addToQueue') {
      key = 'Add-to-queue';
      console.log(key, 23);
    }

    key = key.trim().split(' ').join('-');

    let filmToAdd = await findMovies.find();
    console.log(filmToAdd);
    console.log(e.target.classList.value);

    if (
      refs.btnAddToWatch.textContent === 'Remove Film' &&
      e.target.classList.value === 'film-card-addToWatched'
    ) {
      const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
      console.log(filmInLocal);
      const index = filmInLocal.findIndex(item => item.id === filmToAdd.id);
      filmInLocal.splice(index);
      console.log(filmInLocal);
      localStorage.removeItem('Add-to-watched');
      localStorage.setItem('Add-to-watched', JSON.stringify(filmInLocal));
      refs.btnAddToWatch.textContent = 'Add to watched';
      return;
    }

    if (
      refs.btnAddToaddToQueue.textContent === 'Remove Film' &&
      e.target.classList.value === 'film-card-addToQueue'
    ) {
      const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));
      console.log(filmInLocal, 14);
      const index = filmInLocal.findIndex(item => item.id === filmToAdd.id);
      filmInLocal.splice(index, 1);
      console.log(filmInLocal, 15);

      localStorage.removeItem('Add-to-queue');
      localStorage.setItem('Add-to-queue', JSON.stringify(filmInLocal));
      refs.btnAddToaddToQueue.textContent = 'Add to queue';
      return;
    }
    if (key === 'Add-to-watched') {
      refs.btnAddToWatch.textContent = 'Remove Film';
    } else {
      refs.btnAddToaddToQueue.textContent = 'Remove Film';
    }

    const filmInLocal = JSON.parse(localStorage.getItem(key));

    if (!filmInLocal) {
      console.log('Clear');
    } else {
      filmInLocal.map(i =>
        i.title ? console.log(i.title) : console.log(i.name)
      );
    }

    findMovies.queryType = 'full-info';

    if (filmToAdd === 'noAnswer') {
      filmToAdd = noAnswer;
    }
    console.log(filmToAdd.title);
    let filmArr = [];

    if (!filmInLocal) {
      if (!filmToAdd.title) {
        Notify.failure('Sorry error, try again');

        return;
      }
      filmArr.push(filmToAdd);
      localStorage.setItem(key, JSON.stringify(filmArr));

      console.log('localStorage was clear, Film Added');

      return;
    } else if (
      filmInLocal.find(item => item.id === filmToAdd.id) ||
      !filmToAdd.title
    ) {
      Notify.warning('Sorry, you have this film in the Library');
      return;
    }

    filmArr = [...filmInLocal, filmToAdd];
    filmArr.map(i => (i.title ? console.log(i.title) : console.log(i.name)));
    localStorage.setItem(key, JSON.stringify(filmArr));
    return;
  } catch (error) {
    console.log(error.message);
  }
}

//функція выдмальовки сторінки сторінки My Library. по натисканню на кнопку.
// !!!ВАЖЛИВО замінити "array" на ключ з локал сторедж!!!(Add to queue або Add to watched)

function drawMyFilm(e) {
  e.preventDefault();
  someEl('.card').innerHTML = '';

  const filmInLocal = JSON.parse(localStorage.getItem('array'));
  const draw = filmInLocal
    .map(
      item => `<div class="container">
    <h4><b>${item.title}</b></h4>
    <p>${item.vote_count}</p>
  </div>`
    )
    .join();
  // console.log(draw);

  someEl('.card').innerHTML = draw;
}
