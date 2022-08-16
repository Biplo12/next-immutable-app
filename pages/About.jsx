import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.scss";
const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>ImmutableX API App</h1>
        <h2>Created using Next.js + ImmutableX API + SASS</h2>
        <h3>
          This project is created as recruitment task for company named
          <b>ANFATA GAMES sp. z o.o.</b>
        </h3>
      </div>
    </>
  );
};

export default About;
