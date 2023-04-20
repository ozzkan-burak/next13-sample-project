import Link from 'next/link';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

import styles from './styles.modules.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>

      
      <Link href="/" className={styles.navigatonMenu}>
        <FaPlayCircle /> NETFILMS
      </Link>
      <nav>
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
        <Link href="/">Kids</Link>
      </nav>
      </div>
    </header>
  )
}

export default Header
