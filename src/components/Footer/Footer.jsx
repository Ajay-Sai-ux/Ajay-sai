"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  const socialLinks = [
    { href: "/works", src: "/images/linkedin.svg", alt: "LinkedIn" },
    { href: "/works", src: "/images/instagram.svg", alt: "Instagram" },
    { href: "/works", src: "/images/mail.svg", alt: "Email" },
    { href: "/works", src: "/images/x.svg", alt: "X (Twitter)" },
    { href: "/works", src: "/images/github.svg", alt: "GitHub" },
  ];

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.profileContainer}>
        <Image
          className={styles.profileImage}
          src="/images/profile.png"
          alt="Ajay Sai profile image"
          width={60}
          height={60}
        />

        
        {/* Social Media */}
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.navItem} href="/works">Home</Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/works">Works</Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/works">About</Link>
          </li>
          <li>
            <Link className={styles.navItem} href="/works">Contacts</Link>
          </li>
        </ul>


      </div>

      <div className={styles.profileContainer}>
        <p className={styles.footerTittle}>© 2025 | Ajay Sai</p>
        <div className={styles.line}></div>
        {/* Social Media */}
        <div className={styles.socialContainer}>
          <div className={styles.socialIconWrapper}>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                className={styles.socialIconContainer}
                href={social.href}
              >
                <Image
                  className={styles.socialIcon}
                  src={social.src}
                  alt={social.alt}
                  width={40} // Adjusted for better sizing
                  height={40}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
