"use client";

import Footer from "@/components/Footer/Footer";
import styles from "./Microinteractions.module.css";
import Image from "next/image";
import Link from "next/link";

const Microinteractions = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>

        <section className={styles.microInteractionsSection}>

            <div className={styles.heading}>
                <h1 className={styles.title}>
                    Micro-Interactions
                </h1>
        
                <h3 className={styles.description}>
                    Micro-interactions are the small, subtle animations or design elements that enhance user experience by providing feedback, guiding actions, and adding a touch of personality to interfaces. They can be as simple as a button changing color when hovered over or as complex as a loading animation that keeps users engaged while waiting for content to load.
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

export default Microinteractions;
