import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import db from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { getUserUid } from "../../features/user/userSlice";
import {
  addToCart,
  removeItem,
  storeCart,
  updateCart,
} from "../../features/cart/cart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { saveVeggies, storedVeggies } from "../../features/veggies";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  cartPaper: {
    // position: '',
    // width: '60%',
    marginTop: 30,
    // color: '#000',
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 600,
    overflow: "auto",
  },

  paper: {
    marginTop: 30,
    padding: theme.spacing(2, 4, 3),
  },

  cartCard: {
    marginTop: 10,
    width: 500,
    // height: 200,
    boxShadow: "none",
    border: "1px solid  #eaeaec",
    display: "flex",
    flexDirection: "column",
  },

  cartImg: {
    width: 100,
    margin: 10,
    // borderRadius: 10
    // height: 150
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    maxWidth: 300,
  },

  buttons: {
    minWidth: 30,
    marginTop: 6,
    height: 22,
    backgroundColor: "#343a40db",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#343A40",
    },
  },

  deleteIcon: {
    marginTop: 10,
    marginRight: 10,
    cursor: "pointer",
  },
}));

let cartStore;

const Cart = () => {
  const dispatch = useDispatch();
  cartStore = useSelector(storeCart);

  const uId = useSelector(getUserUid);
  const history = useHistory();

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

  let yourBill = 0;
  let marketPrice = 0;
  let saveTotal = 0;

  for (let item of cartStore) {
    yourBill = yourBill + item.newPrice;
    marketPrice += item.actual_price * item.qty;
  }

  saveTotal += marketPrice - yourBill;

  // console.log(cartStore);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const storedVeggie = useSelector(storedVeggies);

  const [showLoginBtn, setShowLoginBtn] = useState(false);

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  let flag = 0;
  const handleCheckout = () => {
    setState({ ...state, open: true });
    /* if (!uId) {
      setState({ ...state, open: true });
      window.scrollTo(0, 0);
    } else {
      // window.location.reload();

      if (flag === 0) {
        for (let veggie of storedVeggie.storeVeggies) {
          for (let cartItems of cartStore) {
            if (cartItems.name === veggie.name) {
              if (
                cartItems.price !== veggie.price ||
                cartItems.in_stock !== veggie.in_stock
              ) {
                window.location.reload();
                flag = 1;
              }
            }
          }
        }
        if (flag === 0) {
          history.push("/checkout");
          window.scrollTo(0, 0);
        }
      }
    } */
  };

  return (
    <React.Fragment>
      {/* <Container>
      <div>
        <Paper className={classes.cartPaper}>
          <H3>My Cart ({cartStore.length}) </H3>
          <Divider />

          {cartStore &&
            cartStore.map((item) => <CartItems key={item.id} item={item} />)}
        </Paper>
      </div>
      <Divider variant="vertical" />
      <div style={{ marginLeft: "50px" }}>
        <Paper className={classes.paper}>
          <H4>Price Details ({cartStore.length} Items)</H4>
          <div>
            <div>Total MRP: {}</div>
          </div>
        </Paper>
      </div>
    </Container> */}
      <Helmet>
        <title>Spont Store | Cart </title>{" "}
      </Helmet>
      <section
        className="
        after-head
        top-block-page
        with-back
        white-curve-after
        section-white-text
      "
      >
        <div className="overflow-back">
          <BgImage
            className="overflow-back cover-image mw-100"
            data-background="assets/images/content/1920x1080/antioxidant-carrot-diet-33307.jpg"
          ></BgImage>
          <div className="overflow-back bg-body-back opacity-70"></div>
        </div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid">
            <div className="z-index-4 position-relative">
              <h1 className="section-title">Cart</h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/veggies">
                    Veggies
                  </a>
                  <span className="mx-2">\</span>
                  <a className="content-link" href="/veggies/shop">
                    Shop
                  </a>
                  <span className="mx-2">\</span>
                  <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-0 section">
        <form className="container" action="#" method="POST">
          <div className="cart-items">
            <div className="cart-header">
              <h2 className="cart-title">Products in Your Cart</h2>
              <div className="cart-item-title">Product</div>
              <div className="cart-item-price">Price</div>
              <div className="cart-item-quantity">Quantity</div>
              <div className="cart-item-total">Total</div>
              <div className="cart-item-remove"></div>
            </div>
            {cartStore.length === 0 ? (
              <React.Fragment>
                <br />
                <h4 style={{ textAlign: "center" }}>No items in cart</h4>
                <br />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {cartStore.map((cartItem) => (
                  <CartItems cartItem={cartItem} />
                ))}
              </React.Fragment>
            )}
            {/* <div className="cart-item-entity">
              <div className="cart-item-image">
                <a
                  className="entity-preview-show-up entity-preview"
                  href="shop-product-sidebar-right.html"
                >
                  <span className="embed-responsive embed-responsive-4by3">
                    <img
                      className="embed-responsive-item"
                      src="assets/images/content/720x540/orange.jpg"
                      alt=""
                    />
                  </span>
                  <span className="with-back entity-preview-content">
                    <span className="h3 m-auto text-theme text-center">
                      <i className="fas fa-search"></i>
                    </span>
                    <span className="overflow-back bg-body-back opacity-70"></span>
                  </span>
                </a>
              </div>
              <div className="cart-item-title">
                <a
                  className="content-link"
                  href="shop-product-sidebar-right.html"
                >
                  Orange
                </a>
              </div>
              <div className="cart-item-price">$4.99</div>
              <div className="cart-item-quantity">
                <div className="input-view-flat input-gray-shadow input-spin input-group">
                  <input
                    className="form-control"
                    min="1"
                    name="text"
                    type="text"
                    value="5"
                  />
                  <span className="input-actions">
                    <span className="input-decrement">
                      <i className="fas fa-minus"></i>
                    </span>
                    <span className="input-increment">
                      <i className="fas fa-plus"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="cart-item-total">
                <span className="cart-item-total-text">Item total:</span>$24.95
              </div>
              <div className="cart-item-remove">
                <a href="#">
                  <span className="cart-item-remove-text">
                    remove from cart
                  </span>
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div> */}
            <div className="separator-line"></div>
            <div className="cart-footer">
              <div className="grid-sm row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  {/* <button className="btn btn-theme-bordered" type="submit">
                    clear shopping cart
                  </button> */}
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mr-auto">
                  {/* <button className="btn btn-theme-bordered" type="submit">
                    update shopping cart
                  </button> */}
                </div>
                <div className="col-md-4 col-lg-3">
                  <a href="/veggies/shop" className="btn btn-theme">
                    continue shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-block">
            <div className="cols-xl row">
              <div className="col-lg-6 mr-auto">
                <div className="cart-form">
                  <h5 className="form-title">Coupon Discount</h5>
                  <form autocomplete="off">
                    <div className="row grid">
                      <div className="col-12 col-sm-7">
                        <div className="input-view-flat input-gray-shadow input-group">
                          <input
                            className="form-control"
                            name="text"
                            type="text"
                            placeholder="Enter Your Coupon Code Here!"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-5">
                        <button
                          className="w-100 btn btn-theme-bordered"
                          type="submit"
                        >
                          apply coupon
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <div className="cart-form">
                  <h5 className="form-title">Check Availability</h5>
                  <form autocomplete="off">
                    <div className="row grid">
                      <div className="col-12 col-sm-7">
                        <div className="input-view-flat input-gray-shadow input-group">
                          <input
                            className="form-control"
                            name="text"
                            type="text"
                            placeholder="Enter Pin Code"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-5">
                        <button
                          className="w-100 btn btn-theme-bordered"
                          type="submit"
                        >
                          check
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
              <div className="col-auto mx-auto mx-lg-0">
                <div className="cart-block">
                  <ul className="cart-totals list-titled">
                    <li>
                      <span className="list-item-title">Market Price</span>
                      <span className="list-item-value">Rs.{marketPrice}</span>
                    </li>
                    <li>
                      <span className="list-item-title">Your Bill</span>
                      <span className="list-item-value">Rs.{yourBill}</span>
                    </li>
                    <li>
                      <span className="list-item-title">Shipping</span>
                      <span className="list-item-value">Rs.20.00</span>
                    </li>
                    <li>
                      <span className="list-item-title">You Save</span>
                      <span className="list-item-value">Rs.{saveTotal}</span>
                    </li>
                    <li className="separator-line"></li>
                    <li className="cart-total">
                      <span className="list-item-title">Total</span>
                      <span className="list-item-value">
                        Rs.{yourBill + 20}
                      </span>
                    </li>
                  </ul>

                  <div className="w-100 btn btn-theme" onClick={handleCheckout}>
                    proceed to checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message=""
          key={vertical + horizontal}
        >
          {/* <Alert severity="error" onClose={handleClose}>
            Please Login!
          </Alert> */}
            <Alert severity="error" onClose={handleClose}>
            Sorry! Today, We are not accepting orders anymore
          </Alert> 
        </Snackbar>
      </section>
    </React.Fragment>
  );
};

const BgImage = styled.div`
  background-image: url("assets/images/content/1920x1080/antioxidant-carrot-diet-33307.jpg");
`;

const CartItems = ({ cartItem }) => {
  // const classes = useStyles();

  // console.log(cartStore.length);
  const storedVeggie = useSelector(storedVeggies);

  const [count, setCounter] = useState(1);
  const [updatePrice, setUpdatePrice] = useState(cartItem.price);
  const dispatch = useDispatch();
  const [halfKilo, setHalfKilo] = useState(false);
  const [pavKilo, setPavKilo] = useState(false);

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
    // console.log(storedVeggie.storeVeggies);
    for (let veggie of storedVeggie.storeVeggies) {
      if (cartItem.name === veggie.name) {
        // console.log(veggie);
        if (
          cartItem.price !== veggie.price ||
          cartItem.in_stock !== veggie.in_stock
        ) {
          // console.log(veggie.price, cartItem.price);
          setUpdatePrice(veggie);
          handleRemoveItem(cartItem);
        }
      }
    }
  }, []);

  const handleIncrement = () => {
    if (count < 5) {
      setCounter(count + 1);
      setUpdatePrice((prev) => prev + cartItem.price);
    }

    if (count === 0.5) {
      setCounter(count + 0.5);
      setUpdatePrice(cartItem.price);
    }

    if (count === 0.25) {
      setCounter(count + 0.25);
      let p = Math.ceil(cartItem.price / 2);
      setUpdatePrice(p);
    }
  };

  const handleDecrement = () => {
    setHalfKilo(false);
    if (count > 1) {
      setCounter(count - 1);
      setUpdatePrice((prev) => prev - cartItem.price);
    }

    if (
      cartItem.name !== "Bottle Gourd" &&
      cartItem.name !== "Drum Sticks" &&
      cartItem.name !== "Cabbage"
    ) {
      // console.log(cartItem.name);
      if (count === 1) {
        setCounter(count - 0.5);
        let p = Math.ceil(cartItem.price / 2);
        setUpdatePrice(p);
      }
    } else {
      console.log("slkdnfkldsf");
      setHalfKilo(true);
      // setPavKilo(false);
      setState({ ...state, open: true });
    }
    // console.log(halfKilo);

    if (
      cartItem.name === "Green Chilli" ||
      cartItem.name === "Bitter gourd" ||
      cartItem.name === "Capsicum" ||
      cartItem.name === "Beans" ||
      cartItem.name === "Bajji Mirchi" ||
      cartItem.name === "Goru Chikkulu" ||
      cartItem.name === "Broad Beans" ||
      cartItem.name === "Carrot"
    ) {
      if (count === 0.5) {
        setCounter(count - 0.25);
        let p = Math.ceil(cartItem.price / 4);
        setUpdatePrice(p);
      }
    } else {
      // setHalfKilo(false);
      setHalfKilo(true);
      setState({ ...state, open: true });
    }
  };

  // console.log(pavKilo, halfKilo);

  useEffect(() => {
    if (cartItem.qty >= 0.25) {
      setCounter(cartItem.qty);
      setUpdatePrice(cartItem.newPrice);
    }
  }, []);

  useEffect(() => {
    let updatedItem = { ...cartItem, newPrice: updatePrice, qty: count };

    dispatch(
      updateCart({
        updatedItem,
      })
    );
  }, [count]);

  const [removeCount, setRemoveCount] = useState(false);

  const handleRemoveItem = (removeeItem) => {
    // console.log(removeeItem);

    dispatch(
      removeItem({
        removeeItem,
      })
    );
    setRemoveCount(true);
  };

  useEffect(() => {
    if (removeCount === true) {
      window.location.reload();
      setRemoveCount(false);
    }
  }, [removeCount]);

  // let updatedPrice = cartItem.newPrice;

  return (
    <>
      <div className="cart-item-entity">
        <div className="cart-item-image">
          <a
            className="entity-preview-show-up entity-preview"
            href="shop-product-sidebar-right.html"
          >
            <span className="embed-responsive embed-responsive-4by3">
              <img
                className="embed-responsive-item"
                src={cartItem.img}
                alt=""
              />
            </span>
            <span className="with-back entity-preview-content">
              <span className="h3 m-auto text-theme text-center">
                <i className="fas fa-search"></i>
              </span>
              <span className="overflow-back bg-body-back opacity-70"></span>
            </span>
          </a>
        </div>
        <div className="cart-item-title">
          <a className="content-link" href="shop-product-sidebar-right.html">
            {cartItem.name} / {cartItem.tel_name}
          </a>
        </div>
        {cartItem.name !== "Bottle Gourd" && cartItem.name !== "Drum Sticks" ? (
          <div className="cart-item-price">Rs. {cartItem.price} /kg</div>
        ) : (
          <div className="cart-item-price">
            Rs. {cartItem.price} / {cartItem.piece} piece
          </div>
        )}

        <div className="cart-item-quantity">
          <div className="input-view-flat input-gray-shadow input-spin input-group">
            <input
              className="form-control"
              min="1"
              name="text"
              type="text"
              value={count}
            />
            <span className="input-actions">
              <span className="input-decrement" onClick={handleDecrement}>
                <i className="fas fa-minus"></i>
              </span>
              <span className="input-increment" onClick={handleIncrement}>
                <i className="fas fa-plus"></i>
              </span>
            </span>
          </div>
        </div>
        <div className="cart-item-total">
          <span className="cart-item-total-text">Item total:</span>
          Rs.{updatePrice}
        </div>
        <div
          className="cart-item-remove"
          onClick={() => handleRemoveItem(cartItem)}
        >
          <span className="cart-item-remove-text">remove from cart</span>
          <i className="fas fa-times"></i>
        </div>
      </div>

      {/* <Paper className={classes.cartCard}>
      <div style={{ display: "flex" }}>
        <Link to={`/product-detail?id=${item.prod_id}`}>
          <div style={{ width: "25%" }}>
            <img src={item.prod_img} alt="" className={classes.cartImg} />
          </div>
        </Link>
        <div style={{ width: "75%", marginTop: "10px" }}>
          <Link to={`/product-detail?id=${item.prod_id}`}>
            <H4>{item.prod_name}</H4>
            <P>{item.info}</P>
          </Link>

          <div style={{ display: "flex", marginTop: "5px" }}>
            <H5>Qty</H5>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button className={classes.buttons} onClick={handleIncrement}>
                +
              </Button>
              <Button
                className={classes.buttons}
                disabled
                style={{ color: "#000", backgroundColor: "#fff" }}
              >
                {count}
              </Button>
              <Button className={classes.buttons} onClick={handleDecrement}>
                -
              </Button>
            </ButtonGroup>
          </div>

          <div style={{ marginTop: "15px" }}>
            <H4>
              Price: {"\u20B9"}
              {item.prod_price}
            </H4>
          </div>
        </div>
        <div className={classes.deleteIcon}>
       
          <DeleteIcon />
        </div>
      </div>
    </Paper> */}

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message=""
        key={vertical + horizontal}
      >
        {/* halfKilo ? (
          <Alert severity="info" onClose={handleClose}>
            250gms and 500gms are applied to only selected Items.
          </Alert>
        ) : (
          ""
        ) */}
        {/* <Alert severity="error" onClose={handleClose}>
            Sorry! Today, We are not accepting orders anymore
          </Alert> */}
      </Snackbar>
    </>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: row;
  // position: absolute;
  top: 80px;
  // min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  color: #000;
`;

const H3 = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
`;

const H4 = styled.h4`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 0px;
  color: #000;
`;

const P = styled.div`
  font-size: 14px;
  color: #858d95;
`;

const H5 = styled.h6`
  font-size: 16px;
  margin: 0;
  margin-top: 4px;
  margin-right: 4px;
  padding: 0;
  font-weight: 500;
`;

export default Cart;
