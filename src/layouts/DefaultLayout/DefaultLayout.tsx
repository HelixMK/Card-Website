import { Inter } from "next/font/google";
import React, { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import headerSvg from "./assets/header-gradient.svg";
import footerSvg from "./assets/footer-gradient.svg";
import Header from "@/src/components/Header/Header";
import styles from "./DefaultLayout.module.css";
import classNames from "classnames";
import Footer from "@/src/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
interface DefaultLayoutProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | ReactNode[];
}

const DefaultLayout = ({ children, className }: DefaultLayoutProps) => {
  return (
    <div className={classNames(styles.root, inter.className)}>
      <div
        className={`overflow-hidden bg-light-bg p-0 transition duration-700 dark:bg-black`}
      >
        <div className={`absolute inset-x-0 top-0 select-none`}>
          <div className={`relative h-[550px] w-full overflow-hidden`}>
            <picture
              className={`absolute left-1/2 top-0 z-[2] block h-[550px] w-[1440px] -translate-x-1/2 select-none`}
            >
              <Image priority src={headerSvg} alt="" />
            </picture>
          </div>
        </div>
        <Header />
        <main className={styles.main}>{children}</main>
        <footer
          className={`relative mt-16 min-h-[326px] pb-32 md:pb-12 ${styles.footer}`}
        >
          <Footer />
          <div className={`absolute inset-x-0 bottom-0 h-[550px]`}>
            <div className={`relative h-full w-full overflow-hidden`}>
              <picture
                className={`absolute bottom-0 left-1/2 block h-[550px] w-[1440px] -translate-x-1/2 select-none`}
              >
                <Image priority src={footerSvg} alt="" />
              </picture>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
