import React from "react";
import Link from "next/link";

const Movie404 = () => {
  return (
    <div
      style={{
        height: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      >
        <h1>We could&apos;t find the movie you looking for!</h1>
        <Link
          href="/"
          style={{
            textDecoration:"underline",
            fontSize: 20,
            marginTop: 8
          }}
          >
            Go home
          </Link>
      </div>
  )
};

export default Movie404;