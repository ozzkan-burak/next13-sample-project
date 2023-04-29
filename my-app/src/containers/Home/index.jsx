import React from 'react';
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from '@/components/FeaturedMovie';
import Categories from '@/components/Categories';

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
    </div>
  )
}

export default HomeContainer
