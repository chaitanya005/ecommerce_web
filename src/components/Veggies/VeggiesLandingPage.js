import React from "react";
import HomePage from "./Homepage";
import OurProducts from "./OurProducts";
import Testimonials from "./Testimonials";

const VeggiesLandingPage = () => {
  return (
    <React.Fragment>
      <HomePage />
      <OurProducts />
      {/* <Testimonials /> */}
    </React.Fragment>
  );
};

export default VeggiesLandingPage;
