import React, { useState } from "react";
import { Helmet } from "react-helmet";
// import ReactImageMagnify from "react-image-magnify";
// import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductPage = () => {
  const images = [
    { url: "images/product-1-big.jpg" },
    { url: "images/product-4-big.jpg" },
    { url: "images/product-2-big.jpg" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <style>{`
        body {
          background-color: #fff;
        }
      `}</style>
        <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/theme.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/porto.css" />
        <link rel="stylesheet" href="/assets/style.css" />
      </Helmet>
      <main className="main" style={{ marginTop: "2%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 main-content">
              <div className="product-single-container product-single-default">
                <div className="row">
                  <div className="col-lg-7 col-md-6 product-single-gallery">
                    <div className="product-slider-container">
                      <div class="product-single-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="product-item">
                          {/* <img
                            className="product-single-image"
                            src="images/product-1-big.jpg"
                            data-zoom-image="assets/images/products/zoom/product-1-big.jpg"
                            alt=""
                          /> */}

                          {/* 
                            <SimpleImageSlider
                              className="product-single-image"
                              width={400}
                              height={400}
                              images={images}
                            />
                           */}
                          <Slide
                            infinite={true}
                            autoplay={false}
                            prevArrow={
                              <div
                                style={{ width: "30px", marginRight: "-30px" }}
                              >
                                <KeyboardArrowLeftIcon />
                              </div>
                            }
                            nextArrow={
                              <div
                                style={{ width: "30px", marginLeft: "-30px" }}
                              >
                                <KeyboardArrowRightIcon />
                              </div>
                            }
                            // indicators={true}
                            transitionDuration={500}
                          >
                            {images.map((slideImage, index) => (
                              <div
                                className="each-slide"
                                key={index}
                                // style={{ width: "400px", height: "400px" }}
                              >
                                <InnerImageZoom
                                  src={slideImage.url}
                                  zoomSrc={slideImage.url}
                                  fullscreenOnMobile={true}
                                />
                              </div>
                            ))}
                          </Slide>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6 product-single-details">
                    <h1 className="product-title">Product Long Name</h1>
                    <hr className="divider" />
                    <div className="price-box">
                      <span className="old-price">$81.00</span>
                      <span className="product-price">$101.00</span>
                    </div>
                    <div className="product-desc">
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non.
                      </p>
                    </div>
                    <div className="product-filters-container">
                      <div className="product-single-filter">
                        <label>Colors:</label>
                        <ul className="config-swatch-list">
                          <li className="active">
                            <a
                              href="#/"
                              style={{ backgroundColor: "#0188cc" }}
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#/"
                              style={{ backgroundColor: "#ab6e6e" }}
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#/"
                              style={{ backgroundColor: "#ddb577" }}
                            ></a>
                          </li>
                          <li>
                            <a
                              href="#/"
                              style={{ backgroundColor: "#6085a5" }}
                            ></a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-single-filter">
                        <label>Sizes:</label>
                        <ul className="config-size-list">
                          <li className="active">
                            <a href="#">S</a>
                          </li>
                          <li>
                            <a href="#">M</a>
                          </li>
                          <li>
                            <a href="#">L</a>
                          </li>
                          <li>
                            <a href="#">XL</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <hr className="divider" />

                    <div className="product-action">
                      <a
                        href="#cart.html"
                        className="btn btn-dark add-cart"
                        title="Add to Cart"
                        style={{ height: "4.5rem", marginRight: "1px" }}
                      >
                        <ShoppingCartIcon />
                        Add to Cart
                      </a>
                      <a
                        href="#cart.html"
                        className="btn btn-dark add-cart"
                        title="Add to Wishlist"
                        style={{ height: "4.5rem", backgroundColor: "#08c" }}
                      >
                        <FavoriteBorderIcon />
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-single-tabs">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="product-tab-desc"
                  data-toggle="tab"
                  href="#product-desc-content"
                  role="tab"
                  aria-controls="product-desc-content"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              {/* <li class="nav-item">
                <a
                  class="nav-link"
                  id="product-tab-more-info"
                  data-toggle="tab"
                  href="#product-more-info-content"
                  role="tab"
                  aria-controls="product-more-info-content"
                  aria-selected="false"
                >
                  More Info
                </a>
              </li> */}
            </ul>
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="product-desc-content"
                role="tabpanel"
                aria-labelledby="product-tab-desc"
              >
                <div class="product-desc-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat.
                  </p>
                  <ul>
                    <li>
                      <i class="fa fa-check-circle"></i>Any Product types that
                      You want - Simple, Configurable
                    </li>
                    <li>
                      <i class="fa fa-check-circle"></i>Downloadable/Digital
                      Products, Virtual Products
                    </li>
                    <li>
                      <i class="fa fa-check-circle"></i>Inventory Management
                      with Backordered items
                    </li>
                  </ul>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, <br />
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductPage;
