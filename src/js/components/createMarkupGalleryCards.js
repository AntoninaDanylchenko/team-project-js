import { refs } from '../references/references';
import templateCard from '../../templates/templateCard.hbs';

function createResultMarkup(results) {
  refs.galleryEl.innerHTML = templateCard(results);
}

export { createResultMarkup };
