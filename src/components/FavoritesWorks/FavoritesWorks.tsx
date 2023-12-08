import React from "react";
import styles from "./FavoritesWorks.module.css";
import { PROJECT } from "./data";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/src/components/Icons/ArrowIcon";

const FavoritesWorks = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.root__title}>Selected Work</h2>
      <ul className={styles.projects}>
        {PROJECT.map((project) => {
          return (
            <div key={project.link.path} className={styles.project}>
              <div className={styles.project__text}>
                <Link
                  href={project.link.path}
                  className={styles.project__logos}
                >
                  <Image
                    priority
                    src={project.images.logos}
                    width={70}
                    height={70}
                    alt=""
                  />
                </Link>
                <p className={styles.project__title}>{project.title}</p>
                <p className={styles.project__description}>
                  {project.description}
                </p>
                <Link href={project.link.path} className={styles.project__link}>
                  {project.link.name}
                  <ArrowIcon />
                </Link>
              </div>
              <Link
                href={project.link.path}
                className={styles.project__preview}
              >
                <Image
                  priority
                  width={457}
                  height={565}
                  src={project.images.preview}
                  alt=""
                  className={styles.preview__image}
                />
              </Link>
            </div>
          );
        })}
        <li></li>
      </ul>
    </section>
  );
};

export default FavoritesWorks;
