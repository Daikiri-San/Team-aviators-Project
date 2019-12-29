const key = '259c02d1f1f516a6001436d2cce8084d';
const baseURL = 'https://api.themoviedb.org/3/search/movie';

const searchFetch = {
  query: '',
  page: 1,
  fetchSearchMovies() {
    return fetch(
      `${baseURL}?api_key=${key}&page=${this.page}&query=${this.query}`,
    )
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

export default searchFetch;
