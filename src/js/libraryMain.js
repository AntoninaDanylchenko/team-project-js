import { refs } from './references/references.js';
import templateLibraryCard from '../templates/templateLibraryCard.hbs';

refs.btnQueue.addEventListener('click', drawMyQueue);
function drawMyQueue(item) {
  refs.galleryLibraryEl.innerHTML = '';

  refs.btnWatched.classList.remove('active-lbr');
  refs.btnQueue.classList.add('active-lbr');
  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-queue'));

  if (!filmInLocal || !filmInLocal.length) {
    refs.noCard.classList.remove('visually-hidden');
    return;
  }

  refs.noCard.classList.add('visually-hidden');
  templateInfoLibrary(filmInLocal);
}
function templateInfoLibrary(item) {
  const cardArr = item.map(i => {
    const genreFilmsArr = i.genres.map(genre => genre.name);
    const genreFilmStr = genreFilmsArr.join(', ');
    const genreVoit = i.vote_average.toFixed(1);
    const year = i.release_date.slice(0, 4);
    return {
      poster_path: i.poster_path,
      title: i.title,
      id: i.id,
      title: i.title,
      name: i.name,
      genreVoit,
      original_title: i.original_title,
      genreFilmStr,
      year,
    };
  });

  refs.galleryLibraryEl.innerHTML = templateLibraryCard(cardArr);
}
refs.btnWatched.addEventListener('click', drawMyWatched);
function drawMyWatched(item) {
  refs.galleryLibraryEl.innerHTML = '';

  refs.btnQueue.classList.remove('active-lbr');
  refs.btnWatched.classList.add('active-lbr');

  const filmInLocal = JSON.parse(localStorage.getItem('Add-to-watched'));
  if (!filmInLocal || !filmInLocal.length) {
    refs.noCard.classList.remove('visually-hidden');
    return;
  }
  refs.noCard.classList.add('visually-hidden');
  templateInfoLibrary(filmInLocal);

  templateInfoLibrary(filmInLocal);
}

function templateInfoLibrary(item) {
  const cardArr = item.map(i => {
    const genreFilmsArr = i.genres.map(genre => genre.name);
    const genreFilmStr = genreFilmsArr.join(', ');
    const genreVoit = i.vote_average.toFixed(1);
    const year = i.release_date.slice(0, 4);
    return {
      poster_path: i.poster_path,
      title: i.title,
      id: i.id,
      title: i.title,
      name: i.name,
      genreVoit,
      original_title: i.original_title,
      genreFilmStr,
      year,
    };
  });

  refs.galleryLibraryEl.innerHTML = templateLibraryCard(cardArr);
}
