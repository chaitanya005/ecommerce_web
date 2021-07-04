import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { removeCart, setOrderId, storeCart } from "../../features/cart/cart";
import firestore from "../../firebase";
import { useHistory } from "react-router-dom";
import { getUserDetails } from "../../features/user/userSlice";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { getUserUid, getUserName } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const cartItems = useSelector(storeCart);
  const userDetails = useSelector(getUserDetails);
  const userName = useSelector(getUserName);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  // console.log(cartItems);

  let yourBill = 0;
  let marketPrice = 0;
  let saveTotal = 0;
  const history = useHistory();
  const uId = useSelector(getUserUid);

  for (let item of cartItems) {
    yourBill = yourBill + item.newPrice;
    marketPrice += item.actual_price * item.qty;
  }

  saveTotal += marketPrice - yourBill;

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  /* 
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, []) */

  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    town: "",
    pincode: "",
    phone: "",
    district: "",
    additionInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.na)

    setValues({
      ...values,
      [name]: value,
    });
  };

  // console.log(userDetails.uid);

  let orderId =
    userDetails.email.substring(0, 3) +
    new Date().getDate() +
    new Date().getHours() +
    new Date().getMinutes();

  // console.log(orderId);
  const handlePlaceOrder = () => {
    if (!uId) {
      setState({ ...state, open: true });
    } else {
      if (
        values.name === "" ||
        values.address === "" ||
        values.email === "" ||
        values.phone === "" ||
        values.pincode === "" ||
        values.town === "" ||
        values.district === ""
      ) {
        alert("Please fill all the fields");
      } else if (values.phone.length < 10) {
        alert("Please Enter Valid Phone Number");
      } else {
        setLoading(true);
        let order = [
          { orderId: orderId },
          { orderItems: [...cartItems] },
          { ...values },
          { total: yourBill + 20 },
        ];
        // console.log(order);

        const orderRef = firestore.collection(`orders`).doc(userDetails.uId);

        // const snapshot = cartRef.get();

        // handleNotion();
        try {
          firestore
            .collection("orders")
            .doc(userDetails.uid)
            .collection("order")
            .doc(orderId)
            .set({
              order,
            })
            /*  .add({
              orderDetiails: order,
            }) */
            .then(() => {
              // history.push("/veggies/shop");
              dispatch(
                setOrderId({
                  orderId,
                })
              );
              dispatch(removeCart());
              handleNotion();
            });
        } catch (error) {
          console.log("Error in placing order", error);
        }
      }
    }
  };

  const handleNotion = () => {
    // console.log(cartItems, values);

    let items = "",
      i = 1;

    for (let item of cartItems) {
      items += ` (${i} - ${item.name} - ${item.qty} Kg - ${item.price} Price - ${item.newPrice} Total) `;
      i++;
    }

    // console.log(items);
    let total = yourBill + 20;

    axios
      .post("https://notion-demo.herokuapp.com/order", {
        items,
        values,
        i,
        orderId,
        total,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        history.push("/order/confirm");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        history.push("/order/failure");
      });
  };
  // console.log(values);

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
              <h1 className="section-title">Shop Checkout</h1>
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
                  <span>Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <form className="container" action="#" method="POST">
          <div className="cols-xl row">
            <div className="col-lg-6">
              <h2 className="text-title mb-5">Billing details</h2>
              <div className="grid row">
                <div className="col-md-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Your Name</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required="required"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Your Email</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required="required"
                        values={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Address</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="address"
                        type="text"
                        placeholder="Address"
                        required="required"
                        value={values.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Town / City</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="town"
                        type="text"
                        placeholder="Town / City"
                        required="required"
                        value={values.town}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">District</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="district"
                        type="text"
                        placeholder="District"
                        required="required"
                        value={values.district}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Postcode / Zip</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="pincode"
                        type="number"
                        placeholder="Postcode / Zip"
                        required="required"
                        value={values.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Phone</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        name="phone"
                        type="number"
                        placeholder="Phone"
                        required="required"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="h4 mb-3 text-title">
                      Additional Information
                    </label>
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        name="additionInfo"
                        placeholder="Additional Information"
                        style={{ borderRadius: "25px" }}
                        value={values.additionInfo}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="text-title mb-5">Your order</h2>
              <div className="order-items mb-5">
                <div className="order-header">
                  <div className="order-line-title">Name</div>
                  <div className="order-line-total">Total</div>
                  <div className="order-line">Qty</div>
                </div>
                {cartItems &&
                  cartItems.map((item) => (
                    <div className="order-item">
                      <div className="order-line-title">{item.name}</div>
                      <div className="order-line-total">
                        Rs. {item.newPrice}
                      </div>
                      <div className="order-line"> {item.qty}</div>
                    </div>
                  ))}
                <div className="order-subtotal">
                  <div className="order-line-title">Market Price</div>
                  <div className="order-line-total">Rs. {marketPrice}</div>
                </div>
                <div className="order-subtotal">
                  <div className="order-line-title">Your Bill</div>
                  <div className="order-line-total">Rs. {yourBill}</div>
                </div>
                <div className="order-subtotal">
                  <div className="order-line-title">Shipping</div>
                  <div className="order-line-total">Rs. 20.00</div>
                </div>
                <div className="order-subtotal">
                  <div className="order-line-title">You Save</div>
                  <div className="order-line-total">Rs. {saveTotal}</div>
                </div>
                <div className="separator-line"></div>
                <div className="order-total">
                  <div className="order-line-title">Total</div>
                  <div className="order-line-total">Rs. {yourBill + 20}</div>
                </div>
              </div>
              <h3 className="text-title mb-4">Payment Details</h3>
              <div className="grid row">
                <div className="col-12">
                  <div className="form-groups">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cash-on-payment"
                          name="paymentType"
                          value="Cash On Payment"
                          checked="checked"
                        />
                        <span className="form-check-icon"></span>
                        <label className="form-check-label" for="check-payment">
                          Cash On Delivery (COD)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className={classes.wrapper}>
                  <div className="col-12">
                    <div
                      className="btn-wider btn btn-theme"
                      onClick={handlePlaceOrder}
                    >
                      place order
                    </div>
                  </div>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Please  Login"
        key={vertical + horizontal}
      >
        <Alert severity="error" onClose={handleClose}>
          Please Login!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
const BgImage = styled.div`
  background-image: url("assets/images/content/1920x1080/antioxidant-carrot-diet-33307.jpg");
`;

export default CheckoutPage;
