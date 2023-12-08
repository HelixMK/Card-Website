import React from "react";
import styles from "./Header.module.css";
import Menu from "@/src/components/Header/Menu/Menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
};

export default Header;
