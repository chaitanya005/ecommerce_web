import styled from "styled-components";
// import ImgSlider from "./ImgSlider";
import Arrived from "./Arrived";
import Deals from "./Deals";
import Trending from "./Trending";
// import Trending from './Trending'

import { useEffect, Suspense, lazy } from "react";
// import { useDispatch, useSelector } from 'react-redux'
import db from "../firebase";
import Men_shirts from "./Men/Men_shirts";
import VeggieSection from "./VeggieSection";
import FoodDeliverySection from "./FoodDeliverySection";

const ImgSlider = lazy(() => import("./ImgSlider"));
/* import { setMovies } from '../features/movie/movieSlice'
import { getUserName } from '../features/user/userSlice' */

const Home = () => {
  /*  const dispatch = useDispatch()
    const userName = useSelector(getUserName) */
  let recommends = [];
  let original = [];
  let newDisneys = [];

  return (
    <Container>
      <Suspense fallback={<div style={{ color: "#000" }}>Loading....</div>}>
        <ImgSlider />
        <VeggieSection />
        {/* <FoodDeliverySection /> */}
        <br />
      </Suspense>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  // top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    display: block;
    background: #fff !important;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
