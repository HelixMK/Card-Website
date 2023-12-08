import React from "react";
import styles from "./Footer.module.css";
import { LINK_LIST, PUBLIC_MENU } from "@/src/components/Header/Menu/data";
import Link from "next/link";
import Logo from "@/src/components/Logo/Logo";

const Footer = () => {
  return (
    <>
      <div className={styles.hr}></div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <Logo type={"large"} />
            </div>
            <p className={styles.description}>
              Thanks for stopping by{" "}
              <span className={styles.description__emoji}>ッ</span>
            </p>
          </div>
          <p className={styles.copyrights}>
            © 2023 Eihab Khan. All Rights Reserved.
          </p>
        </div>
        <div className={styles.menu}>
          <div className={styles.menu__links}>
            <p className={styles.links__title}>Links</p>
            <ul className={styles.links__ul}>
              {PUBLIC_MENU.map((link) => {
                return (
                  <li key={link.name} className={styles.links__li}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.menu__elsewhere}>
            <p className={styles.links__title}>Elsewhere</p>
            <ul className={styles.links__ul}>
              {LINK_LIST.map((link) => {
                return (
                  <li key={link.name} className={styles.links__li}>
                    <Link
                      key={link.name}
                      href={link.path}
                      className={styles.elsewhere_link}
                    >
                      {link.img} {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
