import { users } from './user-data';
import { refs } from '../references/references.js';

const markup = users.map(user => {
  return `<li class='list'>
<picture>
<sourse type='img/webp' 
srcset="${user.photo}?as=${user.webp}&width=400,
${user.photo}?as=${user.webp}&width=800 2x">
<sourse type='img/jpeg' 
srcset="${user.photo}?width=400,
${user.photo}?width=800 2x">
 <img class="list__img" src="${user.photo}" alt="${user.name}" width="300"
      height="200" >
</picture>
           <div class='list__wrapper'>
  <p class='list__title'>${user.name}</p>
  <p class='list__subtitle'>${user.position}</p>
      <a class="list__link" href="${user.github}"
  rel="noopener noreferrer" aria-label="github">
  <span class="list__icon"></span>
 </a>
  </li>
  </ul>
  </div>
</li>
    `;
});
refs.container.insertAdjacentHTML('beforeend', markup.join(''));
