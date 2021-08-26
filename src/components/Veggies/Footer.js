import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const Footer = () => {
  return (
    <footer className="white-curve-before curve-before-80 page-footer footer-view-links section-white-text">
      <div className="overflow-back bg-vegetables-pattern-white opacity-3"></div>
      <div className="footer-body">
        <div className="container">
          <nav className="footer-navbar">
            <div className="grid row">
              <div className="col-md-6 col-lg-3">
                <a className="navbar-brand" href="/">
                  <span className="logo-element-line">
                    <span className="logo-icon">
                      <span
                        className="svg-content svg-fill-theme"
                        data-svg="/images/vegetables-pattern-white.webp"
                      ></span>
                    </span>
                    <span className="logo-text">Spont Store</span>
                  </span>
                </a>
                <p className="footer-text">Take healthy Food and be healthy</p>
                {/* <div className="footer-socials">
                  <a className="footer-socials-link" href="/#">
                    <i className="fab fa-twitter"></i>
                  </a> 
                  <a className="footer-socials-link" href="#/">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a
                    className="footer-socials-link"
                    href="https://youtube.com/channel/UCHz6ZMeNxgwdM6EfsvhcIVA"
                  >
                    <i className="fab fa-youtube-square"></i>
                  </a>
                  <a
                    className="footer-socials-link"
                    href="https://instagram.com/shopandship.co.in?utm_medium=copy_link"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div> */}
              </div>
              <div className="col-md-12 col-lg-6 order-md-last">
                <div className="grid row">
                  {/* <div class="col-md-6">
                    <h5 class="footer-title">Pages</h5>
                    <ul class="nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/veggies/shop"
                          style={{ color: "#fff" }}
                        >
                          Veggies
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="col-md-6">
                    {/* <h5 className="footer-title">Policies</h5> */}
                    <ul className="nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/veggies/shop"
                          style={{ color: "#fff" }}
                        >
                          Veggies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/about-us"
                          style={{ color: "#fff" }}
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/privacy"
                          style={{ color: "#fff" }}
                        >
                          Privacy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/returnandrefund"
                          style={{ color: "#fff" }}
                        >
                          Return, Refund and Cancellation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="/termsandconditions"
                          style={{ color: "#fff" }}
                        >
                          T&C
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-md-6">
                    <h5 className="footer-title">Policies</h5>
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.html">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.html">
                          Return Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.html">
                          Accessibility
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.html">
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-3 order-lg-last">
                <h5 className="footer-title">Contact Us</h5>
                <p className="footer-text-info">
                  <WhatsAppIcon fontSize="small" /> +91 8790462050 <br />
                  <PhoneIcon fontSize="small" /> +91 9030462050 <br />
                  <a href="mailto:updates@spontstore.com">
                    <MailIcon fontSize="small" />
                    {"  "}
                    updates@spontstore.com
                  </a>
                  <p>1/A Rajupalem Street, Swarna Road</p>
                  <p> Chirala-523155</p>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container"></div>
      </div>
    </footer>
  );
};

export default Footer;
