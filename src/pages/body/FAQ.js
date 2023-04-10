import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="faq-area bg-color-2 area-padding">
        <div className="container">
          <div className=" row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="section-headline text-center">
                <div className="top-text-title">IMPORTANT FAQ</div>
                <h2>
                  Graphbit token fandamental{" "}
                  <span className="color-text-bold">Important</span> question
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Start Column Start --> */}
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="faq-tab-wrapper">
                {/* <!-- Start Nav tabs --> */}
                <ul className="nav faq-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      href="#tab-1"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span className="cha-title">General Questions</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#tab-2"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span className="cha-title">Token Sale</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#tab-3"
                      role="tab"
                      data-toggle="tab"
                    >
                      <span className="cha-title">Campaingns & Rewards</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="tab-content">
                {/* <!--Start Tab Content --> */}
                <div
                  role="tabpanel"
                  className="tab-pane fade in active show"
                  id="tab-1"
                >
                  {/* <!-- End Nav tabs --> */}
                  <div className="company-faq-left">
                    <div className="faq_inner">
                      <div id="accordion">
                        <div className="card">
                          <div className="card-header white-bg" id="headingOne">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                1. How can purchase presale token from ICO?
                              </button>
                            </h4>
                          </div>

                          <div
                            id="collapseOne"
                            className="collapse show "
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              .
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header white-bg" id="headingTwo">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                2. Which plateform this crypto token?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header white-bg"
                            id="headingThree"
                          >
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                3. How much time release ending ico?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header white-bg"
                            id="headingFour"
                          >
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                4. Is this token certik cirtified?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              .selection of text within a single line, the
                              amount of words is roughly being .
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header white-bg"
                            id="headingFive"
                          >
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                5. what is crypto currency?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseFive"
                            className="collapse"
                            aria-labelledby="headingFive"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End FAQ --> */}
                  </div>
                </div>
                {/* <!--Start Tab Content --> */}
                <div role="tabpanel" className="tab-pane fade" id="tab-2">
                  {/* <!-- End Nav tabs --> */}
                  <div className="company-faq-left">
                    <div className="faq_inner">
                      <div id="accordion_2">
                        <div className="card">
                          <div className="card-header white-bg" id="headingSix">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn"
                                data-toggle="collapse"
                                data-target="#collapseSix"
                                aria-expanded="true"
                                aria-controls="collapseSix"
                              >
                                1. How can purchase presale token from ICO?
                              </button>
                            </h4>
                          </div>

                          <div
                            id="collapseSix"
                            className="collapse show "
                            aria-labelledby="headingSix"
                            data-parent="#accordion_2"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              .
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header white-bg"
                            id="headingSeven"
                          >
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                              >
                                2. Which plateform this crypto token?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseSeven"
                            className="collapse"
                            aria-labelledby="headingSeven"
                            data-parent="#accordion_2"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header white-bg"
                            id="headingEight"
                          >
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                              >
                                3. How much time release ending ico?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseEight"
                            className="collapse"
                            aria-labelledby="headingEight"
                            data-parent="#accordion_2"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header white-bg"
                            id="headingNine"
                          >
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseNine"
                                aria-expanded="false"
                                aria-controls="collapseNine"
                              >
                                4. Is this token certik cirtified?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseNine"
                            className="collapse"
                            aria-labelledby="headingNine"
                            data-parent="#accordion_2"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              .selection of text within a single line, the
                              amount of words is roughly being .
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header white-bg" id="headingTen">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTen"
                                aria-expanded="false"
                                aria-controls="collapseTen"
                              >
                                5. what is crypto currency?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseTen"
                            className="collapse"
                            aria-labelledby="headingTen"
                            data-parent="#accordion_2"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End FAQ --> */}
                  </div>
                </div>
                {/* <!--Start Tab Content --> */}
                <div role="tabpanel" className="tab-pane fade" id="tab-3">
                  {/* <!-- End Nav tabs --> */}
                  <div className="company-faq-left">
                    <div className="faq_inner">
                      <div id="accordion_3">
                        <div className="card">
                          <div className="card-header white-bg" id="headingAc">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn"
                                data-toggle="collapse"
                                data-target="#collapseAc"
                                aria-expanded="true"
                                aria-controls="collapseAc"
                              >
                                1. How can purchase presale token from ICO?
                              </button>
                            </h4>
                          </div>

                          <div
                            id="collapseAc"
                            className="collapse show "
                            aria-labelledby="headingAc"
                            data-parent="#accordion_3"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              .
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header white-bg" id="headingAd">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseAd"
                                aria-expanded="false"
                                aria-controls="collapseAd"
                              >
                                2. Which plateform this crypto token?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseAd"
                            className="collapse"
                            aria-labelledby="headingAd"
                            data-parent="#accordion_3"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header white-bg" id="headingAe">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseAe"
                                aria-expanded="false"
                                aria-controls="collapseAe"
                              >
                                3. How much time release ending ico?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseAe"
                            className="collapse"
                            aria-labelledby="headingAc"
                            data-parent="#accordion_3"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header white-bg" id="headingAf">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseAf"
                                aria-expanded="false"
                                aria-controls="collapseAf"
                              >
                                4. Is this token certik certified?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseAf"
                            className="collapse"
                            aria-labelledby="headingAf"
                            data-parent="#accordion_3"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              .selection of text within a single line, the
                              amount of words is roughly being .
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header white-bg" id="headingAg">
                            <h4 className="faq-top-text">
                              <button
                                className="faq-accordion-btn collapsed"
                                data-toggle="collapse"
                                data-target="#collapseAg"
                                aria-expanded="false"
                                aria-controls="collapseAg"
                              >
                                5. what is crypto currency?
                              </button>
                            </h4>
                          </div>
                          <div
                            id="collapseAg"
                            className="collapse"
                            aria-labelledby="headingAg"
                            data-parent="#accordion_3"
                          >
                            <div className="card-body">
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End FAQ --> */}
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

export default FAQ;
