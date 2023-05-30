import React from 'react';
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from '@/components/FeaturedMovie';
import Categories from '@/components/Categories';
import MoviesSection from '@/components/MoviesSection';

const HomeContainer = (
  {
    topReatedMovies = [],
    popularMovies = [],
    categories = [],
    selectedCategory
  }) => {
  return (
    <div>
      <FeaturedMovie movie={Movies?.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MoviesSection 
        title={
        categories.find((genre)=> `${genre.id}` === selectedCategory?.id)?.name
      } 
        movies={selectedCategory?.movies} />
      <MoviesSection 
        title='Top Releated Movıes' 
        movies={topReatedMovies?.slice(1,7)} 
      />
      <MoviesSection title='Popular Movies' movies={popularMovies?.slice(7,13)} />

    </div>
  )
}

export default HomeContainer;
 