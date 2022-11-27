import { findMovies } from './fetch/find-movies';
import { createResultMarkup } from './components/createMarkupGalleryCards';
import { refs } from './references/references';

export async function searchingMorePopularity(page = 1) {
  findMovies.page = page;
  findMovies.query = '';
  findMovies.queryType = 'popular';
  const request = await findMovies.find().then(function (answer) {
    console.log('searching by popularity, page #:', page);
    createResultMarkup(answer.results);
    console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}
searchingMorePopularity();

// createResultMarkup();
