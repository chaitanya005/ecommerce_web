import React from "react";

const Privacy = () => {
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
              <div className="section-back-text">Privacy</div>
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
              <h1 className="section-title">Privacy</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Spont Store always keeps the customers' info as safe and secure. We
          never share any type of our customers details or orders details to
          anyone in any case.
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Our Address: 1/A Rajupalem street, Swarna road, Chirala, Prakasam, AP
          - 523155
        </div>
      </div>
    </React.Fragment>
  );
};

export default Privacy;
