import React from 'react'
import HomeContainer from '@/containers/home';

import Movies from "@/mocks/movies.json";

const BASE_URL = 'https://api.themoviedb.org/3';

const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  const data = await res.json();
  console.log(data)
}

const HomePage = async ({ params }) => {

  let selectCategory;

  await getPopularMovies();

  if (params.category?.length > 0) {
    selectCategory = true;
  }

  return (
    <HomeContainer
      selectCategory={{
        id: params.category?.[0] ?? "",
        movies: selectCategory ? Movies.results.slice[0, 7] : [],
      }}
      />
  );
}

export default HomePage;
