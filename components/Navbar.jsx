import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <Image
              src="/static/logo.png"
              width="75px"
              height="75px"
              alt="website logo"
            />
          </a>
        </Link>
      </div>
      <ul>
        <Link href="/About">
          <li>
            <a className={router.pathname === "/About" ? "active" : ""}>
              About
            </a>
          </li>
        </Link>
        <Link href="/">
          <li>
            <a className={router.pathname === "/" ? "active" : ""}>Cards</a>
          </li>
        </Link>
        <Link href="https://github.com/Biplo12/next-immutable-app">
          <a target={"_blank"} rel="noreferrer">
            <Image
              src="/static/github-icon.png"
              alt="github icon"
              width="24px"
              height="24px"
            />
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
