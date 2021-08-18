import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green, yellow, grey } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

const Detail = () => {
  const [state, setState] = React.useState({
    nonVeg: false,
    veg: false,
    egg: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const VegSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: green[500],
      },
      "&$checked + $track": {
        backgroundColor: green[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const EggSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: yellow[500],
      },
      "&$checked + $track": {
        backgroundColor: yellow[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

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
        <link href="vendor/icofont/icofont.min.css" rel="stylesheet" />
      </Helmet>
      <style>
        {`
            body {
                background-color: #f3f7f8;
                color: #000;
            }
        `}
      </style>
      <section
        className="
    after-head
    top-block-page
    with-back
    section-white-text
  "
      >
        <div className="overflow-back">
          <div
            className="overflow-back cover-image mw-100"
            data-background="assets/images/content/1920x1080/antioxidant-carrot-diet-33307.jpg"
            style={{
              backgroundImage:
                "url(https://b.zmtcdn.com/data/pictures/0/19805560/41eb316ca3f559dc5899d3350d714abb.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*)",
            }}
          ></div>
          <div className="overflow-back bg-body-back opacity-70"></div>
        </div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid">
            <div className="z-index-4 position-relative">
              <h1 className="section-title">New Iceberg</h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/">
                    Home
                  </a>
                  <span className="mx-2">\</span>
                  <a className="content-link" href="/veggies/shop">
                    Food-Delivery
                  </a>
                  <span className="mx-2">\</span>
                  <span>New Iceberg</span>
                </div>
                <div className="page-breadcrumbs">
                  Chirala Locality, Chirala
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="offer-dedicated-body-left">
                <FormControlLabel
                  control={
                    <VegSwitch
                      checked={state.veg}
                      onChange={handleChange}
                      name="veg"
                    />
                  }
                  label="Veg"
                />
                {/* <FormControlLabel
                  control={
                    <Switch
                      checked={state.nonVeg}
                      onChange={handleChange}
                      name="nonVeg"
                    />
                  }
                  label="Non-Veg"
                /> */}
                <FormControlLabel
                  control={
                    <EggSwitch
                      checked={state.egg}
                      onChange={handleChange}
                      name="egg"
                    />
                  }
                  label="Egg"
                />

                <div className="row">
                  <h5 className="mb-4 mt-3 col-md-12">Best Sellers</h5>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div
                      className="
                    list-card
                    bg-white
                    h-100
                    rounded
                    overflow-hidden
                    position-relative
                    shadow-sm
                  "
                    >
                      <div className="list-card-image">
                        <a href="#/">
                          <img
                            src="/img/list/7.png"
                            className="img-fluid item-img"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a
                              href="#/"
                              className="text-black"
                              style={{ color: "#000" }}
                            >
                              Bite Me Sandwiches
                            </a>
                          </h6>
                          <p
                            className="text-gray mb-2"
                            style={{ color: "#747d88" }}
                          >
                            North Indian • Indian
                          </p>
                          <p className="text-gray time mb-0">
                            <a
                              className="btn btn-link btn-sm pl-0 text-black pr-0"
                              href="#/"
                            >
                              $550
                            </a>
                            <span className="float-right">
                              <a
                                className="btn btn-outline-secondary btn-sm"
                                href="#/"
                              >
                                ADD
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div
                      className="
                    list-card
                    bg-white
                    h-100
                    rounded
                    overflow-hidden
                    position-relative
                    shadow-sm
                  "
                    >
                      <div className="list-card-image">
                        <a href="#/">
                          <img
                            src="/img/list/9.png"
                            className="img-fluid item-img"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a
                              href="#/"
                              className="text-black"
                              style={{ color: "#000" }}
                            >
                              Bite Me Sandwiches
                            </a>
                          </h6>
                          <p className="text-gray mb-2">
                            North Indian • Indian
                          </p>
                          <p className="text-gray time mb-0">
                            <a
                              className="btn btn-link btn-sm pl-0 text-black pr-0"
                              href="#/"
                            >
                              $550
                            </a>
                            <span className="float-right">
                              <a
                                className="btn btn-outline-secondary btn-sm"
                                href="#/"
                              >
                                ADD
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb-4">
                    <div
                      className="
                    list-card
                    bg-white
                    h-100
                    rounded
                    overflow-hidden
                    position-relative
                    shadow-sm
                  "
                    >
                      <div className="list-card-image">
                        <a href="#/">
                          <img
                            src="/img/list/9.png"
                            className="img-fluid item-img"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="p-3 position-relative">
                        <div className="list-card-body">
                          <h6 className="mb-1">
                            <a
                              href="#/"
                              className="text-black"
                              style={{ color: "#000" }}
                            >
                              Bite Me Sandwiches
                            </a>
                          </h6>
                          <p className="text-gray mb-2">
                            North Indian • Indian
                          </p>
                          <p className="text-gray time mb-0">
                            <a
                              className="btn btn-link btn-sm pl-0 text-black pr-0"
                              href="#/"
                            >
                              $550
                            </a>
                            <span className="float-right">
                              <a
                                className="btn btn-outline-secondary btn-sm"
                                href="#/"
                              >
                                ADD
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <h5 class="mb-4 mt-3 col-md-12">Ice Berg Specials</h5>
                  <div class="col-md-12">
                    <div class="bg-white rounded border shadow-sm mb-4">
                      <div class="gold-members p-3 border-bottom">
                        <a
                          class="btn btn-outline-secondary btn-sm float-right"
                          href="#/"
                        >
                          ADD
                        </a>
                        <div class="media">
                          <div class="mr-3">
                            <i class="icofont-ui-press text-danger food-item"></i>
                          </div>
                          <div class="media-body">
                            <h6 class="mb-1">
                              Lava Cake{" "}
                              <span class="badge badge-success">
                                BESTSELLER
                              </span>
                            </h6>
                            <p
                              class="text-gray mb-0"
                              style={{ color: "#747d88" }}
                            >
                              ₹ 75
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="gold-members p-3">
                        <a
                          class="btn btn-outline-secondary btn-sm float-right"
                          href="#/"
                        >
                          ADD
                        </a>
                        <div class="media">
                          <div class="mr-3">
                            <i class="icofont-ui-press text-success food-item"></i>
                          </div>
                          <div class="media-body">
                            <h6 class="mb-1">
                              Hot Brownie{" "}
                              <span class="badge badge-success">Pure Veg</span>
                            </h6>
                            <p
                              class="text-gray mb-0"
                              style={{ color: "#747d88" }}
                            >
                              ₹ 88
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="gold-members p-3">
                        <a
                          class="btn btn-outline-secondary btn-sm float-right"
                          href="#/"
                        >
                          ADD
                        </a>
                        <div class="media">
                          <div class="mr-3">
                            <i class="icofont-ui-press text-success food-item"></i>
                          </div>
                          <div class="media-body">
                            <h6 class="mb-1">
                              Fudge Brownie{" "}
                              <span class="badge badge-warning">
                                CHEF'S SPECIAL
                              </span>
                            </h6>
                            <p
                              class="text-gray mb-0"
                              style={{ color: "#747d88" }}
                            >
                              ₹ 150
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="gold-members p-3">
                        <a
                          class="btn btn-outline-secondary btn-sm float-right"
                          href="#/"
                        >
                          ADD
                        </a>
                        <div class="media">
                          <div class="mr-3">
                            <i class="icofont-ui-press text-success food-item"></i>
                          </div>
                          <div class="media-body">
                            <h6 class="mb-1">
                              Sizzling Hot Chocolate Brownie{" "}
                              <span class="badge badge-warning">
                                CHEF'S SPECIAL
                              </span>
                            </h6>
                            <p
                              class="text-gray mb-0"
                              style={{ color: "#747d88" }}
                            >
                              ₹ 175
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Detail;