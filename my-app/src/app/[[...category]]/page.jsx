import React from 'react'
import HomeContainer from '@/containers/home';

import Movies from "@/mocks/movies.json";

const BASE_URL = 'https://api.themoviedb.org/3';

const getSingleCategory = async (genreId) => {
  const res = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  )
  return res.json();
}
 
const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  const data = await res.json();
  return data;
};

const getTopReated = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  const data = await res.json();
  return data;
};

const getTopPopular = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);

  const data = await res.json();
  return data;
};


const HomePage = async ({ params }) => {

  let selectCategory;

  const topReatedPromise = getTopReated();
  const popularPromise = getTopPopular();
  const categoryPromise = getCategories();
  const singleCategory = getSingleCategory();

  const [{result: topReatedMovies}, { results: popularMovies}, {genres: categories}, ] =
    await Promise.all([topReatedPromise, popularPromise, categoryPromise])

 console.log(categories)


  if (params.category?.length > 0) {
    selectCategory = true;
  }

  return (
    <HomeContainer
      topReatedMovies={topReatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectCategory ? Movies.results.slice[0, 7] : [],
      }}
      />
  );
}

export default HomePage;
