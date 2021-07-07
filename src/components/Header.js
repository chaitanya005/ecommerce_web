import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import {
  setUser,
  setSignOut,
  getUserName,
  getUserPhoto,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import createUserDocument from "../firebase";
import { removeCart } from "../features/cart/cart";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    display: "block",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 240,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(getUserName);
  const userPhoto = useSelector(getUserPhoto);

  const [menanchorEl, setMenAnchorEl] = React.useState(null);
  const [womenanchorEl, setWomenAnchorEl] = React.useState(null);
  const [kidsanchorEl, setKidsAnchorEl] = React.useState(null);
  const [veggieanchorEl, setVeggieAnchorEl] = React.useState(null);

  /* useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                saveUser(user)
                history.push('/home')
            }
        })
    }, [userName]) */

  // const open = Boolean(anchorEl);

  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    openToast: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, openToast } = state;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          // console.log(res);
          saveUser(res.user);
          createUserDocument(res.user);
          window.location.reload();
        })
        .catch((err) => {});
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOut());
          // dispatch(removeCart());
          // history.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const saveUser = (user) => {
    dispatch(
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      })
    );
  };

  const handleClose = () => {
    setState({ ...state, openToast: false });
  };

  const handleToastOpen = () => {
    setState({ ...state, openToast: true });
  };

  const handleMenPopoverOpen = (event) => {
    setMenAnchorEl(event.currentTarget);
  };

  const handleMenPopoverClose = () => {
    setMenAnchorEl(null);
  };

  const handleWomenPopoverOpen = (event) => {
    setWomenAnchorEl(event.currentTarget);
  };

  const handleWomenPopoverClose = () => {
    setWomenAnchorEl(null);
  };

  const handleKidsPopoverOpen = (event) => {
    setKidsAnchorEl(event.currentTarget);
  };

  const handleKidsPopoverClose = () => {
    setKidsAnchorEl(null);
  };

  const handleVeggiePopoverOpen = (event) => {
    setVeggieAnchorEl(event.currentTarget);
  };

  const handleVeggiePopoverClose = () => {
    setVeggieAnchorEl(null);
  };

  return (
    <React.Fragment>
      {/* <header className="header-colorfull header-horizontal header-over header-view-side">
        <div className="container">
          <nav className="navbar">
            <a className="navbar-brand" href="homepage-1.html">
              <span className="logo-element-line">
                <span className="logo-icon">
                  <span
                    className="svg-content svg-fill-theme"
                    data-svg="assets/images/svg/logo-part.svg"
                  ></span>
                </span>
                <span className="logo-text">Logo</span>
              </span>
              <button className="navbar-toggler" type="button">
                <i className="fas fa-bars nav-show"></i>
                <i className="fas fa-times nav-hide"></i>
              </button>
              <div className="navbar-collapse">
                <div className="container">
                  <div>
                    <ul className="navbar-nav">
                      <li className="nav-item nav-item-arrow-down nav-hover-show-sub">
                        <a
                          className="nav-link"
                          href="/"
                          data-role="nav-toggler"
                        >
                          Home
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="/shop">
                          Shop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact-us.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-extra">
                    <ul className="actions-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#/">
                          <i className="fas fa-search"></i>
                          <span className="navbar-mobile">
                            &nbsp;&nbsp;Search
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#">
                          <i className="fas fa-user"></i>&nbsp;&nbsp;Sing In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="shop-cart.html"
                          data-show-block="cart"
                        >
                          <i className="fas fa-shopping-bag"></i>
                          <span className="navbar-mobile">
                            &nbsp;&nbsp;Cart
                          </span>
                          <span className="cart-quantity">
                            <span className="badge badge-pill badge-cart">
                              3
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </nav>
        </div>
  </header>*/}

      {/* ------------------------------------- Mobile Bar ------------------------------------ */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{ display: "flex" }}>
          <Logo href="/">
            <img
              src="/images/logo-1.png"
              alt="shopandship"
              style={{ width: "100%", marginTop: "16%" }}
            />
          </Logo>
          <div className={classes.drawerHeader} style={{ marginTop: "7%" }}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </div>

        <List>
          <ListItem>
            <a href="/">
              <ListItemText primary="Home" />
            </a>
          </ListItem>
          <ListItem>
            <Typography
              aria-owns={menanchorEl ? "men" : undefined}
              aria-haspopup="true"
              onClick={handleMenPopoverOpen}
              onMouseOver={handleMenPopoverOpen}
            ></Typography>
          </ListItem>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <span>MEN</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Shirts
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Pants
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  T-Shirts
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Shirt + Pant
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                <span>Women</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Shirts & T-shirts
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Pants
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Punjabi Dresses
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Duppata's & Scarfs
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Lehanga's
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Night Wear
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                <span>Kids</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Boys
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="" style={{ color: "#000" }} onClick={handleToastOpen}>
                  Girls
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                <Link to="/veggies" style={{ color: "#000" }}>
                  Vegetables
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a href="/veggies" style={{ color: "#000" }}>
                  Veggies
                </a>
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>
                <Link to="/veggies/shop" style={{ color: "#000" }}>
                  Veggies Shop
                </Link>
              </Typography>
            </AccordionDetails>
            <Divider />
          </Accordion>
          <ListItem>
            <a href="/cart">
              <ListItemText primary="Cart" />
            </a>
          </ListItem>
          <Divider />
        </List>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openToast}
          onClose={handleClose}
          // message="Please  Login"
          key={vertical + horizontal}
          // style={{ background: "#fff", color: "#000" }}
        >
          <Alert severity="info" onClose={handleClose}>
            Coming Soon
          </Alert>
        </Snackbar>
      </Drawer>

      {/* ------------------------------------- Mobile Bar End ------------------------------------ */}

      <Nav>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <>
          <NavMenu>
            <Logo href="/">
              <img
                src="/images/logo.png"
                alt="shopandship"
                style={{ width: "100%", height: "100%" }}
              />
            </Logo>
            {/* <a href="/home" style={{ fontSize: "16px" }}>
              <img src="/images/home-icon.svg" alt="Home" /> 
              <span>HOME</span>
            </a> */}

            <Typography
              // aria-owns={menanchorEl ? "men" : undefined}
              aria-haspopup="true"
              // onClick={handleMenPopoverOpen}
              // onMouseOver={handleMenPopoverOpen}
            >
              <a href="/">
                <span>HOME</span>
              </a>
            </Typography>

            <Menu
              id="men"
              anchorEl={menanchorEl}
              open={Boolean(menanchorEl)}
              onClose={handleMenPopoverClose}
              MenuListProps={{ onMouseLeave: handleMenPopoverClose }}
              style={{ top: "5%" }}
            >
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Shirts
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Pants
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  T-shirts
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Shirt + Pant
                </Link>
              </MenuItem>
            </Menu>

            <Typography
              aria-owns={menanchorEl ? "men" : undefined}
              aria-haspopup="true"
              onClick={handleMenPopoverOpen}
              onMouseOver={handleMenPopoverOpen}
            >
              <a href="">
                <span>MEN</span>
              </a>
            </Typography>

            <Menu
              id="women"
              anchorEl={womenanchorEl}
              open={Boolean(womenanchorEl)}
              onClose={handleWomenPopoverClose}
              MenuListProps={{ onMouseLeave: handleWomenPopoverClose }}
              style={{ top: "5%" }}
            >
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Shirts & T-shirts
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Pants
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Punjabi Dresses
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Sarees
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Duppata's & Scarfs
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Lehanga's
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Night Wear
                </Link>
              </MenuItem>
            </Menu>

            <Typography
              aria-owns={womenanchorEl ? "women" : undefined}
              aria-haspopup="true"
              onClick={handleWomenPopoverOpen}
              onMouseOver={handleWomenPopoverOpen}
            >
              <a href="">
                <span>WOMEN</span>
              </a>
            </Typography>

            <Menu
              id="kids"
              anchorEl={kidsanchorEl}
              open={Boolean(kidsanchorEl)}
              onClose={handleKidsPopoverClose}
              MenuListProps={{ onMouseLeave: handleKidsPopoverClose }}
              style={{ top: "5%" }}
            >
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Boy
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="" onClick={handleToastOpen}>
                  Girl
                </Link>
              </MenuItem>
            </Menu>

            <Typography
              aria-owns={kidsanchorEl ? "kids" : undefined}
              aria-haspopup="true"
              onClick={handleKidsPopoverOpen}
              onMouseOver={handleKidsPopoverOpen}
            >
              <a href="">
                <span>KIDS</span>
              </a>
            </Typography>

            <Typography
              aria-owns={veggieanchorEl ? "kids" : undefined}
              aria-haspopup="true"
              onClick={handleVeggiePopoverOpen}
              onMouseOver={handleVeggiePopoverOpen}
            >
              <a href="/watchlist">
                <span>VEGETABLES</span>
              </a>
            </Typography>

            <Menu
              id="veggies"
              anchorEl={veggieanchorEl}
              open={Boolean(veggieanchorEl)}
              onClose={handleVeggiePopoverClose}
              MenuListProps={{ onMouseLeave: handleVeggiePopoverClose }}
              style={{ top: "5%" }}
            >
              <MenuItem>
                <Link to="/veggies">Veggies</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/veggies/shop">Veggies Shop</Link>
              </MenuItem>
            </Menu>
          </NavMenu>
          <CartIcon>
            <a href="/cart">
              <ShoppingCartIcon />
            </a>
          </CartIcon>
          {!userName ? (
            <Login onClick={handleAuth}>Login</Login>
          ) : (
            <React.Fragment>
              <SignOut>
                <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                  <a href="/user/orders">Your Orders</a> <br />
                  <span onClick={handleAuth}>Sign out</span>
                </DropDown>
              </SignOut>
            </React.Fragment>
          )}
        </>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openToast}
          onClose={handleClose}
          // message="Please  Login"
          key={vertical + horizontal}
          // style={{ background: "#fff", color: "#000" }}
        >
          <Alert severity="info" onClose={handleClose}>
            Coming Soon
          </Alert>
        </Snackbar>
      </Nav>
    </React.Fragment>
  );
};

const Nav = styled.nav`
  position: relative;
  height: 70px;
  width: 100%;
  background-color: rgb(52, 58, 64);
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  display: flex;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 200px;
  margin-top: 4px;
  max-height: 70px;
  padding: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const CartIcon = styled.div`
  margin-right: 25px;

  @media (max-width: 770px) {
    margin-left: 45%;
    margin-right: 5px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgba(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 150px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
