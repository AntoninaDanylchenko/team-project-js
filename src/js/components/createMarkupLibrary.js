import { refs } from '../references/references';

import templateLibraryCard from '../../templates/templateLibraryCard.hbs';

function createMarkupLibrary(answer) {
  //   console.log(answer);

  refs.galleryLibraryEl.innerHTML = templateLibraryCard(answer);
}

export { createMarkupLibrary };
