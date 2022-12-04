import { refs } from '../references/references';

themeCheck();

function themeCheck() {
  const dayThemeFromLocal = localStorage.getItem('theme');
  if (dayThemeFromLocal === 'night_moon') {
    refs.nightIcon.classList.remove('night_color');
    refs.dayIcon.classList.add('day_color');
    refs.bgImg.classList.add('bg-img-night');
    refs.galleryLibraryEl.classList.add('night-thema');
    refs.modalFilm.classList.add('modal-thems-night');
    refs.modalfilmBgEl.classList.add('modal-thems-night');
  } else {
    refs.nightIcon.classList.add('night_color');
    refs.dayIcon.classList.remove('day_color');
  }
}

refs.nightBtn.addEventListener('click', () => {
  refs.nightIcon.classList.remove('night_color');
  refs.dayIcon.classList.add('day_color');
  localStorage.setItem('theme', 'night_moon');
  refs.modalFilm.classList.add('modal-thems-night');
  refs.galleryLibraryEl.classList.add('night-thema');
  refs.modalfilmBgEl.classList.add('modal-thems-night');
  refs.bgImg.classList.add('bg-img-night');
});

refs.dayBtn.addEventListener('click', () => {
  refs.nightIcon.classList.add('night_color');
  refs.dayIcon.classList.remove('day_color');
  localStorage.setItem('theme', 'day_sun');
  refs.bgImg.classList.remove('bg-img-night');
  refs.modalFilm.classList.remove('modal-thems-night');
  refs.galleryLibraryEl.classList.remove('night-thema');
  refs.modalfilmBgEl.classList.remove('modal-thems-night');
});
