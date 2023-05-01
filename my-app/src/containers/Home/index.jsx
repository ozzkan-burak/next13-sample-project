import React from 'react';
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from '@/components/FeaturedMovie';
import Categories from '@/components/Categories';
import MoviesSection from '@/components/MoviesSection';

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies?.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MoviesSection title='Popular Fılms' movies={Movies?.results.slice(1,7)} />
      <MoviesSection title='Your Favorites' movies={Movies?.results.slice(7,13)} />

    </div>
  )
}

export default HomeContainer
