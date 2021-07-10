import React from "react";
import FoodHome from "./Home";
import Offers from "./Offers";
import PopularBrands from "./PopularBrands";

const LandingPage = () => {
  return (
    <React.Fragment>
      <FoodHome />
      <Offers />
      <PopularBrands />
    </React.Fragment>
  );
};

export default LandingPage;
