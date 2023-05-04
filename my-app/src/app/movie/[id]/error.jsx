'use client'
import React from 'react';
import Link from "next/link";

const Error = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      >
        <h1>Error page !</h1>
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
}

export default Error