import React from 'react'
import HomeContainer from '@/containers/home';

import Movies from "@/mocks/movies.json";

const delay = async () => {
  return new Promise((resolve)=> setTimeout(resolve, ms));
}


const HomePage = async ({ params }) => {
  await delay(5000);

  let selectCategory;

  if (params.category?.length > 0) {
    selectCategory = true;
  }

  return (
    <HomeContainer
      selectCategory={{
        id: params.category?.[0] ?? "",
        movies: selectCategory ? Movies.results.slice[0, 7] : [],
      }}
      />
  );
}

export default HomePage;
