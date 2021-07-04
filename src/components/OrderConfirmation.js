import React from "react";
import { useSelector } from "react-redux";
import { orderId } from "../features/cart/cart";

const OrderConfirmation = () => {
  const order_id = useSelector(orderId);
  // console.log(order_id);

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
          Order Id: {order_id}
        </h2>
      </div>
    </React.Fragment>
  );
};

export default OrderConfirmation;
