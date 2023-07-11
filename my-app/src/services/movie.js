const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovieAPI = async (pathName, query) => {
  try {
    const res = await fetch(`${BASE_URL}${pathName}?api_key=${process.env.API_KEY}&${query ?? ''}`);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
  
};


const getSingleCategory = async (genreId) => {
  return fetchMovieAPI('/discover/movie', `with_genres=${genreId}`);
}
 
const getCategories = async () => {
  return fetchMovieAPI('/genre/movie/list', `page=1`);
};

const getTopReated = async () => {
  return fetchMovieAPI('/movie/top_rated', `page=1`);
};

const getTopPopular = async () => {
  return fetchMovieAPI('/movie/popular', `page=1`);
};

const getMovie = async (movieId) => {
  return fetchMovieAPI(`/movie/${movieId}`)
}

export {
  fetchMovieAPI,
  getSingleCategory,
  getCategories,
  getTopReated,
  getTopPopular,
  getMovie,
};
