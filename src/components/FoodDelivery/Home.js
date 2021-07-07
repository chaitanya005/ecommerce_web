import React from "react";

const FoodHome = () => {
  return (
    <React.Fragment>
      <section className="pt-5 pb-5 homepage-search-block position-relative">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div className="homepage-search-title">
                <h1 className="mb-2 font-weight-normal">
                  <span className="font-weight-bold">Find Awesome Deals</span>{" "}
                  in Chirala
                </h1>
                <h5 className="mb-5 text-secondary font-weight-normal">
                  Lists of top restaurants, hotels, in Chirala, based on trends
                </h5>
              </div>
              <div className="homepage-search-form">
                <form className="form-noborder">
                  <div className="form-row">
                    <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                      <div className="location-dropdown">
                        {/* <i className="icofont-location-arrow"></i> */}
                        <select className="custom-select form-control-lg">
                          <option>Quick Searches</option>
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                          <option>Cafés</option>
                          <option>Delivery</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                      <input
                        type="text"
                        placeholder="Enter your delivery location"
                        className="form-control form-control-lg"
                      />
                      <a className="locate-me" href="#">
                        <i className="icofont-ui-pointer"></i> Locate Me
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                      <a
                        href="listing.html"
                        className="btn btn-primary btn-block btn-lg btn-gradient"
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <h6 className="mt-4 text-shadow font-weight-normal">
                E.g. Beverages, Pizzas, Chinese, Bakery, Indian...
              </h6>
              <div className="owl-carousel owl-carousel-category owl-theme">
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/1.png" alt="" />
                      <h6>American</h6>
                      <p>156</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/2.png" alt="" />
                      <h6>Pizza</h6>
                      <p>120</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/3.png" alt="" />
                      <h6>Healthy</h6>
                      <p>130</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/4.png" alt="" />
                      <h6>Vegetarian</h6>
                      <p>120</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/5.png" alt="" />
                      <h6>Chinese</h6>
                      <p>111</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/6.png" alt="" />
                      <h6>Hamburgers</h6>
                      <p>958</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/7.png" alt="" />
                      <h6>Dessert</h6>
                      <p>56</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/8.png" alt="" />
                      <h6>Chicken</h6>
                      <p>40</p>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="osahan-category-item">
                    <a href="#">
                      <img className="img-fluid" src="img/list/9.png" alt="" />
                      <h6>Indian</h6>
                      <p>156</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="osahan-slider pl-4 pt-3">
                <div className="owl-carousel homepage-ad owl-theme">
                  <div className="item">
                    <a href="listing.html">
                      <img
                        className="img-fluid rounded"
                        src="img/slider.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="listing.html">
                      <img
                        className="img-fluid rounded"
                        src="img/slider1.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item">
                    <a href="listing.html">
                      <img
                        className="img-fluid rounded"
                        src="img/slider.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FoodHome;
