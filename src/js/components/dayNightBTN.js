import { refs } from '../references/references';

refs.nightBtn.addEventListener('click', () => {
  refs.nightIcon.classList.remove('night_color');
  refs.dayIcon.classList.add('day_color');

  refs.bgImg.classList.add('bg-img-night');
});

refs.dayBtn.addEventListener('click', () => {
  refs.nightIcon.classList.add('night_color');
  refs.dayIcon.classList.remove('day_color');

  refs.bgImg.classList.remove('bg-img-night');
});
