import { users } from './user-data';
import { refs } from '../references/references.js';

console.log(refs.title);
  const markup = users.map(user => {return `<ul class='list'> <li class='list__item'>
    <picture>
    <source media="(min-width: 1200px)"
      srcset="./images/team/team-desc-2-1x.webp 1x, ./images/team/team-desc-2-2x.webp 2x" type="image/webp" />

    <source media="(min-width: 1200px)"
      srcset="./images/team/team-desc-2-1x.jpg 1x, ./images/team/team-desc-2-2x.jpg 2x" type="image/jpg" />

    <source media="(min-width: 768px)"
      srcset="./images/team/team-tab-02-1x.webp 1x, ./images/team/team-tab-02-2x.webp 2x" type="image/webp" />

    <source media="(min-width: 768px)"
      srcset="./images/team/team-tab-02-1x.jpg 1x, ./images/team/ 1xteam-tab-02-2x.jpg 2x" type="image/jpg" />

    <source media="(max-width: 767px)"
      srcset="./images/team/team-mob-02-1x.webp 1x, ./images/team/team-mob-02-2x.webp 2x" type="image/webp" />

    <source media="(max-width: 767px)"
      srcset="./images/team/team-mob-02-1x.jpg 1x, ./images/team/team-mob-02-2x.jpg 2x" type="image/jpg" />

    <img class="item__img" src="${user.photo}" alt="${user.name}" width="170"
      height="160" />
  </picture>
  <div class='list__wrapper'>
  <p class='list__title'>${user.name}</p>
  <p class='list__subtitle'>${user.position}</p>
  <ul class='social-media'>
  <li class='social-media__item'>
  <a class="social-media__link" href="${user.socialmedia}"
  rel="noopener noreferrer" aria-label="linkedin">
  <svg class="social-media__icon" width="20" height="20">
    <use href="./images/team-photo/symbol-defs.svg#icon-linkedin"></use>
  </svg>${user.socialmedia}</a>
  </li>
  <li class='social-media__item'>
  <a class="social-media__link" href="${user.github}"
  rel="noopener noreferrer" aria-label="github">
  <svg class="social-media__icon" width="20" height="20">
    <use href="./images/team-photo/symbol-defs.svg#icon-github"></use>
  </svg>${user.github}</a>
  </li>
  </ul>
  </div>
</li>
</ul>
    `});
 refs.container.insertAdjacentHTML('beforeend', markup.join(''));
 console.log(markup);

