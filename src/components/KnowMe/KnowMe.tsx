import React from "react";
import styles from "./KnowMe.module.css";
import { KNOW_ME } from "@/src/components/KnowMe/data";
import Link from "next/link";
import Image from "next/image";

const KnowMe = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.root__title}>Get to know me</h2>
      <ul className={styles.lists}>
        {KNOW_ME.map((list) => {
          return (
            <li key={list.title}>
              <Link href={list.link} className={styles.lists__item}>
                <div>
                  <p className={styles.item__title}>{list.title}</p>
                  <p className={styles.item__description}>{list.description}</p>
                </div>
                <Image src={list.image} alt={list.title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default KnowMe;
