import { FC } from 'react';
import styles from '../styles/components/Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}><a href="/">Kelvin Nicolau</a></h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#about">About</a></li>
          <li className={styles.navItem}><a href="#projects">Projects</a></li>
          <li className={styles.navItem}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
