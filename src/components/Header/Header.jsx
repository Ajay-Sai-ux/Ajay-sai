"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>Ajay Sai</h1>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link
              href="/works"
              className={`${styles.navItem} ${
                pathname === "/works" ? styles.active : ""
              }`}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navItem} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>
        <div className={styles.portfolioSection}>
          <Link
            href="/portfolio"
            className={styles.portfolio}
          >
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
