import { users } from './user-data';
import { refs } from '../references/references.js';
   
const markup = users.map(user => {return `<li class='list'>
    <img class="item__img" src="${user.photo}" alt="${user.name}" width="170"
      height="160" >
        <div class='list__wrapper'>
  <p class='list__title'>${user.name}</p>
  <p class='list__subtitle'>${user.position}</p>
  <ul class='social-media'>
  <li class='social-media__item'>
  <a class="social-media__link" href="${user.socialmedia}"
  rel="noopener noreferrer" aria-label="linkedin">
  <svg class="social-media__icon" width="20" height="20">
    <use href="../../images/icon-git.svg#icon-gitgub"></use>
  </svg></a>

  </li>
  <li class='social-media__item'>
  <a class="social-media__link" href="${user.github}"
  rel="noopener noreferrer" aria-label="github">
  <svg class="social-media__icon" width="20" height="20">
    <use href="https://raw.githubusercontent.com/AntoninaDanylchenko/team-project-js/main/src/images/team-photo/symbol-defs.svg#icon-github"></use>
  </svg></a>
  </li>
  </ul>
  </div>
</li>
    `;
});
refs.container.insertAdjacentHTML('beforeend', markup.join(''));


