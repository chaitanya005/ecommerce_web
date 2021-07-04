import React from "react";

const Footer = () => {
  return (
    <footer className="white-curve-before curve-before-80 page-footer footer-view-links section-white-text">
      <div className="overflow-back bg-vegetables-pattern-white opacity-3"></div>
      <div className="footer-body">
        <div className="container">
          <nav className="footer-navbar">
            <div className="grid row">
              <div className="col-md-6 col-lg-3">
                <a className="navbar-brand" href="homepage-1.html">
                  <span className="logo-element-line">
                    <span className="logo-icon">
                      <span
                        className="svg-content svg-fill-theme"
                        data-svg="assets/images/svg/logo-part.svg"
                      ></span>
                    </span>
                    <span className="logo-text">Shop and Ship</span>
                  </span>
                </a>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  faucibus egestas elit.
                </p>
                <div className="footer-socials">
                  {/* <a className="footer-socials-link" href="/#">
                    <i className="fab fa-twitter"></i>
                  </a> */}
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
                </div>
              </div>
              <div className="col-md-12 col-lg-6 order-md-last">
                <div className="grid row">
                  {/* <div className="col-md-6">
                    <h5 className="footer-title">Pages</h5>
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="shop-sidebar-right.html">
                          Shop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog-sidebar-right.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact-us.html">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div> */}
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
                  <i className="fab fa-whatsapp"></i> +91 8970462050 <br />
                  <i className="fa fa-phone-alt"></i> +91 9030462050 <br />
                  <a href="mailto:shopandship.sas@gmail.com">
                    <i className="fa fa-mail-bulk"></i>
                    {"  "}
                    shopandship.sas@gmail.com
                  </a>
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
