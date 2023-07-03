import React from 'react'
import HomeContainer from '@/containers/home';
import {
  getSingleCategory,
  getCategories,
  getTopReated,
  getTopPopular
} from '@/services/movie';


const HomePage = async ({ params }) => {

  let selectCategory;

  const [
    {results: topReatedMovies},
    { results: popularMovies},
    {genres: categories},
  ]= await Promise.all([getTopReated(), getTopPopular(), getCategories()])


  if (params.category?.length > 0) {
    const {results} = await getSingleCategory(params.category[1]);
    selectCategory = results;
  }


  return (
    <HomeContainer
      topReatedMovies={topReatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params?.category?.[1] ?? "",
        movies: selectCategory ? selectCategory.slice(0, 7) : [],
      }}
      />
  );
}

export default HomePage;
