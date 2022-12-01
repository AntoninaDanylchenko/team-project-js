import { refs } from './references/references';
import { findMovies } from './fetch/find-movies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { noAnswer } from './components/noAnswer-template';

refs.galleryEl.addEventListener('click', onModalOpenFilm);
refs.btnAddToWatch.addEventListener('click', locSetOne);
refs.btnAddToaddToQueue.addEventListener('click', locSetOne);

export function onModalOpenFilm(e) {
  e.preventDefault();
  refs.filmCardEl.innerHTML = '';
  refs.modalLoader.classList.add('loader-lines')

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
    console.log(answer.id, 56);
    const filmInLocalAdd = JSON.parse(localStorage.getItem("Add-to-watched"));
    const filmInLocalQu = JSON.parse(localStorage.getItem("Add-to-queue"));
    console.log(filmInLocalQu);
    //  можна переписати окремою функцією
    if (filmInLocalAdd) {
      filmInLocalAdd.find(item => { console.log(item.id); return item.id === answer.id }) ?
        refs.btnAddToWatch.textContent = "Remove Film" : refs.btnAddToWatch.textContent = "Add-to-watched"
    }
    if (filmInLocalQu) {
      filmInLocalQu.find(item => { console.log(item.id); return item.id === answer.id }) ?
        refs.btnAddToaddToQueue.textContent = "Remove Film" : refs.btnAddToaddToQueue.textContent = "Add-to-queue"
    }
 //
    if (answer === 'noAnswer') {
      console.log('noAnswer is there');

      refs.modalBackdrop.classList.add('active');
      refs.modalFilm.classList.add('active');

      return (refs.filmCardEl.innerHTML = createFilmCards(noAnswer));
    }
    refs.modalBackdrop.classList.add('active');
    refs.modalFilm.classList.add('active');
    // refs.modalLoader.classList.remove('loader-lines')
    return (refs.filmCardEl.innerHTML = createFilmCards(answer));
  } catch (error) {
    console.log(error.message);
  }
}

function createFilmCards(card) {
  const genreArr = card.genres.map(genre => genre.name);
  const genreStr = genreArr.join(', ');
  const genreVoit = card.vote_average.toFixed(1);
  const genrePopularity = Math.round(card.popularity);
  refs.modalLoader.classList.remove('loader-lines')
  return `
  <div class='film-info'>
    <img
      src='${card.poster_path}'
      class='film-info__poster'
      alt='${card.title}}'
      id=${card.id}'
      height ='562.5px'
      width = '375px'
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
          <li class='film-info__characteristic'><span class="film-info-vote">${genreVoit}</span> / ${card.vote_count}</li>
          <li class='film-info__characteristic'>${genrePopularity}</li>
          <li class='film-info__characteristic film-info-upper'>${card.original_title}</li>
          <li class='film-info__characteristic'>${genreStr}</li>
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

    let key = ""
    if (e.target.classList.value === "film-card-addToWatched") {
      key = "Add-to-watched";
      console.log(key, 22);
    }
    if (e.target.classList.value === "film-card-addToQueue") {
      key = "Add-to-queue";
      console.log(key, 23);
    }
    // e.target.classList.value === "Add-to-watched"
    // let key = e.target.textContent;
    key = key.trim().split(' ').join('-')
    console.log(key, 107);
    // console.log(e.target.textContent);
    let filmToAdd = await findMovies.find();
    console.log(filmToAdd, 110);
    console.log(e.target.classList.value);
    if (refs.btnAddToWatch.textContent === "Remove Film" && e.target.classList.value === "film-card-addToWatched") {
      const filmInLocal = JSON.parse(localStorage.getItem("Add-to-watched"));
      console.log(filmInLocal, 14);
      const index = filmInLocal.findIndex(item => item.id === filmToAdd.id);
      filmInLocal.splice(index, 1);
      console.log(filmInLocal, 15);
      localStorage.removeItem("Add-to-watched");
      localStorage.setItem("Add-to-watched", JSON.stringify(filmInLocal));
      refs.btnAddToWatch.textContent = "Add-to-watched";
      return
      // filmInLocal.includes(filmToAdd);
      // console.log("aga e");
    }

    if (refs.btnAddToaddToQueue.textContent === "Remove Film" && e.target.classList.value === "film-card-addToQueue") {
      const filmInLocal = JSON.parse(localStorage.getItem("Add-to-queue"));
      console.log(filmInLocal, 14);
      const index = filmInLocal.findIndex(item => item.id === filmToAdd.id);
      filmInLocal.splice(index, 1);
      console.log(filmInLocal, 15);
      localStorage.removeItem("Add-to-queue");
      localStorage.setItem("Add-to-queue", JSON.stringify(filmInLocal));
      refs.btnAddToaddToQueue.textContent = "Add-to-queue";
      return
      // filmInLocal.includes(filmToAdd);
      // console.log("aga e");

    }
    if (key === "Add-to-watched") {
      refs.btnAddToWatch.textContent = "Remove Film";
    }
    else {
      refs.btnAddToaddToQueue.textContent = "Remove Film";
    }

    const filmInLocal = JSON.parse(localStorage.getItem(key));

    if (!filmInLocal) {
      console.log('Clear');

    } else {
      // console.log(filmInLocal, 'фільми що містяться у локал стореджі');
      filmInLocal.map(i =>
        i.title ? console.log(i.title) : console.log(i.name)
      );
    }

    findMovies.queryType = 'full-info';

    // let filmToAdd = await findMovies.find();// todo: оригінальний варіант

    // const filmToAdd = findMovies.localAnswer;

    // const filmToAdd = await  myFilm(filmId).then(results => results);
    // console.log(filmToAdd, 'фільм що хочемо додати до localStorage');
    if (filmToAdd === 'noAnswer') {
      filmToAdd = noAnswer;
    }
    console.log(filmToAdd.title);
    // масив що будемо додавати до localStorage
    let filmArr = [];
    // логіка додавання фільмів до localStoreg

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
    Notify.success('We add film to Library');

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
