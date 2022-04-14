import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark-color" id="footer">
      <div className="container">
        <div className="row">
          {/* <!-- FOOTER TOP --> */}
          <div className="col-12" id="footer-top">
            <div className="row justify-content-between">
              <div className="col-4">
                <h2>SM Cleaning Services</h2>
              </div>
              <div className="col-4" id="social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
          {/* <!-- FOOTER DETAILS --> */}
          <div className="col-12" id="footer-details">
            <div className="row">
              <div className="col-12 col-md-4" id="news-container">
                <h4>Stay on top of the news</h4>
                <p className="secondary-color">
                  Sign up to find out first hand
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="btn btn-dark">Sign up</button>
                </form>
              </div>
              <div className="col-12 col-md-4" id="contact-container">
                <h4>Forms of contact forms</h4>
                <p className="secondary-color">360292-5685</p>
                <p className="secondary-color">contato@sanmarcos.com</p>
                <p className="secondary-color">
                  Address: 605 Acorn Ct SE, Lacey, WA 98503
                </p>
              </div>
              <div className="col-12 col-md-4" id="links-container">
                <div className="row">
                  <h4>You may be searching for:</h4>
                  <div className="col">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="secondary-color">
                          Customizable Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="secondary-color">
                          High-Quality Cleaning Products
                        </a>
                      </li>
                      <li>
                        <a href="#" className="secondary-color">
                          Customized cleaning regime
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOOTER BOTTOM --> */}
          <div className="col-12" id="footer-bottom">
            <div className="row justify-content-between">
              <div className="col-12 col-md-3">
                <p className="secondary-color">AdianteX &copy; 2022</p>
              </div>
              <div className="col-12 col-md-3">
                <p className="secondary-color">
                  Made with love <i className="bi bi-heart"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
