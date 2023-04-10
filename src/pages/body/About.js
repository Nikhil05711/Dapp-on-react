import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-area bg-color-3 fix area-padding">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-content">
                <div
                  className="about-images wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <img src="asset/img/about/ab2.png" alt="" />
                  <div className="rotmate-image rotateme">
                    <img src="asset/img/about/circle.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-all">
                <div className="about-inner">
                  {/* <!-- Start about --> */}
                  <div
                    className="single-about wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <span className="about-icon">01</span>
                    <div className="support-text">
                      <h4>
                        <a href="#">Decentralized System</a>
                      </h4>
                      <p>
                        Replacing a maintains the amount of lines. When
                        replacing a selection. help agencies to define. define
                        their new business objectives and then. maintains the
                        amount of lines
                      </p>
                    </div>
                  </div>
                  {/* <!-- Start about --> */}
                  <div
                    className="single-about wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <span className="about-icon">02</span>
                    <div className="support-text">
                      <h4>
                        <a href="#">Blockchain Wallet</a>
                      </h4>
                      <p>
                        Replacing a maintains the amount of lines. When
                        replacing a selection. help agencies to define. define
                        their new business objectives and then. maintains the
                        amount of lines
                      </p>
                    </div>
                  </div>
                  {/* <!-- Start about --> */}
                  <div
                    className="single-about wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <span className="about-icon">03</span>
                    <div className="support-text">
                      <h4>
                        <a href="#">Web3 Project</a>
                      </h4>
                      <p>
                        Replacing a maintains the amount of lines. When
                        replacing a selection. help agencies to define. define
                        their new business objectives and then. maintains the
                        amount of lines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End about --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
