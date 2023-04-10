import React, { useEffect } from "react";
import Metamask from "../services/Metamask";
import Account from "../services/Account";
const Header = () => {
  const { setConnected, connected, init } = Metamask();
  const { connectedAddress, myAddress, handleCopy } = Account();

  useEffect(() => {
    setConnected(JSON.parse(window.localStorage.getItem("connection")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("connection", connected);
    init();

    connectedAddress();
  }, [connected]);

  return (
    <div>
      <div id="preloader"></div>
      <header className="header-one">
        <div id="sticker" className="header-menu-area header-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
                <div className="logo">
                  <a href="index.html">
                    <img src="asset/img/logo/logo2.png" alt="" />
                  </a>
                </div>
              </div>
              {connected ? (
                <div className="col-xl-10 col-lg-10 col-md-9">
                  <div className="header-right ">
                    {connected ? (
                      <a href="#id" className="top-btn coin-btn">
                        Swap
                      </a>
                    ) : (
                      <a className="top-btn coin-btn" onClick={init}>
                        Connect Wallet
                      </a>
                    )}
                  </div>

                  <div className="header-right ">
                    <a
                      href="#id"
                      className="top-btn coin-btn "
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      Connected Address
                    </a>
                    <div id="demo" className="collapse cus-col">
                      {myAddress}
                      <span
                        className="fa fa-copy cus-copy"
                        onClick={handleCopy}
                      ></span>
                    </div>
                  </div>

                  <div className="header_menu f-right">
                    <nav id="mobile-menu">
                      <ul className="main-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="submenu">
                            <li>
                              <a href="index.html">Home 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="resulta">
                          <a href="about.html">About us</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="user-panel.html">User panel</a>
                            </li>
                            <li>
                              <a href="coin.html">Coin Information</a>
                            </li>
                            <li>
                              <a href="stacking.html">Coin Stacking</a>
                            </li>
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="token-ico.html">Token ICO</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="signup.html">Signup</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="contact">
                          <a href="contact.html">Contact us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ) : (
                <div className="col-xl-10 col-lg-10 col-md-9">
                  <div className="header-right ">
                    {connected ? (
                      <a href="#id" className="top-btn coin-btn">
                        Swap
                      </a>
                    ) : (
                      <a className="top-btn coin-btn" onClick={init}>
                        Connect Wallet
                      </a>
                    )}
                  </div>

                  <div className="header_menu f-right">
                    <nav id="mobile-menu">
                      <ul className="main-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="submenu">
                            <li>
                              <a href="index.html">Home 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="resulta">
                          <a href="about.html">About us</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="user-panel.html">User panel</a>
                            </li>
                            <li>
                              <a href="coin.html">Coin Information</a>
                            </li>
                            <li>
                              <a href="stacking.html">Coin Stacking</a>
                            </li>
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="token-ico.html">Token ICO</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="signup.html">Signup</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="contact">
                          <a href="contact.html">Contact us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
