import React from "react";
import styles from "./Restaurants.module.css";

const PopularBrands = () => {
  return (
    <section className="bg-light-green white-curve-before curve-before-0 white-curve-after curve-after-40 section-solid">
      <div className="overflow-back bg-vegetables-pattern opacity-10"></div>
      <div className="full-block"></div>
      <div className="section-head container left">
        <div className="section-icon">
          <span
            className="svg-fill-dark-lime-green svg-content"
            data-svg="assets/images/svg/title-kiwi.svg"
          ></span>
        </div>
        <div className="section-head-content">
          <h2 className="section-title">Popular Restaurants</h2>
          <p className="section-text">All the best items for You</p>
        </div>
      </div>
      <div className="container" style={{ marginTop: "3%" }}>
        <div className={styles.mainrow}>
          <div className="">
            <div className={styles.row}>
              <div className="col-md-4 col-sm-6 mb-4 pb-2">
                <div
                  className="
                    list-card
                    bg-white
                    rounded
                    overflow-hidden
                    position-relative
                    shadow-sm
                "
                >
                  <div className="list-card-image">
                    <div
                      className="star position-absolute"
                      style={{ right: "8px", bottom: "8px" }}
                    >
                      <span className="badge badge-success">
                        <i className="icofont-star"></i> 3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <a href="detail.html">
                        {/*                   <i className="icofont-heart"></i> */}
                      </a>
                    </div>
                    {/* <div
                      className="member-plan position-absolute"
                      style={{ left: "8px", top: "8px" }}
                    >
                      <span className={styles.badgeDark}>Promoted</span>
                    </div> */}
                    <a href="detail.html">
                      <img
                        src="/img/list/1.png"
                        className="img-fluid item-img"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="p-3 position-relative"
                    style={{ background: "#292830" }}
                  >
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="detail.html" className={styles.title}>
                          World Famous
                        </a>
                      </h6>
                      <p
                        className="text-gray mb-3"
                        style={{ color: "#747d88" }}
                      >
                        North Indian • American • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span
                          className="
                            bg-light
                            text-dark
                            rounded-sm
                            pl-2
                            pb-1
                            pt-1
                            pr-2
                        "
                        >
                          <i className="icofont-wall-clock"></i> 20–25 min
                        </span>
                        <span
                          className="float-right "
                          style={{ color: "#fff" }}
                        >
                          $250 FOR TWO
                        </span>
                      </p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-success"></span>
                      <small style={{ color: "#fff" }}></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4 pb-2">
                <div
                  className="
                    list-card
                    bg-white
                    h-100
                    rounded
                    overflow-hidden
                    position-relative
                    shadow-sm
                "
                >
                  <div className="list-card-image">
                    <div
                      className="star position-absolute"
                      style={{ right: "8px", bottom: "8px" }}
                    >
                      <span className="badge badge-success">
                        <i className="icofont-star"></i> 3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <a href="detail.html">
                        {/*                   <i className="icofont-heart"></i> */}
                      </a>
                    </div>
                    {/* <div
                      className="member-plan position-absolute"
                      style={{ left: "8px", top: "8px" }}
                    >
                      <span className={styles.badgeDark}>Promoted</span>
                    </div> */}
                    <a href="detail.html">
                      <img
                        src="/img/list/1.png"
                        className="img-fluid item-img"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="p-3 position-relative"
                    style={{ background: "#292830" }}
                  >
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="detail.html" className={styles.title}>
                          World Famous
                        </a>
                      </h6>
                      <p
                        className="text-gray mb-3"
                        style={{ color: "#747d88" }}
                      >
                        North Indian • American • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span
                          className="
                            bg-light
                            text-dark
                            rounded-sm
                            pl-2
                            pb-1
                            pt-1
                            pr-2
                            "
                        >
                          <i className="icofont-wall-clock"></i> 20–25 min
                        </span>
                        <span
                          className="float-right "
                          style={{ color: "#fff" }}
                        >
                          $250 FOR TWO
                        </span>
                      </p>
                    </div>
                    {/* <div className="list-card-badge">
                      <span className="badge badge-success">OFFER</span>
                      <small style={{ color: "#fff" }}>
                        65% off | Use Coupon OSAHAN50
                      </small>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4 pb-2">
                <div
                  className="
                    list-card
                    bg-white
                    rounded
                    overflow-hidden
                    position-relative
                    shadow-sm
                    "
                >
                  <div className="list-card-image">
                    <div
                      className="star position-absolute"
                      style={{ right: "8px", bottom: "8px" }}
                    >
                      <span className="badge badge-success">
                        <i className="icofont-star"></i> 3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <a href="detail.html">
                        {/*                   <i className="icofont-heart"></i> */}
                      </a>
                    </div>
                    {/*  <div
                      className="member-plan position-absolute"
                      style={{ left: "8px", top: "8px" }}
                    >
                      <span className={styles.badgeDark}>Promoted</span>
                    </div> */}
                    <a href="detail.html">
                      <img
                        src="/img/list/1.png"
                        className="img-fluid item-img"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="p-3 position-relative"
                    style={{ background: "#292830" }}
                  >
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a href="detail.html" className={styles.title}>
                          World Famous
                        </a>
                      </h6>
                      <p
                        className="text-gray mb-3"
                        style={{ color: "#747d88" }}
                      >
                        North Indian • American • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span
                          className="
                            bg-light
                            text-dark
                            rounded-sm
                            pl-2
                            pb-1
                            pt-1
                            pr-2
                        "
                        >
                          <i className="icofont-wall-clock"></i> 20–25 min
                        </span>
                        <span
                          className="float-right "
                          style={{ color: "#fff " }}
                        >
                          $250 FOR TWO
                        </span>
                      </p>
                    </div>
                    {/* <div className="list-card-badge">
                      <span className="badge badge-success">OFFER</span>
                      <small style={{ color: "#fff" }}>
                        65% off | Use Coupon OSAHAN50
                      </small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-footer">
        <a className="btn-theme-white-bordered btn" href="/food/restaurants">
          View all
        </a>
      </div>
    </section>
  );
};

export default PopularBrands;
