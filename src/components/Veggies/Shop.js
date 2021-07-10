import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVeggies, storedVeggies } from "../../features/veggies";
import db from "../../firebase";
import { addToCart, storeCart } from "../../features/cart/cart";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Shop = () => {
  const dispatch = useDispatch();

  const storedVeggie = useSelector(storedVeggies);
  const storedCartItems = useSelector(storeCart);

  const [isCartItem, setIsCartItem] = useState(false);

  let allVeggies = [];

  useEffect(() => {
    db.collection("veggies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        let docu = doc.data();
        let id = doc.id;

        allVeggies = [...allVeggies, { veggieId: id, ...docu }];
      });
      // console.log(allVeggies);
      dispatch(
        saveVeggies({
          allVeggies,
        })
      );
    });
  }, []);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const [visible, setVisible] = useState(6);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleAddToCart = async (veggie) => {
    let inCart = false;

    if (storedCartItems.length >= 1) {
      for (let item of storedCartItems) {
        if (item.veggieId === veggie.veggieId) {
          setIsCartItem(true);
          setState({ ...state, open: true });
          inCart = true;
          break;
        }
      }

      if (inCart === false) {
        dispatch(
          addToCart({
            veggie,
          })
        );
        setIsCartItem(false);

        setState({ ...state, open: true });
      }
    } else {
      dispatch(
        addToCart({
          veggie,
        })
      );

      setState({ ...state, open: true });
    }

    /*  */

    /* setState({ ...state, open: true });

    setTimeout(() => {
      handleClose();
    }, 1000); */
  };

  const handleVisible = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <React.Fragment>
      <section
        className="
        after-head
        top-block-page
        with-back
        white-curve-after
        section-white-text
      "
      >
        <div className="overflow-back bg-orange"></div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid with-back">
            <div className="full-block">
              <div className="section-back-text">Shop</div>
              <img
                className="d-none-1 d-lg-block z-index-3"
                src="/assets/images/content/x/mandarin.png"
                alt=""
                data-size="280px"
                data-at="10%;bottom 35%"
                style={{ width: "400px" }}
              />
            </div>
            <div className="z-index-4 position-relative text-center">
              <h1 className="section-title">Fresh Veggies</h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/veggies">
                    Veggies
                  </a>
                  <span className="mx-2">\</span>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid row">
            {visible ? (
              <React.Fragment>
                {storedVeggie &&
                  storedVeggie.storeVeggies
                    .slice(0, visible)
                    .map((veggie, i) => (
                      <React.Fragment key={veggie.veggieId}>
                        {veggie.in_stock && (
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <article className="entity-block entity-hover-shadow">
                              <div
                                className="entity-preview-show-up entity-preview"
                                onClick={() => handleAddToCart(veggie)}
                                // href={`/veggies/shop/product?id=${veggie.veggieId}`}
                              >
                                <span className="embed-responsive embed-responsive-4by3">
                                  <img
                                    className="embed-responsive-item"
                                    src={veggie.img}
                                    alt=""
                                  />
                                </span>
                                <span className="with-back entity-preview-content">
                                  <span className="overflow-back bg-body-back opacity-70"></span>
                                  <span className="m-auto h1 text-theme text-center">
                                    <i className="fas fa-shopping-cart"></i>
                                  </span>
                                </span>
                              </div>
                              <div
                                className="fill-color-line"
                                data-role="fill-line"
                              >
                                <div
                                  className="opacity-30 fill-line-segment bg-theme"
                                  data-role="fill-line-segment"
                                  data-min-width="10"
                                  data-preffered-width="50"
                                  data-max-width="80"
                                ></div>
                                <div
                                  className="opacity-60 fill-line-segment bg-theme"
                                  data-role="fill-line-segment"
                                  data-min-width="10"
                                  data-preffered-width="50"
                                  data-max-width="80"
                                ></div>
                                <div
                                  className="fill-line-segment bg-theme"
                                  data-role="fill-line-segment"
                                  data-min-width="10"
                                  data-preffered-width="50"
                                  data-max-width="80"
                                ></div>
                              </div>
                              <div className="entity-content">
                                <h4 className="entity-title">
                                  <a className="content-link" href="#">
                                    {veggie.name} / {veggie.tel_name}
                                  </a>
                                </h4>
                                <p className="entity-text">{veggie.desc}</p>
                                <div className="entity-bottom-line">
                                  <div className="entity-price">
                                    <span className="currency">
                                      Rs. {veggie.price}
                                    </span>

                                    <span className="price-unit"> / kg</span>
                                    <span className="entity-price-old">
                                      Rs. {veggie.actual_price}
                                    </span>
                                  </div>
                                  <div className="entity-action-btns">
                                    <div
                                      className="btn-sm btn btn-theme"
                                      onClick={() => handleAddToCart(veggie)}
                                    >
                                      Add to cart
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        )}
                        {i ===
                          storedVeggie.storeVeggies.slice(0, visible).length -
                            1 && visible < storedVeggie.storeVeggies.length ? (
                          <div className="section-footer">
                            <div
                              className="btn-theme-white-bordered btn"
                              onClick={handleVisible}
                            >
                              View More
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </React.Fragment>
                    ))}
              </React.Fragment>
            ) : (
              ""
            )}
            {/* <div className="col-12 col-md-6 col-xl-4 d-flex">
              <article className="entity-block entity-hover-shadow">
                <a className="entity-preview-show-up entity-preview" href="/">
                  <span className="embed-responsive embed-responsive-4by3">
                    <img
                      className="embed-responsive-item"
                      src="/assets/images/content/720x540/cucumber.jpg"
                      alt=""
                    />
                  </span>
                  <span className="with-back entity-preview-content">
                    <span className="overflow-back bg-body-back opacity-70"></span>
                    <span className="m-auto h1 text-theme text-center">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                  </span>
                </a>
                <div className="fill-color-line" data-role="fill-line">
                  <div
                    className="opacity-30 fill-line-segment bg-theme"
                    data-role="fill-line-segment"
                    data-min-width="10"
                    data-preffered-width="50"
                    data-max-width="80"
                  ></div>
                  <div
                    className="opacity-60 fill-line-segment bg-theme"
                    data-role="fill-line-segment"
                    data-min-width="10"
                    data-preffered-width="50"
                    data-max-width="80"
                  ></div>
                  <div
                    className="fill-line-segment bg-theme"
                    data-role="fill-line-segment"
                    data-min-width="10"
                    data-preffered-width="50"
                    data-max-width="80"
                  ></div>
                </div>
                <div className="entity-content">
                  <h4 className="entity-title">
                    <a className="content-link" href="/">
                      Cucumber
                    </a>
                  </h4>
                  <p className="entity-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="entity-bottom-line">
                    <div className="entity-price">
                      <span className="currency">$</span>1.80
                      <span className="price-unit">/ kg</span>
                    </div>
                    <div className="entity-action-btns">
                      <a className="btn-sm btn btn-theme" href="#/">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <article className="entity-block entity-hover-shadow">
                <a className="entity-preview-show-up entity-preview" href="/">
                  <span className="embed-responsive embed-responsive-4by3">
                    <img
                      className="embed-responsive-item"
                      src="/assets/images/content/720x540/tomato.jpg"
                      alt=""
                    />
                  </span>
                  <span className="with-back entity-preview-content">
                    <span className="overflow-back bg-body-back opacity-70"></span>
                    <span className="m-auto h1 text-theme text-center">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                  </span>
                </a>
                <div className="fill-color-line" data-role="fill-line">
                  <div
                    className="opacity-30 fill-line-segment bg-theme"
                    data-role="fill-line-segment"
                    data-min-width="10"
                    data-preffered-width="50"
                    data-max-width="80"
                  ></div>
                  <div
                    className="opacity-60 fill-line-segment bg-theme"
                    data-role="fill-line-segment"
                    data-min-width="10"
                    data-preffered-width="50"
                    data-max-width="80"
                  ></div>
                  <div
                    className="fill-line-segment bg-theme"
                    data-role="fill-line-segment"
                    data-min-width="10"
                    data-preffered-width="50"
                    data-max-width="80"
                  ></div>
                </div>
                <div className="entity-content">
                  <h4 className="entity-title">
                    <a className="content-link" href="/">
                      Tomato
                    </a>
                  </h4>
                  <p className="entity-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="entity-bottom-line">
                    <div className="entity-price">
                      <span className="currency">$</span>3.29
                      <span className="price-unit">/ kg</span>
                    </div>
                    <div className="entity-action-btns">
                      <a className="btn-sm btn btn-theme" href="#/">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div> */}
          </div>
        </div>
      </section>
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
    </React.Fragment>
  );
};

export default Shop;
