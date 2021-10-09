import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "@mui/icons-material/Tune";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import {
  saveMenShirts,
  getMenShirts,
} from "../../features/men-shirts/menShirt";
import db from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
// import Button from "@mui/material/Button";
// import { addToCart, storeCart } from "../../features/cart/cart";
// import MuiAlert from "@material-ui/lab/Alert";
// import Snackbar from "@material-ui/core/Snackbar";

/* function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
} */

const Shop = () => {
  const [expanded, setExpanded] = useState("categories");
  const [menprod, loading, error] = useCollection(db.collection("men-wear"));
  const menShirts = useSelector(getMenShirts);
  const dispatch = useDispatch();
  // const [isCartItem, setIsCartItem] = useState(false);

  const [backDropOpen, setBackDropOpen] = useState(false);
  // const storedCartItems = useSelector(storeCart);

  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: "top",
  //   horizontal: "center",
  // });

  // const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setBackDropOpen(false);
  };
  const handleToggle = () => {
    setBackDropOpen(!backDropOpen);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

  let documents = [];

  useEffect(() => {
    menprod &&
      menprod.docs.map((prod) => {
        // console.log(prod.data());
        let docu = prod.data();
        let id = prod.id;
        documents = [...documents, { clothingId: id, ...docu }];
      });
    // console.log(documents);

    dispatch(
      saveMenShirts({
        documents,
      })
    );
  }, [menprod]);

  // console.log(menShirts);

  /* const handleAddToCart = (shirt) => {
    let inCart = false;
    let newItem = shirt;
    // console.log(shirt);

    if (storedCartItems.length >= 1) {
      for (let item of storedCartItems) {
        if (item.name === shirt.name) {
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
  }; */

  return (
    <React.Fragment>
      <Helmet>
        <style>{`
        body {
          background-color: #fff;
        }

        @media (max-width: 992px) {
          .filter-sidebar {
            display: none
          }
        }
      `}</style>

        <link rel="stylesheet" href="/assets/porto.css" />
        <link rel="stylesheet" href="/assets/style.css" />
        <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/css/theme.min.css" rel="stylesheet" />
      </Helmet>

      {/*<section
        className="
        after-head
        top-block-page
        with-back
        section-white-text
      "
      >
        <div
          className="overflow-back "
          // style={{ backgroundImage: "url(/images/category-bg.png)" }}
        >
          <div
            className="overflow-back cover-image mw-100"
            data-background="images/category-bg.png"
            style={{
              backgroundImage: `url(images/category-bg.jpg)`,
            }}
          ></div>
          <div className="overflow-back bg-body-back opacity-70"></div>
        </div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid">
            <div className="z-index-4 position-relative">
              <h1 className="section-title">Women Clothing</h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/">
                    Home
                  </a>
                  <span className="mx-2">\</span>
                  <a className="content-link" href="/veggies/shop">
                    WOMEN
                  </a>
                  <span className="mx-2">\</span>
                  <span>CLOTHING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>*/}

      <section
        className="
        after-head
        top-block-page
        with-back
        section-white-text
        actualwhite-curve-after
      "
        style={{ backgroundImage: "url('assets/images/parts/curve.png)" }}
      >
        <div className="category-banner position-relative">
          <figure className="mb-0">
            <img src="/images/category-bg.jpg" alt="background" />
          </figure>

          <div className="container justify-content-between position-absolute d-flex">
            <div
              className="banner-content banner-layer-left"
              data-animation-name="fadeIn"
              data-animation-duration="1200"
              data-animation-delay="200"
            >
              <h2 className="text-white font3 font-weight-normal">
                Summer Trends
              </h2>
              <h3 className="text-white mb-0 text-left text-uppercase">sale</h3>
            </div>

            <div
              className="banner-content banner-layer-right"
              data-animation-name="fadeIn"
              data-animation-duration="1200"
              data-animation-delay="400"
            >
              <h4
                className="
                  text-white
                  pl-2
                  font-weight-light
                  mb-0
                  text-left text-uppercase
                "
              >
                prices up to
              </h4>
              <h3
                className="
                  text-white
                  mb-0
                  text-sale
                  m-l-n-xs
                  text-left text-uppercase
                "
              >
                90%<small className="d-inline-block text-center">OFF</small>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-9">
            {/* <nav className="toolbox">
              <div className="toolbox-left">
                <div className="toolbox-item toolbox-sort">
                  <label>Sort By:</label>
                  <div className="select-custom">
                    <select name="orderby" className="form-control">
                      <option value="menu_order" selected="selected">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by newness</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show">
                  <label>Show:</label>

                  <div className="select-custom">
                    <select name="count" className="form-control">
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                    </select>
                  </div>
                </div>

                <div className="toolbox-item layout-modes">
                  <a
                    href="category.html"
                    className="layout-btn btn-grid active"
                    title="Grid"
                  >
                    <i className="icon-mode-grid"></i>
                  </a>
                  <a
                    href="category-list.html"
                    className="layout-btn btn-list"
                    title="List"
                  >
                    <i className="icon-mode-list"></i>
                  </a>
                </div>
              </div>
            </nav> */}
            <div className="sidebar-toggle" onClick={handleToggle}>
              <TuneIcon onClick={handleToggle} />
            </div>

            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={backDropOpen}
              // onClick={handleClose}
            >
              <Paper style={{ width: "50%" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "5%",
                    }}
                  >
                    <h3>FILTERS</h3>
                    <CloseIcon
                      style={{ marginTop: "3px", cursor: "pointer" }}
                      onClick={handleClose}
                    />
                  </div>

                  <Accordion
                    expanded={expanded === "categories"}
                    onChange={handleChange("categories")}
                    style={{ margin: "0px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{ margin: "0px" }}
                    >
                      <Typography
                        className="widget-title"
                        style={{ margin: "0px", fontSize: "1.3rem" }}
                      >
                        CATEGORIES
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="collapse show" id="widget-body-2">
                        <div className="widget-body">
                          <ul className="cat-list">
                            <li>
                              <a href="#/">SAREES</a>
                            </li>
                            <li>
                              <a href="#/">LEHNAGAS</a>
                            </li>
                            <li>
                              <a href="#/">HALF SAREES</a>
                            </li>
                            <li>
                              <a href="#/">KURITS &amp; MUCH MORE...</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "price"}
                    onChange={handleChange("price")}
                    style={{ margin: "0px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                      style={{ margin: "0px", fontSize: "1.3rem" }}
                    >
                      <Typography
                        className="widget-title"
                        style={{ margin: "0px" }}
                      >
                        PRICE
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                    // style={{ padding: "0px 12px 16px", height: "140px" }}
                    >
                      <div className="collapse show" id="widget-body-3">
                        <div className="widget-body" style={{ padding: "0" }}>
                          <form action="#">
                            <div className="price-slider-wrapper">
                              {/* <div
                        id="price-slider"
                        className="noUi-target noUi-ltr noUi-horizontal"
                      ></div> */}
                              <Slider
                                size="small"
                                defaultValue={[700, 1500]}
                                // aria-label="Default"
                                valueLabelDisplay="auto"
                                min={500}
                                max={3000}
                                step={200}
                                style={{ padding: "0" }}
                              />
                            </div>

                            <div
                              className="
                              filter-price-action
                              d-flex
                              align-items-center
                              justify-content-between
                              flex-wrap
                            "
                            >
                              <button type="submit" className="btn btn-primary">
                                Filter
                              </button>

                              <div className="filter-price-text">
                                Price:
                                <span id="filter-price-range">
                                  {" "}
                                  $200 - $400
                                </span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "size"}
                    onChange={handleChange("size")}
                    style={{ margin: "0px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{ margin: "0px", fontSize: "1.3rem" }}
                    >
                      <Typography
                        className="widget-title"
                        style={{ margin: "0px" }}
                      >
                        SIZE
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="collapse show" id="widget-body-4">
                        <div className="widget-body">
                          <ul className="cat-list">
                            <li>
                              <a href="#/">Small</a>
                            </li>
                            <li>
                              <a href="#/">Medium</a>
                            </li>
                            <li>
                              <a href="#/">Large</a>
                            </li>
                            <li>
                              <a href="#/">Extra Large</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "color"}
                    onChange={handleChange("color")}
                    style={{ margin: "0px", fontSize: "1.3rem" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      style={{ margin: "0px" }}
                    >
                      <Typography
                        className="widget-title"
                        style={{ margin: "0px" }}
                      >
                        COLOR
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="collapse show" id="widget-body-6">
                        <div className="widget-body">
                          <ul
                            className="config-swatch-list"
                            style={{ margin: "0", fontSize: "1.3rem" }}
                          >
                            <li className="active" style={{ display: "flex" }}>
                              <a href="#/" style={{ backgroundColor: "#000" }}>
                                {" "}
                              </a>
                              <span>Black</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#0188cc" }}
                              >
                                {" "}
                              </a>
                              <span>Blue</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#81d742" }}
                              >
                                {" "}
                              </a>
                              <span>Green</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#6085a5" }}
                              >
                                {" "}
                              </a>
                              <span>Indigo</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#ab6e6e" }}
                              >
                                {" "}
                              </a>
                              <span>Red</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#ddb373" }}
                              >
                                {" "}
                              </a>
                              <span>Brown</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#6b97bf" }}
                              >
                                {" "}
                              </a>
                              <span>Light-Blue</span>
                            </li>
                            <li style={{ display: "flex" }}>
                              <a
                                href="#/"
                                style={{ backgroundColor: "#eded68" }}
                              >
                                {" "}
                              </a>
                              <span>Yellow</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Paper>
            </Backdrop>

            <div className="row">
              {menShirts &&
                menShirts.menshirts.map((shirt) => (
                  <div
                    className="col-6 col-sm-4"
                    key={shirt.name}
                    // href={`/product?id=${shirt.clothingId}`}
                  >
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href={`/product?id=${shirt.clothingId}`}>
                          <img
                            src={shirt.img}
                            alt=""
                            style={{ borderRadius: "5px" }}
                          />
                        </a>
                        <div className="label-group">
                          <div
                            className="product-label label-hot"
                            // style={{ backgroundColor: "#62b959" }}
                          >
                            -20%
                          </div>
                          {/* <div
                            className="product-label label-sale"
                            // style={{ backgroundColor: "#e27c7c" }}
                          >
                            -20%
                          </div> */}
                        </div>
                        {/* <div className="btn-icon-group">
                          <button
                            className="btn-icon btn-add-cart"
                            data-toggle="modal"
                            data-target="#addCartModal"
                            onClick={() => handleAddToCart(shirt)}
                          >
                            <LocalMallIcon />
                          </button>
                        </div> */}
                        <a
                          href={`/product?id=${shirt.clothingId}`}
                          className="btn-quickview"
                          title="Quick View"
                          style={{ borderRadius: "0px 0px 5px 5px" }}
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a href="#/" className="product-category">
                              {shirt.categoryType}
                            </a>
                          </div>
                          <a href="#/" className="btn-icon-wish">
                            {/* <i className="icon-heart"></i> */}
                            <FavoriteBorderIcon />
                          </a>
                        </div>
                        <h2 className="product-title">
                          <a href={`/product?id=${shirt.clothingId}`}>
                            {shirt.name}
                          </a>
                        </h2>
                        {/* <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{ width: "100%" }}></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                    </div> */}
                        <div className="price-box">
                          <span className="old-price">
                            Rs.{shirt.actual_price}
                          </span>
                          <span
                            className="product-price"
                            style={{ fontWeight: "800", fontSize: "1.5rem" }}
                          >
                            Rs.{shirt.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* <Snackbar
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
                    Item Added to Cart
                  </Alert>
                )}
              </Snackbar> */}
            </div>
          </div>
          <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar filter-sidebar">
            <Accordion
              expanded={expanded === "categories"}
              onChange={handleChange("categories")}
              style={{ margin: "0px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="widget-title">Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="collapse show" id="widget-body-2">
                  <div className="widget-body">
                    <ul className="cat-list">
                      <li>
                        <a href="#/">SAREES</a>
                      </li>
                      <li>
                        <a href="#/">LEHNAGAS</a>
                      </li>
                      <li>
                        <a href="#/">HALF SAREES</a>
                      </li>
                      <li>
                        <a href="#/">KURITS &amp; MUCH MORE...</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "price"}
              onChange={handleChange("price")}
              style={{ margin: "0px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="widget-title">PRICE</Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ padding: "0px 12px 16px", height: "140px" }}
              >
                <div className="collapse show" id="widget-body-3">
                  <div className="widget-body" style={{ padding: "0" }}>
                    <form action="#">
                      <div className="price-slider-wrapper">
                        {/* <div
                      id="price-slider"
                      className="noUi-target noUi-ltr noUi-horizontal"
                    ></div> */}
                        <Slider
                          // size="small"
                          defaultValue={[700, 1500]}
                          // aria-label="Default"
                          valueLabelDisplay="auto"
                          min={500}
                          max={3000}
                          step={200}
                        />
                      </div>

                      <div
                        className="
                        filter-price-action
                        d-flex
                        align-items-center
                        justify-content-between
                        flex-wrap
                      "
                      >
                        <button type="submit" className="btn btn-primary">
                          Filter
                        </button>

                        <div className="filter-price-text">
                          Price:
                          <span id="filter-price-range"> $200 - $400</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "size"}
              onChange={handleChange("size")}
              style={{ margin: "0px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="widget-title">SIZE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="collapse show" id="widget-body-4">
                  <div className="widget-body">
                    <ul className="cat-list">
                      <li>
                        <a href="#/">Small</a>
                      </li>
                      <li>
                        <a href="#/">Medium</a>
                      </li>
                      <li>
                        <a href="#/">Large</a>
                      </li>
                      <li>
                        <a href="#/">Extra Large</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "color"}
              onChange={handleChange("color")}
              style={{ margin: "0px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="widget-title">COLOR</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="collapse show" id="widget-body-6">
                  <div className="widget-body">
                    <ul
                      className="config-swatch-list"
                      style={{ margin: "0", fontSize: "1.3rem" }}
                    >
                      <li className="active" style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#000" }}>
                          {" "}
                        </a>
                        <span>Black</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#0188cc" }}>
                          {" "}
                        </a>
                        <span>Blue</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#81d742" }}>
                          {" "}
                        </a>
                        <span>Green</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#6085a5" }}>
                          {" "}
                        </a>
                        <span>Indigo</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#ab6e6e" }}>
                          {" "}
                        </a>
                        <span>Red</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#ddb373" }}>
                          {" "}
                        </a>
                        <span>Brown</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#6b97bf" }}>
                          {" "}
                        </a>
                        <span>Light-Blue</span>
                      </li>
                      <li style={{ display: "flex" }}>
                        <a href="#/" style={{ backgroundColor: "#eded68" }}>
                          {" "}
                        </a>
                        <span>Yellow</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
