import axios from 'axios';

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';

const genres = [
  { id: 28, name: ' Action' },
  { id: 12, name: ' Adventure' },
  { id: 16, name: ' Animation' },
  { id: 35, name: ' Comedy' },
  { id: 80, name: ' Crime' },
  { id: 99, name: ' Documentary' },
  { id: 18, name: ' Drama' },
  { id: 10751, name: ' Family' },
  { id: 14, name: ' Fantasy' },
  { id: 36, name: ' History' },
  { id: 27, name: ' Horror' },
  { id: 10402, name: ' Music' },
  { id: 9648, name: ' Mystery' },
  { id: 10749, name: ' Romance' },
  { id: 878, name: ' Science Fiction' },
  { id: 10770, name: ' TV Movie' },
  { id: 53, name: ' Thriller' },
  { id: 10752, name: ' War' },
  { id: 37, name: ' Western' },
];

export const findMovies = {
  backend: 'https://api.themoviedb.org/3/',
  page: 1,
  query: '',
  queryType: '',
  previousPage: NaN,
  queryOut: '',
  queryToPagination: '',
  queryTypeToPagination: '',
  localAnswer: {},
  async find() {
    if (this.query !== '' && this.queryType === 'search-on-query') {
      // console.log(`lalala ${ this.query }`);
      this.queryOut = `${BACKEND}search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`;
      this.queryToPagination = this.query;
      this.queryTypeToPagination = this.queryType;
    } else if (this.query !== '' && this.queryType === 'on-query-per-page') {
      this.queryOut = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'popular') {
      this.queryOut = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
      this.queryTypeToPagination = this.queryType;
    } else if (this.queryType === 'full-info') {
      this.queryOut = `${BACKEND}movie/${this.query}?api_key=${API_KEY}`;
    } else if (this.queryType === 'trailer-info') {
      this.queryOut = `${BACKEND}movie/${this.query}/videos?api_key=${API_KEY}`;
    }
    try {
      const response = await axios.get(`${this.queryOut}`);
      const answer = await response.data;
      // ===NEW LINE START====
      if (
        this.queryType === 'search-on-query' ||
        this.queryType === 'popular'
      ) {
        totalItemsAndPagesRestrict(response.data);
        answer.results = await genresNames(response.data.results);
      }
      // IMG CHECK ON ID QWERRY ANSWER
      if (!answer.poster_path && 'full-info') {
        answer.poster_path = 'https://raw.githubusercontent.com/AntoninaDanylchenko/team-project-js/main/src/images/we-win.webp';
      } else if (answer.poster_path && 'full-info') {
        answer.poster_path = `https://image.tmdb.org/t/p/w500${answer.poster_path}`;
      }
      // IMG CHECK ON ID QWERRY ANSWER
      // ===NEW LINE END====
      // console.log(answer);

      if (answer.status === false) {
        throw new Error(answer.status);
      }

      this.localAnswer = answer;
      console.log(this.localAnswer);
      return await answer;
    } catch (error) {
      console.log(error.message);
      return 'noAnswer';
    }
  },
};

// ========

async function genresIDsDatabase() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=fe13ab826a741d40ca015441d0a0f529&language=en-US`
    );
    const answer = await response.data;
    // console.log(answer.genres);
  } catch (error) {
    console.log(error.message);
  }
}

genresIDsDatabase();

// =======

function totalItemsAndPagesRestrict(obj) {
  if (obj.total_results > 10000) {
    obj.total_results = 10000;
    obj.total_pages = 500;
  }
  console.log(`obj.total_pages ${obj.total_pages}`);
  console.log(`obj.total_results ${obj.total_results}`);
}

// arr - response.data.results
function genresNames(arr) {
  const namesArr = arr.map(element => {
    let genresArr = [];
    if (element.genre_ids) {
      for (const genreId of element.genre_ids) {
        // console.log(element.genre_ids);
        if (genres.find(genre => genre.id === genreId)) {
          // console.log(genres.find(genre => genre.id === genreId).name);
          genresArr.push(genres.find(genre => genre.id === genreId).name);
        }
      }
      if (genresArr.length === 0) {
        genresArr.push('Other'); //todo обговорити з командою
      }
    } else {
      genresArr.push('Other'); //todo обговорити з командою
    }
    if (genresArr.length > 2) {
      const genres = genresArr.slice(0, 2);
      genresArr = [...genres, ' Other']
    }
    element.genre_ids = genresArr;
    // ===YEAR ====
    let yearsReleaseArr = [];
    if (element.release_date) {
      // for (const data of element.release_date) {
        const year = element.release_date.slice(0, 4);
        // console.log(year);
        yearsReleaseArr.push(year);
      // }
      }  else {
      yearsReleaseArr.push('');
    }
    element.release_date = yearsReleaseArr;
        // ====
    let yearsFirstArr = [];
    if (element.first_air_date) {
      // for (const data of element.release_date) {
      const year = element.first_air_date.slice(0, 4);
      // console.log(year);
      yearsFirstArr.push(year);
      // }
    }  else {
      yearsFirstArr.push('');
    }
    element.first_air_date = yearsFirstArr;
    // ===YEAR ====
    // =====  VOTEAVERAGE =====
    let voteAverage = [];
    if (element.vote_average) {
      // for (const data of element.release_date) {
      const vote = element.vote_average.toFixed(1);
      // console.log(year);
      voteAverage.push(vote);
      // }
    }  else {
      voteAverage.push('');
    }
    element.vote_average = voteAverage;
    // =====  VOTEAVERAGE =====

    // // =====  IMG CHECK =====
    if (!element.poster_path) {

      element.poster_path = 'https://raw.githubusercontent.com/AntoninaDanylchenko/team-project-js/main/src/images/we-win.webp';//:todo !!!!
    } else {
      element.poster_path = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
    }
    // // =====  IMG CHECK =====

    return element;
  });
  // console.log(namesArr);
  return namesArr;
}

// ======= BACKUP 27/11/2022
/*

export const findMovies = {
  backend: 'https://api.themoviedb.org/3/',
  page: 1,
  query: '',
  queryType: '',
  previousPage: NaN,

  async find() {
    if (this.query !== '' && this.queryType === 'search-on-query') {
      this.query = `${BACKEND}search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`;
    } else if (this.query !== '' && this.queryType === 'on-query-per-page') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'popular') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'full-info') {
      this.query = `${BACKEND}movie/${this.query}?api_key=${API_KEY}`;
    } else if (this.queryType === 'trailer-info') {
      this.query = `${BACKEND}movie/${this.query}/videos?api_key=${API_KEY}`;
    }
    try {
      const response = await axios.get(`${this.query}`);
      const answer = await response.data;
      return await answer;
    } catch (error) {
      console.log(error.message);
    }
  },
};
*/

// TESTING ON THIS:
/*
const findMovies2 = {
  backend: 'https://api.themoviedb.org/3/',
  page: 1,
  query: '',
  queryType: '',
  previousPage: NaN,

  async find() {
    if (this.query !== '' && this.queryType === 'search-on-query') {
      this.query = `${BACKEND}search/movie?api_key=${API_KEY}&query=${this.query}&page=${this.page}`;
    } else if (this.query !== '' && this.queryType === 'on-query-per-page') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'popular') {
      this.query = `${BACKEND}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    } else if (this.queryType === 'full-info') {
      this.query = `${BACKEND}movie/${this.query}?api_key=${API_KEY}`;
    } else if (this.queryType === 'trailer-info') {
      this.query = `${BACKEND}movie/${this.query}/videos?api_key=${API_KEY}`;
    }
    try {
      const response = await axios.get(`${this.query}`);
      const answer = await response.data;

      // const newResults = await genresNames(response.data.results);
      // answer.results = await newResults;
      // console.log(newResults);
      answer.results = await genresNames(response.data.results);

      console.log(await answer);
      return await answer;
    } catch (error) {
      console.log(error.message);
    }
  },
};

function searchingMorePopular2(page = 1) {
  findMovies2.page = page;
  findMovies2.query = '';
  findMovies2.queryType = 'popular';
  const request = findMovies2.find().then(function (answer) {
    console.log('searching by popularity, page #:', page);
    // console.log(answer); // у відповідь отримуємо об'єкт, який для прикладу консолимо.
  });
}

searchingMorePopular2()
*/
