import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // hero section
  const socialLinks = [
    { href: "/works", src: "/images/linkedin.svg", alt: "LinkedIn" },
    { href: "/works", src: "/images/instagram.svg", alt: "Instagram" },
    { href: "/works", src: "/images/mail.svg", alt: "Email" },
    { href: "/works", src: "/images/x.svg", alt: "X (Twitter)" },
    { href: "/works", src: "/images/github.svg", alt: "GitHub" },
  ];

  const skillImages = [
    "/images/carosul1.png",
    "/images/carosul2.png",
    "/images/carosul3.png",
    "/images/carosul4.png",
  ];

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

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          {/* Intro Container */}
          <div className={styles.introContainer}>
            <h5 className={styles.introTitle}>Hello ~ I’m Ajay Sai</h5>
            <h1 className={styles.introSubtitle}>
              Product Designer <br />
              Who Writes <br />
              Code
            </h1>
          </div>

          {/* Profile Container */}
          <div className={styles.profileContainer}>
            <Image
              className={styles.profileImage}
              src="/images/profile.png"
              alt="Ajay Sai profile image"
              width={60}
              height={60}
              priority // Ensures this loads first
            />
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

          {/* Skills Showcase */}
          <div className={styles.skillsShowcase}>
            {skillImages.map((src, index) => (
              <div key={index} className={styles.skillContainer}>
                <Image
                  key={index}
                  className={styles.skillIcon}
                  src={src}
                  alt={`Skill ${index + 1}`}
                  width={200} // Reduced for better responsiveness
                  height={200}
                />
              </div>
            ))}
          </div>

          {/* Current Work */}
          <div className={styles.currentWork}>
            <p className={styles.workText}>Currently Working at</p>
            <div className={styles.companyLogo}>
              <Image
                className={styles.companyImage}
                src="/images/worktual.svg"
                alt="Company logo"
                width={113}
                height={28}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.selectedWorks}>
          <div className={styles.heading}>
            <h2 className={styles.worksTitle}>Selected Case studies</h2>
            <div className={styles.line}></div>
          </div>

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

        <footer className={styles.footerContainer}>

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
      </main>
    </div>
  );
}
