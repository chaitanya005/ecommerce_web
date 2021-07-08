import React from "react";

const Offers = () => {
  return (
    <React.Fragment>
      <section style={{ margin: "3% 0" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-6">
              <div class="products-box">
                <a href="listing.html">
                  <img alt="" src="img/pro1.jpg" class="img-fluid rounded" />
                </a>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="products-box">
                <a href="listing.html">
                  <img alt="" src="img/pro2.jpg" class="img-fluid rounded" />
                </a>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="products-box">
                <a href="listing.html">
                  <img alt="" src="img/pro3.jpg" class="img-fluid rounded" />
                </a>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="products-box">
                <a href="listing.html">
                  <img alt="" src="img/pro4.jpg" class="img-fluid rounded" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Offers;
