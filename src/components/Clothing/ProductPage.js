import React, { useState, useEffect } from "react";
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
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import db from "../../firebase";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, storeCart } from "../../features/cart/cart";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductPage = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [product, loading, error] = useDocument(
    db.collection("men-wear").doc(id)
  );
  const dispatch = useDispatch();
  const storedCartItems = useSelector(storeCart);
  const [isCartItem, setIsCartItem] = useState(false);

  const [availsizes, setAvailSizes] = useState([]);
  const [prodImages, setProdImages] = useState([]);
  const [sizeSelect, setSizeSelect] = useState();
  const [shakeSizes, setShakeSizes] = useState(false);
  // const [isSelected, setstate] = useState(initialState)

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    product && setAvailSizes(product.data().avail_sizes);
    product && setProdImages(product.data().images);
  }, [product]);

  const handleAddToCart = (productItem) => {
    let inCart = false;
    // console.log(newItem);
    // console.log(sizeSelect);
    if (sizeSelect !== undefined) {
      let newItem = { ...productItem, id, sizeSelect };
      if (storedCartItems.length >= 1) {
        for (let item of storedCartItems) {
          if (item.id === newItem.id) {
            setIsCartItem(true);
            setState({ ...state, open: true });
            setTimeout(() => {
              setState({ ...state, open: false });
            }, 1000);
            inCart = true;
            break;
          }
        }

        if (inCart === false) {
          dispatch(
            addToCart({
              newItem,
            })
          );
          setIsCartItem(false);
          setState({ ...state, open: true });
          setTimeout(() => {
            setState({ ...state, open: false });
          }, 1000);
        }
      } else {
        dispatch(
          addToCart({
            newItem,
          })
        );

        setIsCartItem(false);
        setState({ ...state, open: true });

        setTimeout(() => {
          setState({ ...state, open: false });
        }, 1000);
      }
      setShakeSizes(false);
    } else {
      setShakeSizes(true);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <style>{`
        body {
          background-color: #fff;
        }

        .sizeicons {
          animation: shake 0.5s;
        }

        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
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
                                style={{
                                  width: "30px",
                                  marginRight: "-30px",
                                  cursor: "pointer",
                                }}
                              >
                                <KeyboardArrowLeftIcon />
                              </div>
                            }
                            nextArrow={
                              <div
                                style={{
                                  width: "30px",
                                  marginLeft: "-30px",
                                  cursor: "pointer",
                                }}
                              >
                                <KeyboardArrowRightIcon />
                              </div>
                            }
                            // indicators={true}
                            transitionDuration={500}
                          >
                            {prodImages.map((slideImage, index) => (
                              <div
                                className="each-slide"
                                key={index}
                                // style={{ width: "400px", height: "400px" }}
                              >
                                <InnerImageZoom
                                  src={slideImage}
                                  zoomSrc={slideImage}
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
                    <h1 className="product-title">
                      {product && product.data().name}
                    </h1>
                    <hr className="divider" />
                    <div className="price-box">
                      <span className="old-price">
                        Rs.{product && product.data().actual_price}
                      </span>
                      <span className="product-price">
                        Rs. {product && product.data().price}
                      </span>
                    </div>
                    <div className="product-desc">
                      <p>{product && product.data().info}</p>
                    </div>
                    <div className="product-filters-container">
                      <div className="product-single-filter">
                        <label>Colors:</label>
                        <ul className="config-swatch-list">
                          <li className="active">
                            <a href="#/" style={{ backgroundColor: "#0188cc" }}>
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#/" style={{ backgroundColor: "#ab6e6e" }}>
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#/" style={{ backgroundColor: "#ddb577" }}>
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#/" style={{ backgroundColor: "#6085a5" }}>
                              {" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-single-filter">
                        <label>Sizes:</label>
                        {shakeSizes && sizeSelect === undefined ? (
                          <div>
                            <ul className="config-size-list sizeicons">
                              {availsizes.map((i) => (
                                <li>
                                  <Button
                                    onClick={() => setSizeSelect(i)}
                                    variant="outlined"
                                    style={{ fontSize: "14px" }}
                                  >
                                    {i}
                                  </Button>
                                </li>
                              ))}
                            </ul>
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                margin: "0",
                              }}
                            >
                              Please select size
                            </p>
                          </div>
                        ) : (
                          <ul className="config-size-list">
                            {availsizes.map((i) => (
                              <li>
                                {i === sizeSelect ? (
                                  <Button
                                    variant="contained"
                                    style={{ fontSize: "14px", margin: "3px" }}
                                    onClick={() => setSizeSelect(i)}
                                  >
                                    {i}
                                  </Button>
                                ) : (
                                  <Button
                                    variant="outlined"
                                    // size="small"
                                    style={{ fontSize: "14px", margin: "3px" }}
                                    onClick={() => setSizeSelect(i)}
                                  >
                                    {i}
                                  </Button>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <hr className="divider" />

                    <div className="product-action">
                      <Button
                        variant="contained"
                        className="btn btn-dark add-cart"
                        style={{ height: "4.5rem", marginRight: "1px" }}
                        startIcon={<ShoppingCartIcon />}
                        onClick={() => handleAddToCart(product.data())}
                      >
                        Add To Cart
                      </Button>
                      {/* <a
                        href="#/"
                        className="btn btn-dark add-cart"
                        title="Add to Cart"
                        style={{ height: "4.5rem", marginRight: "1px" }}
                      >
                        <ShoppingCartIcon />
                        Add to Cart
                      </a> */}
                      {/* <a
                        href="#cart.html"
                        className="btn btn-dark add-cart"
                        title="Add to Wishlist"
                        style={{ height: "4.5rem", backgroundColor: "#08c" }}
                      >
                        <FavoriteBorderIcon />
                        Add to wishlist
                      </a> */}
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
                  <p>{product && product.data().description}</p>
                  {/* <ul>
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
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          // message="Please  Login"
          key={vertical + horizontal}
          // style={{ background: "#fff", color: "#000" }}
        >
          {isCartItem ? (
            <Alert severity="error" onClose={handleClose}>
              Item Already in Cart
            </Alert>
          ) : (
            <Alert severity="success" onClose={handleClose}>
              Item Added Cart
            </Alert>
          )}
        </Snackbar>
      </main>
    </React.Fragment>
  );
};

export default ProductPage;
