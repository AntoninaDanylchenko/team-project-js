import { users } from './user-data';
import { refs } from '../references/references.js';

const markup = users.map(user => {
  return `<li class='list'>
<picture>
<source srcset="${user.webp}" 
type="image/webp">
 <img class="list__img" src="${user.photo}" alt="${user.name}" width="190"
      height="190" >
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
