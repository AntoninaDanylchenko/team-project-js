import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs.galleryEl.addEventListener('click', onModalOpenFilm);
refs.btnAddToWatch.addEventListener('click', locSetOne);
refs.btnAddToaddToQueue.addEventListener('click', locSetOne);

export function onModalOpenFilm(e) {
  e.preventDefault();
  refs.filmCardEl.innerHTML = '';

  refs.modalBackdrop.classList.add('active');
  refs.modalFilm.classList.add('active');
  document.body.classList.add('body-is-hidden');

  refs.modalFilmBtnClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscBtnPress);
  refs.modalBackdrop.addEventListener('click', onBackdropClick);

  const idClickFilm = e.target.id;
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
    return (refs.filmCardEl.innerHTML = createFilmCards(answer));
  } catch (error) {
    console.log(error.message);
  }
}

function createFilmCards(card) {
  return `
  <div class='film-info'>
    <img
      src='https://image.tmdb.org/t/p/w500${card.poster_path}'
      class='film-info__poster'
      alt='${card.title}}'
      id=${card.id}'
    />
    <div class='flex-wrapper'>
      <h1 class='film-info__title'>${card.title}${card.name}</h1>
      <div class="film-info__container">
        <ul class="film-info_list">
          <li class='film-info__param'>Vote / Votes</li>
          <li class='film-info__param'>Popularity</li>
          <li class='film-info__param'>Original Title</li>
          <li class='film-info__param'>Genre</li>
        </ul>
        <ul>
          <li class='film-info__characteristic'><span class="film-info-vote">${card.vote_average}</span> / ${card.vote_count}</li>
          <li class='film-info__characteristic'>${card.popularity}</li>
          <li class='film-info__characteristic film-info-upper'>${card.original_title}</li>
          <li class='film-info__characteristic'>${card.genres}}</li>
        </ul>
      </div>
      <p class='film-info__about'>About</p>
      <p class='film-info__desc'>${card.overview}
      </p>
    </div>
  </div>`;
}

// функція що додає фільм в локалсторедж по ключу(текст який вказаний на кнопці), в задежносты на яку кнопку тиснеш
export async function locSetOne(e) {
  try {
    const key = e.target.textContent;
    console.log(key);
    console.log(e.target.textContent);
    const filmInLocal = JSON.parse(localStorage.getItem(key));
    if (filmInLocal === null) {
      console.log('Пусто');
    } else {
      console.log(filmInLocal, 'фільми що містяться у локал стореджі');
      filmInLocal.map(i =>
        i.title ? console.log(i.title) : console.log(i.name)
      );
    }
    const filmToAdd = await findMovies.find();
    // const filmToAdd = await  myFilm(filmId).then(results => results);
    console.log(filmToAdd, 'фільм що хочемо додати до локал сторедж');
    console.log(filmToAdd.title);
    // масив що будемо додавати до localStorage
    let filmArr = [];
    // логіка додавання фільмів до localStoreg
    if (filmInLocal === null) {
      if (filmToAdd.title === undefined) {
        Notify.failure('стався збій, спробуйте ще раз');
        return;
      }
      filmArr.push(filmToAdd);
      localStorage.setItem(key, JSON.stringify(filmArr));
      console.log('localStoreg була пуста, фільм додано');
      return;
    } else if (
      filmInLocal.find(item => item.id === filmToAdd.id) ||
      filmToAdd.title === undefined
    ) {
      Notify.warning('вже є');
      return;
    }
    Notify.success('фільму ще не маю, добавляємо');
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
  console.log(draw);

  someEl('.card').innerHTML = draw;
}
