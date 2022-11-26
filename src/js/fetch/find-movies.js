import axios from 'axios';

const API_KEY = 'fe13ab826a741d40ca015441d0a0f529';
const BACKEND = 'https://api.themoviedb.org/3/';

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


