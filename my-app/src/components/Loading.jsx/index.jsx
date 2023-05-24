import React from "react";
import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
