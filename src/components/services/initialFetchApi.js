const key = '259c02d1f1f516a6001436d2cce8084d';
const baseURL = 'https://api.themoviedb.org/3/movie';

const initialFetchAPI = {
  page: 1,
  fetchPopularFilms() {
    return fetch(`${baseURL}/popular?api_key=${key}&page=${this.page}`)
      .then(res => res.json())
      .catch(console.log);
  },
  incrementPage() {
    this.page++;
  },
  decrementPage() {
    this.page--;
  },
};

export default initialFetchAPI;
