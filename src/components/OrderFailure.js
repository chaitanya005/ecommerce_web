import React from "react";
import { useLocation, useParams } from "react-router-dom";
// const queryString = require("query-string");

const OrderFailure = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("orderId");
  const msg = new URLSearchParams(search).get("result_msg");
  console.log(id, msg);
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
          className="overflow-back bg-orange"
          style={{ background: "#98c869" }}
        ></div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid with-back">
            <div className="full-block">
              <div className="section-back-text">Failed</div>
            </div>
            <div className="z-index-4 position-relative text-center">
              <h1 className="section-title">Sorry Your Order failed</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="col">
        <h3 style={{ textAlign: "center" }}>
          You transaction towoards #{id} was failed due to{" "}
        </h3>
        <h4 style={{ textAlign: "center" }}>
          <i>{msg}</i>
        </h4>
        <br />
        {/* <h3
          className="mb-2 entity-title"
          style={{ textTransform: "capitalize", textAlign: "center" }}
        >
          For any queries?
        </h3>
        <h5 style={{ textTransform: "capitalize", textAlign: "center" }}>
          Please Contact us @ +91 8970462050
        </h5> */}
      </div>
    </React.Fragment>
  );
};

export default OrderFailure;
