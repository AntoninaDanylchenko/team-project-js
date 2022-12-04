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
        answer.results = await repackBackendData(response.data.results);
      }
      // IF IMG CHECK ON ID QUERY ANSWER START
      if (!answer.poster_path && 'full-info') {
        answer.poster_path = 'https://raw.githubusercontent.com/AntoninaDanylchenko/team-project-js/main/src/images/we-win.webp';
      } else if (answer.poster_path && 'full-info') {
        answer.poster_path = `https://image.tmdb.org/t/p/w500${answer.poster_path}`;
      }
      // IF IMG CHECK ON ID QUERY ANSWER END
      if (answer.status === false) {
        throw new Error(answer.status);
      }

      this.localAnswer = answer;
      return await answer;
    } catch (error) {
      console.log(error.message);
      return 'noAnswer';
    }
  },
};

async function genresIDsDatabase() {// todo:
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=fe13ab826a741d40ca015441d0a0f529&language=en-US`
    );
    const answer = await response.data;
  } catch (error) {
    console.log(error.message);
  }
}

genresIDsDatabase();

// CHECKING IF BACKEND RESPONSE GIVE MORE THAN 500
// AND RESTRICT TO 500 PAGES
function totalItemsAndPagesRestrict(obj) {
  if (obj.total_results > 10000) {
    obj.total_results = 10000;
    obj.total_pages = 500;
  }
}

// REPACK BACKEND DATA START
function repackBackendData(arr) {//INPUT MOVIES ARRAY FROM BACKEND
  const backendArr = arr.map(element => {
    let genresArr = [];
    if (element.genre_ids) {//REPACK GENRES ID`S TO GENRES NAMES START
      for (const genreId of element.genre_ids) {
        if (genres.find(genre => genre.id === genreId)) {
          genresArr.push(genres.find(genre => genre.id === genreId).name);
        }
      }
      if (genresArr.length === 0) {
        genresArr.push('Other');
      }
    } else {
      genresArr.push('Other');
    }//REPACK GENRES ID`S TO GENRES NAMES END

    if (genresArr.length > 2) {//RESTRICT GENRES QUANTITY START
      const genres = genresArr.slice(0, 2);
      genresArr = [...genres, ' Other']
    }//RESTRICT GENRES QUANTITY END
    element.genre_ids = genresArr;

    let yearsReleaseArr = [];//RESTRICT RELEASE DATE TO YEAR START
    if (element.release_date) {
        const year = element.release_date.slice(0, 4);
        yearsReleaseArr.push(year);
      // }
      }  else {
      yearsReleaseArr.push('NO DATE');
    }
    element.release_date = yearsReleaseArr;

    let yearsFirstArr = [];
    if (element.first_air_date) {
      const year = element.first_air_date.slice(0, 4);
      yearsFirstArr.push(year);
    }  else {
      yearsFirstArr.push('');
    }
    element.first_air_date = yearsFirstArr;

    if (yearsReleaseArr[0] === 'NO DATE' && yearsFirstArr[0].length === 4) {
      element.release_date = [''];
    }//RESTRICT RELEASE DATE TO YEAR END

    let voteAverage = [];// VOTE AVERAGE FIXED START
    if (element.vote_average) {
      // for (const data of element.release_date) {
      const vote = element.vote_average.toFixed(1);
      voteAverage.push(vote);
      // }
    }  else {
      voteAverage.push('');
    }
    element.vote_average = voteAverage;// VOTE AVERAGE FIXED END

    if (!element.poster_path) {//IMG LINK CHECK AND REPLACE START

      element.poster_path = 'https://raw.githubusercontent.com/AntoninaDanylchenko/team-project-js/main/src/images/we-win.webp';
    } else {
      element.poster_path = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
    }//IMG LINK CHECK AND REPLACE END

    return element;
  });

  return backendArr;
}
// REPACK BACKEND DATA END
