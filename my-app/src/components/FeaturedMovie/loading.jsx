import React from 'react';
import Loading from '../Loading.jsx';

import styles from './styles.module.scss';

const FeaturedMovieLoaidng = () => {
  return (
    <div style = {{ height: 278}} className={styles.movieWrapper}>
      <Loading />
    </div>
  )
}

export default FeaturedMovieLoaidng;
