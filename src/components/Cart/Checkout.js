import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { storeCart } from "../../features/cart/cart";
import firestore from "../../firebase";
import { useHistory } from "react-router-dom";
import { getUserDetails } from "../../features/user/userSlice";

const CheckoutPage = () => {
  const cartItems = useSelector(storeCart);
  const userDetails = useSelector(getUserDetails);

  // console.log(cartItems);

  let subTotal = 0;
  const history = useHistory();

  for (let item of cartItems) {
    subTotal = subTotal + item.newPrice;
  }
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.na)

    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(userDetails.uid);

  const handlePlaceOrder = () => {
    if (
      values.name === "" ||
      values.address === "" ||
      values.email === "" ||
      values.phone === "" ||
      values.pincode === "" ||
      values.town === ""
    ) {
      alert("Please fill all the fields");
    } else if (values.phone.length < 10) {
      alert("Please Enter Valid Phone Number");
    } else {
      let order = [{ orderItems: [...cartItems] }, { ...values }];
      console.log(order);

      const orderRef = firestore.collection(`orders`).doc(userDetails.uId);

      // const snapshot = cartRef.get();

      try {
        firestore
          .collection("orders")
          .doc(userDetails.uid)
          .collection("order")
          .add({
            orderDetiails: order,
          })
          .then(() => {
            history.push("/veggies/shop");
          });
      } catch (error) {
        console.log("Error in placing order", error);
      }
    }
  };

  console.log(values);

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
                  <a className="content-link" href="/">
                    Home
                  </a>
                  <span className="mx-2">\</span>
                  <a className="content-link" href="/">
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
                <div class="col-12">
                  <div class="input-view-flat input-gray-shadow form-group">
                    <label class="required">Town / City</label>
                    <div class="input-group">
                      <input
                        class="form-control"
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
                  <div className="order-line-title">Sub Total</div>
                  <div className="order-line-total">Rs. {subTotal}</div>
                </div>
                <div className="order-subtotal">
                  <div className="order-line-title">Shipping</div>
                  <div className="order-line-total">Rs. 20.00</div>
                </div>
                <div className="separator-line"></div>
                <div className="order-total">
                  <div className="order-line-title">Total</div>
                  <div className="order-line-total">Rs. {subTotal + 20}</div>
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
                <div className="col-12">
                  <div
                    className="btn-wider btn btn-theme"
                    onClick={handlePlaceOrder}
                  >
                    place order
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};
const BgImage = styled.div`
  background-image: url("assets/images/content/1920x1080/antioxidant-carrot-diet-33307.jpg");
`;

export default CheckoutPage;
