import React from "react";

const Feature = () => {
  return (
    <div>
      {" "}
      <div className="feature-area bg-color fix area-padding">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="feature-inner">
                <div className="left-headline">
                  <div className="top-text-title">DOWNLOAD WALLET</div>
                  <h2>
                    Wallet <span className="color-text-bold">available</span>{" "}
                    play store & App store
                  </h2>
                  <p>
                    The phrasal sequence of the Lorem Ipsum text is now so and
                    that many the phrase when found, an alarm can be raised.
                    phrasal sequence of the Lorem Ipsum text is now so and that
                    many the phrase when found, an alarm can be raised
                  </p>
                </div>
                <div className="down-btn">
                  <a href="contact.html" className="app-btn coin-btn">
                    Play store
                  </a>
                  <a href="contact.html" className="app-btn color-btn last-btn">
                    App store
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="feature-content">
                <div className="feature-images">
                  <img
                    src="asset/img/feature/f2.png"
                    alt=""
                    className="first-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
