import React from 'react';
import Movies from "@/mocks/movies.json";
import FeaturedMoive from '@/components/FeaturedMovie';

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMoive movie={Movies.results[0]} />
    </div>
  )
}

export default HomeContainer
