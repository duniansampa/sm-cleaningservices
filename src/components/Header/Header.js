import React from "react";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-primary-color"
      id="navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="img/sm-icon.jpg" alt="San Marco Cleaning Service" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#featured-container">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#info-container">
                Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
