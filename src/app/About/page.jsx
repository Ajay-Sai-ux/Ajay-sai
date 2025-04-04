"use client";

import Footer from "@/components/Footer/Footer";
import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>

        <div className={styles.aboutSection}>
          <Image
            priority
            width={500}
            height={620}
            className={styles.profileImage}
            src="/images/About-profile.jpg"
            alt="Ajay Sai's Profile Picture"
          />

          <section className={styles.introSection}>
            <h1 className={styles.title}>
              Hello, <br />
              I’m Ajay Sai <br />A Product Designer
            </h1>

            <h2 className={styles.description}>
              <span>Rooted in</span>
              <span className={styles.highlight}>
                Fine Arts and Psychology.
              </span>
            </h2>

            <h2 className={styles.description}>
              Currently, I’m working as a UI/UX Designer at Vectone Solutions
              Pvt. Ltd., where I focus on minimizing design debt, conducting
              research, creating and maintaining a scalable design system, and
              aligning design decisions with business goals.
            </h2>

            <h2 className={styles.description}>
              I specialize in crafting micro-interactions and motion graphics,
              adding those subtle, thoughtful details that bring interfaces to
              life.
            </h2>

            <h2 className={styles.description}>
            I’m {"{highly_technical}"} and while (I’m ≠ engineer) I know my way /around &amp; can speak “fluently” with developers;
            </h2>
          </section>
        </div>

        <Footer />

      </div>
    </div>
  );
};

export default About;
