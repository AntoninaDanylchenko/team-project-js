import axios from 'axios';
const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';

export async function findMovies(event) {
  event.preventDefault();

  const context = event.currentTarget.dataset.action;
  const backend = 'https://api.themoviedb.org/3/';
  this.queryTypePart = '';
  this.movieId = '';
  this.queryString = '';
  this.query = '';
  this.page = 1;
  this.return = NaN;

  if (context === 'query-search') {
    this.queryString = event.currentTarget.elements.searchQuery.value;
    console.log('searching by query:', this.queryString);
    this.query = `${backend}search/movie?api_key=${API_KEY}&query=${this.queryString}&page=${this.page}`;
    this.return = onQueryResponce;
  } else if (context === 'more-popular') {
    console.log('showing more popular');
    this.query = `${backend}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    this.return = morePopularShow;
  } else if (context === 'movie-by-id') {
    this.movieId = event.currentTarget.elements.searchQuery.value;
    console.log('show full details by movie ID: ', this.movieId);
    this.query = `${backend}movie/${this.movieId}?api_key=${API_KEY}`;
    this.return = movieDetails;
  } else if (context === 'trailer-by-id') {
    this.movieId = event.currentTarget.elements.searchQuery.value;
    console.log('show trailer by movie ID: ', this.movieId);
    this.query = `${backend}movie/${this.movieId}/videos?api_key=${API_KEY}`;
    this.return = movieTrailer;
  }

  try {
    console.log(`${backend}${this.queryTypePart}${this.movieId}?api_key=${API_KEY}${this.query}${this.queryString}&page=${this.page}`);

    const answer = await axios.get(`${this.query}`
    );
    // return await onQueryAnswer(answer.data);
    return await this.return (answer.data);
  } catch(error) {
    console.log(error.message);
  }
}

function onQueryResponce(answer) {
  console.log('this is on query response');
  console.log(answer);
}


function morePopularShow (answer) {
  console.log('this is more Popular movies response');
  console.log(answer);
}

function movieDetails (answer) {
  console.log('this is details of movie by id');
  console.log(answer);
}

function movieTrailer (answer) {
  console.log('this is trailer of movie by id');
  console.log(answer);
  console.log(`${answer.results[0].site}: ${answer.results[0].key}`);
}
