import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/containers/Movie";
import Movies from "@/mocks/movies.json";

const MoviePage = ({params, searchParams}) => {
  
  const movieDetail = Movies.results.find((movie)=>movie.id.toString() === params.id);
  console.log('MOVIE_DETAIL:',movieDetail)

  if(!movieDetail) {
    notFound()
  };

  if(searchParams.error == "true") {
    throw new Error("Error happened");
  }

  return (
    <MovieContainer movie={movieDetail} />
  )
};

export default MoviePage;
