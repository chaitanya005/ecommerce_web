import React from "react";
import styles from "./HomePage.module.css";

const HomePageTwo = () => {
  return (
    <div id="4eed70b1-6e57-4926-9b27-f4528842001f" className="clearfix">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.title}>
            <div
              width="162"
              height="50"
              //   className="css-go3l63-ImageContainer efaomd30"
              className={styles.cssGo3l63ImageContainer}
            >
              <div
                width="162"
                height="50"
                className="css-1p9telr-LoadingElement efaomd32"
              ></div>
              <img
                src="https://static.cure.fit/assets/images/eat-title.svg"
                alt="title-img"
                className="css-1ecv4qi-ImageElement efaomd31"
                loading="lazy"
                width="162"
                height="50"
              />
            </div>
          </div>

          <div className={styles.subTitle}>
            Healthy, Tasty, Everyday Food!
            <a href="eat.html" className={styles.explore}>
              <span>Explore</span>
              <img
                src="https://static.cure.fit/assets/images/back-arrow-pink.svg"
                alt="Go back"
                className={styles.arrow}
              />
            </a>
          </div>

          <div className={styles.verticalDesciption}>Indulge in healthy</div>
          <div id="image-accordian">
            <div className={styles.colx12}>
              <div className={styles.animation}>
                <ul className={styles.animationImg}>
                  <li
                    tabindex="0"
                    className={styles.aniEffect}
                    style={{ backgroundColor: "#181819" }}
                  >
                    <div className="css-0">
                      <div className="lazyload-wrapper">
                        <div
                          className={styles.active}
                          style={{ paddingTop: "initial" }}
                        >
                          <img
                            className="css-ahex7a-accordianImageRight-bgImage image-block "
                            alt=""
                            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/257e0d59-ebf5-406d-a775-ba22ed951dc8.png"
                            forceCheckDelay="1000"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <style
                          data-emotion-css="ahex7a-accordianImageRight-bgImage"
                        >
                          .css-ahex7a-accordianImageRight-bgImage {
                            height: 70%;
                            object-fit: cover;
                            float: right;
                            object-position: 20%;
                            height: 34em;
                            position: relative;
                            object-fit: cover;
                            object-position: 80% 0;
                          }</style> */

export default HomePageTwo;
