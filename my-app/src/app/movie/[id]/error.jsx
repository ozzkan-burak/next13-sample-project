"use client";
import React from "react";
import Link from "next/link";

const Movie404 = () => {
  return (
    <div style={{
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
    >
      <h1>Oops! An error has occurred. Sorry for that!</h1>
      <Link
        href="/"
        style={{textDecoration:"underline", fontSize:20, marginTop: 8}}
      >
        Gohome
      </Link>
    </div>
  );
}

export default Movie404;
