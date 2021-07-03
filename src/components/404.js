import React from "react";
import { Helmet } from "react-helmet";
import styles from "./404.module.css";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Exploiting | Page Not Found</title>{" "}
      </Helmet>
      <div id={styles.notfound}>
        <div class={styles.notfound}>
          <div class={styles.notfound404}>
            <h1 id={styles.oops}>Oops!</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="/">Go To Homepage</a>
        </div>
      </div>
    </>
  );
};

export default Error;
