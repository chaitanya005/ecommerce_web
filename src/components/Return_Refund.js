import React from "react";

const Return_Refund = () => {
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
              <h1 className="section-title">Return & Refund</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          We accept return in case of any damage in shipping to our product or
          If you got any mismatch in orders. And also we are going to replace
          the product in case of any quantity differences.
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          We give first preference to replace your returned products in case the
          same product is not available then we will refund your total amount to
          you within 5-6 business days.
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          In case of return you can inform us via{" "}
          <a href="mailto:updates@spontstore.com">
            <b>
              <i>mail: updates@spontstore.com</i>
            </b>
          </a>{" "}
          <br />
          via phone:{" "}
          <b>
            <i>+91 8790462050 / +91 9030462050</i>
          </b>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Return_Refund;
