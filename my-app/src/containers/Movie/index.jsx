import React from "react";
import {FeaturedMovie} from '@/components/FeaturedMovie';


const MovieContainer = ({movie}) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false} />
  )
};

export default MovieContainer;