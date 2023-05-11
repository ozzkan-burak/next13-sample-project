import React from "react";


import CategoriesLoading  from "@/components/Categories/loading";
import FeaturedMovieLoaidng from "@/components/FeaturedMovie/loading";


function HomeLoading() {
  return (
    <>
      <CategoriesLoading />
      <FeaturedMovieLoaidng />
    </>
  );
}

export default HomeLoading;