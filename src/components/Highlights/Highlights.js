import React from "react";

export default function Highlights() {
  return (
    <div className="container" id="featured-container">
      <div className="col-12">
        <h2 className="title primary-color">Featured Works</h2>
        <p className="subtitle secondary-color">
          See pictures of places we clean.
        </p>
      </div>
      <div className="col-12" id="featured-images">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img
              src="img/cleaning-1.jpg"
              alt="Cleaning 1"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/cleaning-2.jpg"
              alt="Cleaning 2"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/cleaning-3.jpg"
              alt="Cleaning 3"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/cleaning-4.jpg"
              alt="Cleaning 4"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/cleaning-5.jpg"
              alt="Cleaning 5"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/cleaning-6.jpg"
              alt="Cleaning 6"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
