import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Fruits = () => {
  const color = "#FFBAB5";
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="/assets/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
          defer
        />
        <link
          href="/assets/css/theme.min.css"
          rel="stylesheet"
          type="text/css"
          async
        />
        <link
          href="/assets/animate.css/animate.min.css"
          rel="stylesheet"
          type="text/css"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
          type="text/css"
          //   rel="preload"
          as="font"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          type="text/css"
          //   rel="preload"
          as="font"
        />
      </Helmet>
      {/* <section
        className="
        after-head
        top-block-page
        with-back
        white-curve-after
        section-white-text
      "
      >
        <div className="overflow-back bg-pink"></div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid with-back">
            <div className="full-block">
              <div className="section-back-text">Fruits</div>
              <img
                className="d-none-1 d-lg-block z-index-3"
                src=""
                alt=""
                data-size="280px"
                data-at="10%;bottom 35%"
                style={{ width: "400px" }}
              />
            </div>
            <div className="z-index-4 position-relative text-center">
              <h1 className="section-title" style={{ fontWeight: "800" }}>
                Fresh Fruits
              </h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/">
                    Home
                  </a>
                  <span className="mx-2">\</span>
                  <span>Fruits Shop</span>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="
      "
      >
        <div className="section-white-text entity-banner content-offs section-solid justify-content-center bg-pink">
          <div className="container text-center text-lg-left flex-0 entity-content">
            <div className="my-auto position-relative align-items-lg-center flex-0 row">
              <div className="full-block">
                <div className="section-back-text">Fruits</div>
              </div>
              <div className="m-lg-auto d-flex z-index-2 position-relative col">
                <img
                  className="m-auto col-auto mw-100"
                  src="assets/images/content/x/plate-2.png"
                  alt=""
                />
              </div>
              <div className="col-lg-5 mr-lg-5 mt-5 my-lg-auto order-lg-first z-index-4 position-relative">
                <h2 className="h1 entity-title">
                  Fresh Fruits<span className="text-light-green"></span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="
          
        "
      >
        <div
          className="overflow-back cover-image"
          //   data-background="/assets/images/content/x/background-citric-citrus-1549040.jpg"
          style={{
            backgroundImage:
              "url(/assets/images/content/x/background-citric-citrus-1549040.jpg)",
          }}
        ></div>

        <div className="overflow-back bg-dark-lime-green opacity-50"></div>

        <div className="section-head">
          <div className="section-icon">
            <span
              className="svg-fill-white svg-content"
              //   data-svg="/assets/images/svg/title-avocado.svg"
              style={{
                backgroundImage: "url(/assets/images/svg/title-avocado.svg)",
              }}
            ></span>
          </div>
          <div className="section-head-content">
            <h2 className="section-title">Trending Products</h2>
            <p className="section-text">All the best items for You</p>
          </div>
        </div>
        <div className="container">
          <div className="grid justify-content-center row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="entity-block entity-hover-shadow bg-white text-center">
                <div className="my-3 entity-image">
                  <div className="embed-responsive embed-responsive-4by3">
                    <img
                      className="embed-responsive-item"
                      src="assets/images/content/720x540/banana.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="entity-bg"
                  data-bg="#EBFF9B"
                  style={{ background: "#EBFF9B", borderRadius: "0.5rem" }}
                ></div>
                <div className="pt-0 entity-content">
                  <h4 className="entity-title">
                    <a className="content-link" href="#">
                      Banana
                    </a>
                  </h4>
                  <div className="entity-price">
                    <span className="currency">Rs.</span>3.99
                    <span className="price-unit">/ kg</span>
                  </div>
                  <div className="mt-4 entity-action-btns">
                    <a className="btn-wide btn btn-theme" href="#">
                      add to cart
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="entity-block entity-hover-shadow bg-white text-center">
                <div className="my-3 entity-image">
                  <div className="embed-responsive embed-responsive-4by3">
                    <img
                      className="embed-responsive-item"
                      src="assets/images/content/720x540/blueberry.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="entity-bg"
                  data-bg="#CAD9FF"
                  style={{ background: "#CAD9FF", borderRadius: "0.5rem" }}
                ></div>
                <div className="pt-0 entity-content">
                  <h4 className="entity-title">
                    <a className="content-link" href="#">
                      Blueberry
                    </a>
                  </h4>
                  <div className="entity-price">
                    <span className="currency">Rs.</span>12.50
                    <span className="price-unit">/ kg</span>
                  </div>
                  <div className="mt-4 entity-action-btns">
                    <a className="btn-wide btn btn-theme" href="#">
                      add to cart
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <article className="entity-block entity-hover-shadow bg-white text-center">
                <div className="my-3 entity-image">
                  <div className="embed-responsive embed-responsive-4by3">
                    <img
                      className="embed-responsive-item"
                      src="assets/images/content/720x540/orange.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="entity-bg"
                  data-bg="#FFDD9D"
                  style={{ background: "#FFDD9D", borderRadius: "0.5rem" }}
                ></div>
                <div className="pt-0 entity-content">
                  <h4 className="entity-title">
                    <a className="content-link" href="#">
                      Orange
                    </a>
                  </h4>
                  <div className="entity-price">
                    <span className="currency">Rs.</span>4.99
                    <span className="price-unit">/ kg</span>
                  </div>
                  <div className="mt-4 entity-action-btns">
                    <a className="btn-wide btn btn-theme" href="#">
                      add to cart
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="section-footer">
          <a className="btn btn-theme" href="#">
            view more&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <br />
      </section>
    </React.Fragment>
  );
};

export default Fruits;
