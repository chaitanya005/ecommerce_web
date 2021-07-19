import React from "react";

const T_C = () => {
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
              <div className="section-back-text"></div>
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
              <h1 className="section-title">Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div style={{ fontSize: "20px" }}>
          <ul>
            <li>
              {" "}
              Once you ordered any product we don’t accept returns without a
              valid reason.
            </li>
            <li>
              In case of refund we aren't going to pay you the shipping and
              payment gateway charges.
            </li>
            <li>
              In case of return we are not going to accept the products if there
              was any damage in the time of shipping to us.
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default T_C;
