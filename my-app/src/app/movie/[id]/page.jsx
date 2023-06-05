import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

const BASE_URL = 'https://api.themoviedb.org/3';

const getMovie = async (movieId) => {

  const res = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
  )
  const data = await res.json();

  return data;
}

const MoviePage = async ({params, searchParams}) => {
  
  const movieDetail = await getMovie(params.id)

  if(!movieDetail) {
    notFound()
  };

  if(searchParams.error == "true") {
    throw new Error("Error happened");
  }

  if(searchParams.error === true) {
    throw new Error("Error happened")
  }

  return (
    <MovieContainer movie={movieDetail} />
  )
};

export default MoviePage;
