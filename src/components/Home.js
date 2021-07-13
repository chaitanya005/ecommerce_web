import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Arrived from "./Arrived";
import Deals from "./Deals";
import Trending from "./Trending";
// import Trending from './Trending'

import { useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux'
import db from "../firebase";
import Men_shirts from "./Men/Men_shirts";
import VeggieSection from "./VeggieSection";
import FoodDeliverySection from "./FoodDeliverySection";
/* import { setMovies } from '../features/movie/movieSlice'
import { getUserName } from '../features/user/userSlice' */

const Home = () => {
  /*  const dispatch = useDispatch()
    const userName = useSelector(getUserName) */
  let recommends = [];
  let original = [];
  let newDisneys = [];

  /* useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch(doc.data().type) {
                    case 'recommend':
                        // console.log(recommends)
                        // recommends.push({id: doc.id, ...doc.data()})
                        recommends = [...recommends, {id: doc.id, ...doc.data()}]
                        break;
                    case 'new':
                        // newDisneys.push({id: doc.id, ...doc.data()})
                        newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        // original.push({id: doc.id, ...doc.data()})
                        original = [...original, {id: doc.id, ...doc.data()}]
                        break;
                    default:
                        
                }
            })
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                orignals: original
            }))
        }) 

    

    }, [userName]) */

  return (
    <Container>
      <ImgSlider />
      {/* <Viewers />  */}
      <VeggieSection />
      {/* <FoodDeliverySection /> */}
      <br />
      {/* <Arrived />
      <Deals />
      <Trending /> */}
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
