import React from 'react'
import Skeleton from '../skeleton';
import styles from "./styles.module.scss";

const CategoriesLoading = () => {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((i)=> (
          <Skeleton key={i} height={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading;
