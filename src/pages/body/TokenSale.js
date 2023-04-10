import React, { useEffect } from "react";
import Token from "../../services/Token";
import Swap from "../../services/Swap";

const TokenSale = () => {
  const { balance, bal, glblBal, glblBalance } = Token();
  const { swaptoken, handleChange, disable } = Swap();

  useEffect(() => {
    glblBalance();
  });

  return (
    <div>
      <div id="id" className="swap-area bg-color-3 fix area-padding">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="swap-inner">
                <div className="swap-token left-headline">
                  <div className="top-text-title">COIN SWAP</div>
                  <h2>
                    You can swap{" "}
                    <span className="color-text-bold">Graphbit token</span>{" "}
                    anytime
                  </h2>
                  <p>
                    Blockchain opt in to the projects they genuinely want to
                    work on.maintains the amount of lines. When replacing a
                    selection. help agencies to define. define their new
                    business objectives and then Our consultants opt in to the
                    projects they genuinely want to work on.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              {/* <!-- Start mony send content --> */}
              <div className="money-send">
                <div className="calculator-inner">
                  <div className="single-cal">
                    <div className="swap-top d-flex flex-wrap align-items-center">
                      <div className="swap-left">
                        <span>Graphbit</span>
                      </div>
                      <div className="swap-right">
                        <ul className="dashboard-right-menus">
                          <li>
                            <a href="#0" className="thumbs">
                              <i className="ti-layout-list-thumb"></i>
                            </a>

                            <div className="notification-area left-part">
                              <div className="notifacation-header">
                                <span className="set-text">
                                  <i className="ti-settings"></i>Setting
                                </span>
                                <div className="swap-set">
                                  <span>Default Transaction Spped</span>
                                  <ul>
                                    <li>
                                      <a href="#">Standard (6)</a>
                                    </li>
                                    <li>
                                      <a href="#">Fast (7)</a>
                                    </li>
                                    <li>
                                      <a href="#">Instant (8)</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="swap-set slipege">
                                  <span>Slippage Tolerance</span>
                                  <ul>
                                    <li>
                                      <a href="#">0.1%</a>
                                    </li>
                                    <li>
                                      <a href="#">0.5%</a>
                                    </li>
                                    <li>
                                      <a href="#">1%</a>
                                    </li>
                                    <li>
                                      <a href="#">10%</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="#0" className="author">
                              <i className="ti-time"></i>
                            </a>
                            <div className="notification-area side-part">
                              <div className="author-body text-center">
                                <span>
                                  Aspernatur sit adipisci quaerat unde at neque
                                  Redug Lagre dolorAspernatur sit adipisci
                                  quaerat unde at neque Redug Lagre
                                  dolor.Aspernatur sit adipisci quaerat unde at
                                  neque Redug Lagre dolor
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="inner-form">
                      <form action="#">
                        <label>Balance: {bal}</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="0"
                          id="amount"
                          name="amount"
                          onChange={handleChange}
                        />
                        <select
                          className="cus-check"
                          onChange={(e) => balance(e.target.value)}
                        >
                          <option value="USDT">USDT</option>
                          <option value="ANT">ANT</option>
                          <option value="COISTAR">CST</option>
                        </select>
                      </form>
                    </div>
                    <div className="middle-inti text-center">
                      <a href="#id">
                        <i className="ti-arrow-down"></i>
                      </a>
                    </div>
                    <div className="inner-form">
                      <form action="#">
                        <label>Balance: {glblBal}</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="0"
                        />
                        <select className="cus-check">
                          <option value="position">GLBL</option>
                        </select>
                      </form>
                    </div>
                    <div className="inner-form-text">
                      <div className="rate-text d-flex flex-wrap align-items-center">
                        <span>Swap Anyway</span>
                        <span>Auto</span>
                      </div>
                    </div>
                    <button
                      className="cale-btn"
                      onClick={swaptoken}
                      disable={disable.toString()}
                    >
                      {disable ? "Loading..." : "Swap"}
                    </button>
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

export default TokenSale;
