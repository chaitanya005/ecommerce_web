import React from "react";

const Error = () => {
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
              <div className="section-back-text">404</div>
              <img
                className="d-none-1 d-lg-block z-index-3"
                src="/assets/images/content/x/mandarin.png"
                alt=""
                data-size="280px"
                data-at="10%;bottom 35%"
                style={{ width: "400px" }}
              />
              {/* <img
          className="d-none d-lg-block z-index-3"
          src="assets/images/content/x/kiwi-blur.png"
          alt=""
          data-size="137px"
          data-at="right 5%;35%"
        />
        <img
          className="d-none d-lg-block z-index-3"
          src="assets/images/content/x/shpinat-2.png"
          alt=""
          data-size="50px"
          data-at="65%;0%;-25deg"
        /> */}
            </div>
            <div className="z-index-4 position-relative text-center">
              <h1 className="section-title">Page Not Found</h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/">
                    Home
                  </a>
                  <span className="mx-2">\</span>
                  <span>404</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row"></div>
          <div className="text-center">
            <div>
              <img
                className="mw-100 mb-5"
                src="assets/images/parts/under-construction.png"
                alt=""
              />
            </div>
            <h2 className="text-title mb-2">
              The page you're looking for is not Found!
            </h2>

            <a className="btn btn-theme" href="/veggies/shop">
              View Shop
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Error;
