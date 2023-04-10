import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="intro-area intro-area-2">
        <div className="bg-wrapper">
          <img src="asset/img/background/bg2.jpg" alt="" />
        </div>
        <div className="intro-content">
          <div className="slider-content">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="slide-all-text">
                    {/* <!-- layer 2 --> */}
                    <div className="layer-2 wow fadeInUp" data-wow-delay="0.3s">
                      <h1 className="title-2">
                        The blockchain{" "}
                        <span className="color-text-bold">technology </span>for
                        a brighter tomorrow{" "}
                      </h1>
                    </div>
                    {/* <!-- layer 3 --> */}
                    <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                      <a href="contact.html" className="ready-btn coin-btn">
                        Get Started
                      </a>
                      <a
                        href="coin.html"
                        className="ready-btn color-btn last-btn"
                      >
                        White Paper
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div
                    className="slide-images wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img src="asset/img/slider/s1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
