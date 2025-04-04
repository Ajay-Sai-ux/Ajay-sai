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
              href="/Case_Studies"
              className={`${styles.navItem} ${
                pathname === "/Case_Studies" ? styles.active : ""
              }`}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/Microinteractions"
              className={`${styles.navItem} ${
                pathname === "/Microinteractions" ? styles.active : ""
              }`}
            >
              Microinteractions
            </Link>
          </li>
          <li>
            <Link
              href="/Motion_graphics"
              className={`${styles.navItem} ${
                pathname === "/Motion_graphics" ? styles.active : ""
              }`}
            >
              Motion graphics
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className={`${styles.navItem} ${
                pathname === "/About" ? styles.active : ""
              }`}
            >
              Who's Ajay?
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
