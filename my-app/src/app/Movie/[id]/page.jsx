import React from "react";
import MovieContainer from "@/containers/Movie";
import Movies from "@/mocks/movies.json";

const MoviePage = ({params}) => {
  
  const movieDetail = Movies.results.find((movie)=>movie.id.toString() === params.id);

  return (
    <MovieContainer movie={movieDetail} />
  )
};

export default MoviePage;