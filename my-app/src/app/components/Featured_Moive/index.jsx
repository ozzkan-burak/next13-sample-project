import React from 'react'

const FeaturedMoive = ({movie = {}, isCompact = true}) => {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 clssName={styles.movieTitle}>{title}</h1>
      <p className={`${styles.overview} ${
        isCompact ? styles.shortOverview : ""
      }`}>
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} hre={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
          />
      </div>
    </div>
  )
}

export default FeaturedMoive
