import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fruits from "./Fruits";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
import DryFruits from "./DryFruits";
// import Tooltip from '@material-ui/core/Tooltip';

/* const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
} */

const FruitsLand = (req, res) => {
  const color = "#FFBAB5";

  const [state, setState] = React.useState({
    dryFruits: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // console.log(state.dryFruits);

  return (
    <React.Fragment>
      <Helmet>
        <link
          href="/assets/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
          defer
        />
        <link
          href="/assets/css/theme.min.css"
          rel="stylesheet"
          type="text/css"
          async
        />
        <link
          href="/assets/animate.css/animate.min.css"
          rel="stylesheet"
          type="text/css"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
          type="text/css"
          //   rel="preload"
          as="font"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          type="text/css"
          //   rel="preload"
          as="font"
        />
      </Helmet>
      <section className="white-curve-after after-head section-white-text">
        <div className="section-white-text entity-banner content-offs section-solid justify-content-center bg-pink">
          <div className="container text-center text-lg-left flex-0 entity-content">
            <div className="my-auto position-relative align-items-lg-center flex-0 row">
              <div className="full-block">
                <div className="section-back-text">Fruits</div>
              </div>
              <div className="m-lg-auto d-flex z-index-2 position-relative col">
                <img
                  className="m-auto col-auto mw-100"
                  src="assets/images/content/x/plate-2.png"
                  alt=""
                />
              </div>
              <div className="col-lg-5 mr-lg-5 mt-5 my-lg-auto order-lg-first z-index-4 position-relative">
                <h2 className="h1 entity-title">
                  Fresh Fruits<span className="text-light-green"></span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" white-curve-before
        curve-before-0
        white-curve-after
        curve-after-80
        entity-slim-banner
        text-center text-lg-left
        with-back
        section-white-text
        "
      >
        <div
          className="overflow-back cover-image"
          //   data-background="/assets/images/content/x/background-citric-citrus-1549040.jpg"
          style={{
            backgroundImage:
              "url(/assets/images/content/x/background-citric-citrus-1549040.jpg)",
          }}
        ></div>

        <div className="overflow-back bg-dark-lime-green opacity-50"></div>

        <div className="section-head" style={{ marginBottom: "0rem" }}>
          <div className="section-icon">
            <span
              className="svg-fill-white svg-content"
              //   data-svg="/assets/images/svg/title-avocado.svg"
            ></span>
          </div>
          <div className="section-head-content">
            <h2 className="section-title">Healthy Products</h2>
            <Typography component="div">
              <Grid
                component="label"
                container
                alignItems="center"
                spacing={1}
                style={{ justifyContent: "center" }}
              >
                <Grid item>Fruits</Grid>
                <Grid item>
                  <Switch
                    checked={state.dryFruits}
                    onChange={handleChange}
                    name="dryFruits"
                    size="medium"
                  />
                </Grid>
                <Grid item>Dry Fruits</Grid>
              </Grid>
            </Typography>
          </div>
        </div>
        {state.dryFruits ? <DryFruits /> : <Fruits />}
        {/* <div className="section-footer">
          <a className="btn btn-theme" href="#">
            view more&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
          </a>
        </div> */}
        <br />
      </section>
    </React.Fragment>
  );
};

export default FruitsLand;
