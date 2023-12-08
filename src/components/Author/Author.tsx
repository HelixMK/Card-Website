import React from "react";
import styles from "./Author.module.css";
import Link from "next/link";
import Image from "next/image";
import authorImg from "./assets/photo.png";

const Author = () => {
  return (
    <section className={styles.author}>
      <div className={styles.author__block}>
        <div>
          <h1 className={styles.author__title}>
            I'm <span className={styles.title__name}>Maksim Kasatkin</span>
          </h1>
          <p className={styles.author__description}>
            A back-end developer and DevOps engineer. I specialize in create
            RESTful API and CI/CD.
          </p>
        </div>
        <div className={styles.author__links}>
          <Link href={"#1"} className={styles.link__resume}>
            See my resume
          </Link>
          <Link href={"#2"} className={styles.link__contact}>
            Get in touch
          </Link>
        </div>
      </div>
      <div className={styles.author__photo}>
        <picture className={styles.photo__block}>
          <div className={styles.photo__backgroud}></div>
          <Image
            className={styles.photo__img}
            priority
            src={authorImg}
            alt="Author"
          />
        </picture>
      </div>
    </section>
  );
};

export default Author;
