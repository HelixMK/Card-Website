import styles from "./index.module.css";
import React from "react";
import Author from "@/src/components/Author/Author";
import FavoritesWorks from "@/src/components/FavoritesWorks/FavoritesWorks";
import KnowMe from "@/src/components/KnowMe/KnowMe";
import Together from "@/src/components/Together/Together";

export default function Home() {
  return (
    <div className={styles.root}>
      <Author />
      <FavoritesWorks />
      <KnowMe />
      <Together />
    </div>
  );
}
