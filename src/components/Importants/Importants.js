import React from "react";

export default function Importants() {
  return (
    <div className="container" id="info-container">
      <div className="col-12">
        <h2 className="title primary-color">Important Details</h2>
        <p className="subtitle secondary-color">
          We offer high quality cleaning
        </p>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-5" id="info-banner">
            <img
              src="img/infobanner.jpg"
              alt="Informações"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-7 bg-secondary-color" id="info-content">
            <div className="row">
              <div className="col-12">
                <h2 className="title">Data of cleanings:</h2>
                <p className="subtitle secondary-color">
                  Welcome! We are a specialized cleaning service. We handle
                  anything from your personal home to offices to even commercial
                  cleanings. Let us do the dirty work for you, we clean while
                  you relax
                </p>
              </div>
              <div className="col-12" id="info-numbers">
                <div className="row">
                  <div className="col-4">
                    <h3 className="primary-color">+10</h3>
                    <p className="secondary-color">Years of experience</p>
                  </div>
                  <div className="col-4">
                    <h3 className="primary-color">+100</h3>
                    <p className="secondary-color">Cleanings performed</p>
                  </div>
                  <div className="col-4">
                    <h3 className="primary-color">+50</h3>
                    <p className="secondary-color">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
