import React from 'react'

const MoviesSection = () => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map(movie) => (
          <div className={styles.movie} key={} >
            <Link href={`/movie/$movie.id`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MoviesSection