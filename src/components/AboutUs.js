import React from "react";

const AboutUs = () => {
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
              <div className="section-back-text">About Us</div>
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
              <h1 className="section-title">About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Spont Store has been the leading business merchant in Chirala for the
          past few years. We are the expert quality providers in our products in
          all our aspects. Our customers are expressing happiness about our
          services.
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Spont Store always cares about customer comfort and also we believe
          customers are gods.
        </div>
        <br />
        <h4 style={{ textAlign: "center" }}>
          "<i>One stop destination for all your needs</i>"
        </h4>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
