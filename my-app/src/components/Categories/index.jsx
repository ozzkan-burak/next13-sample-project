import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Categories = ({categories}) => {
  console.log(categories)
  return (
    <div className={styles.categories}>
      {categories.map((category)=> (
        <Link
          key={category.id}
          className={styles.category}
          href={`/${category.id}`}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>

      ))}
      
    </div>
  )
};

export default Categories;
