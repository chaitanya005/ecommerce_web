import React from "react";

const OrderConfirmation = () => {
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
        <div
          className="overflow-back bg-orange_1"
          style={{ background: "#98c869" }}
        ></div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid with-back">
            <div className="full-block">
              <div className="section-back-text">Success</div>
            </div>
            <div className="z-index-4 position-relative text-center">
              <h1 className="section-title">Thank You for Ordering!</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="col">
        <h2
          className="mb-2 entity-title"
          style={{ textTransform: "capitalize", textAlign: "center" }}
        >
          Order Id: #12345
        </h2>

        <div className="section-block">
          <div className="cols-xl row">
            <div className="col-auto mx-auto mx-lg-0">
              <div className="cart-block">
                <ul className="cart-totals list-titled">
                  <li>
                    <span className="list-item-title">Sub Total</span>
                    <span
                      className="list-item-value"
                      style={{ color: "#98c869" }}
                    >
                      Rs.
                    </span>
                  </li>
                  <li>
                    <span className="list-item-title">Shipping</span>
                    <span
                      className="list-item-value"
                      style={{ color: "#98c869" }}
                    >
                      Rs.20.00
                    </span>
                  </li>
                  <li>
                    <span className="list-item-title">You Save</span>
                    <span
                      className="list-item-value"
                      style={{ color: "#98c869" }}
                    >
                      Rs.
                    </span>
                  </li>
                  <li
                    className="separator-line"
                    style={{ background: "#98c869" }}
                  ></li>
                  <li className="cart-total">
                    <span className="list-item-title">Total</span>
                    <span
                      className="list-item-value"
                      style={{ color: "#98c869" }}
                    >
                      Rs.{+20}
                    </span>
                  </li>
                </ul>
                <a
                  href="/veggies/shop"
                  className="w-100 btn btn-theme"
                  style={{ background: "#98c869" }}
                >
                  Contiune Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderConfirmation;
