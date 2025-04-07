"use client";

import Footer from "@/components/Footer/Footer";
import styles from "./Motion_graphics.module.css";
import Image from "next/image";
import Link from "next/link";

const MotionGraphics = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>

        <section className={styles.microInteractionsSection}>

            <div className={styles.heading}>
                <h1 className={styles.title}>
                    Motion Graphics
                </h1>
        
                <h3 className={styles.description}>
                    Motion graphics are a form of digital animation that combines graphic design elements with movement. They are often used in videos, presentations, and online content to create engaging visuals that capture the audience's attention. By incorporating motion into design, motion graphics can effectively convey information, tell stories, and enhance the overall user experience.
                </h3>
            </div>

            <div className={styles.line}></div>

            <div className={styles.imageContainer}>
                <Link
                    className={styles.imageLink}
                    href="#"
                  >
                    <Image
                      className={styles.image}
                      src="/images/carosul1.png"
                      alt="Micro-interactions"
                      width={40}
                      height={40}
                      layout="responsive"
                    />
                </Link>
                <Link
                    className={styles.imageLink}
                    href="#"
                  >
                    <Image
                      className={styles.image}
                      src="/images/carosul1.png"
                      alt="Micro-interactions"
                      width={40}
                      height={40}
                      layout="responsive"
                    />
                </Link>
                <Link
                    className={styles.imageLink}
                    href="#"
                  >
                    <Image
                      className={styles.image}
                      src="/images/carosul1.png"
                      alt="Micro-interactions"
                      width={40}
                      height={40}
                      layout="responsive"
                    />
                </Link>
                <Link
                    className={styles.imageLink}
                    href="#"
                  >
                    <Image
                      className={styles.image}
                      src="/images/carosul1.png"
                      alt="Micro-interactions"
                      width={40}
                      height={40}
                      layout="responsive"
                    />
                </Link>
            </div>
            

        </section>


        <Footer />

      </div>
    </div>
  );
};

export default MotionGraphics;
