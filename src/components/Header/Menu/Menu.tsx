import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import { LINK_LIST, PUBLIC_MENU } from "@/src/components/Header/Menu/data";
import MoonIcon from "@/src/components/Icons/MoonIcon";
import Logo from "@/src/components/Logo/Logo";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menu__start}>
        <Link className={styles.logo} href={"/"}>
          <Logo />
        </Link>
        <ul className={styles.nav__ul}>
          {PUBLIC_MENU.map((link) => {
            return (
              <li key={link.name} className={styles.nav__li}>
                <Link className={styles.link} href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.menu__end}>
        <div className={styles.resource}>
          {LINK_LIST.map((link) => {
            return (
              <Link
                key={link.name}
                aria-label={link.name}
                className={styles.resource_link}
                href={link.path}
              >
                {link.img}
              </Link>
            );
          })}
        </div>
        <div className={styles.hr} />
        <button className={styles.theme}>
          <MoonIcon />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
