import React from 'react';
import Movies from "@/mocks/movies.json";
import FeaturedMovie from '@/components/FeaturedMovie';

const HomeContainer = () => {
  console.log(Movies.results[0])
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
    </div>
  )
}

export default HomeContainer
