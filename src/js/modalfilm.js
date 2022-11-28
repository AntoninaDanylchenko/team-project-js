import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';

refs.galleryEl.addEventListener('click', onModalOpenFilm);

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
      <ul>
        <li class='film-info__param'>Vote / Votes</li>
        <li class='film-info__param'>Popularity</li>
        <li class='film-info__param'>Original Title</li>
        <li class='film-info__param'>Genre</li>
      </ul>
      <ul>
        <li class='film-info__vote'>${card.vote_average} / ${card.vote_count}</li>
        <li class='film-info__vote'>${card.popularity}</li>
        <li class='film-info__vote'>${card.original_title}${card.original_name}</li>
        <li class='film-info__vote'>${card.genres}}</li>
      </ul>
      <p class='film-info__about'>About</p>
      <p class='film-info__desc'>${card.overview}
      </p>
    </div>
  </div>`;
}
