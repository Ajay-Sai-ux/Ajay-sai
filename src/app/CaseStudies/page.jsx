"use client";

import Footer from "@/components/Footer/Footer";
import styles from "./CaseStudies.module.css";
import Image from "next/image";

  // Selected Works Section
  const worksContent = [
    {
      title:
        "T-Mobile's data-driven approach to web performance led to a 20% reduction in user site issues and a 32% improvement in cart-to-order rate.",
      description:
        "By analyzing real users' web vitals, T-Mobile realized that enhancements in Core Web Vitals can significantly impact both user experience and business metrics.",
      image: "/images/carosul4.png",
    },
    {
      title:
        "Less friction, more control: How Google Meet improved audio and video permissions",
      description:
        "By analyzing real users' web vitals, T-Mobile realized that enhancements in Core Web Vitals can significantly impact both user experience and business metrics.",
      image: "/images/carosul2.png",
    },
    {
      title:
        "BILIBILI taps MediaPipe's on-device web AI solution to improve video stream UX and boost session duration by +30%",
      description:
        "By analyzing real users' web vitals, T-Mobile realized that enhancements in Core Web Vitals can significantly impact both user experience and business metrics.",
      image: "/images/carosul2.png",
    },
    {
      title:
        "How Disney+ Hotstar increased weekly card views by 100% on living room devices by reducing INP by 61%",
      description:
        "By analyzing real users' web vitals, T-Mobile realized that enhancements in Core Web Vitals can significantly impact both user experience and business metrics.",
      image: "/images/carosul2.png",
    },
    {
      title:
        "T-Mobile's data-driven approach to web performance led to a 20% reduction in user site issues and a 32% improvement in cart-to-order rate.",
      description:
        "By analyzing real users' web vitals, T-Mobile realized that enhancements in Core Web Vitals can significantly impact both user experience and business metrics.",
      image: "/images/carosul2.png",
    },
  ];

const CaseStudies = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.microInteractionsSection}>
          <div className={styles.heading}>
            <h1 className={styles.title}>Case Studies</h1>

            <h3 className={styles.description}>
              Case studies are in-depth analyses of a particular project,
              product, or design process. They showcase the challenges faced,
              the solutions implemented, and the outcomes achieved. By
              documenting the journey of a design project, case studies provide
              valuable insights into the decision-making process, user research,
              and design iterations, making them an essential tool for designers
              to communicate their work and impact.
            </h3>
          </div>

          <div className={styles.line}></div>


            <div className={styles.cardContainer}>
              {worksContent.map((work, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardImageContainer}>
                    <Image
                      className={styles.cardImage}
                      src={work.image}
                      alt="Company logo"
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{work.title}</h3>
                    <p className={styles.cardDescription}>{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
