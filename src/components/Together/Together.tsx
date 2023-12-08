import React from "react";
import styles from "./Together.module.css";
import Link from "next/link";
import MailIcon from "@/src/components/Icons/MailIcon";

const Together = () => {
  return (
    <section className={styles.root}>
      <div>
        <h2 className={styles.title}>Let’s work together</h2>
        <p className={styles.description}>
          Want to discuss an opportunity to create something great?{" "}
          <br className={styles.br}></br>I’m ready when you are.
        </p>
      </div>
      <Link href={"contact"} className={styles.link}>
        <MailIcon />
        Get in Touch
      </Link>
    </section>
  );
};

export default Together;
