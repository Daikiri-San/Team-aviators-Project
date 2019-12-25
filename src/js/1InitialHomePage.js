const key = '259c02d1f1f516a6001436d2cce8084d';
const baseURL = 'https://api.themoviedb.org/3/movie';

fetch(`${baseURL}/popular?api_key=${key}`).then(res =>
  res
    .json()
    .then(data => console.log(data))
    .catch(error => console.log(error)),
);
