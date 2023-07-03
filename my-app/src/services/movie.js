const fetchMovieAPI = async (pathName, query) => {
  const res = await fetch(`${BASE_URL}${pathName}?api_key=${process.env.API_KEY}&${query ?? ''}`);

  return res.json();
};

export default fetchMovieAPI;
