import React from "react";

const Tournament = () => {
  return (
    <div>
      <div className="information-area bg-color fix area-padding-2">
        <div className="container">
          <div className=" row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="section-headline text-center">
                <div className="top-text-title">Graphbit INFORMATION</div>
                <h2>
                  Graphbit token supply and{" "}
                  <span className="color-text-bold">blockchain</span>{" "}
                  information
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-wrap align-items-center">
            {/* <!-- Start column  --> */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="price-box-inner">
                <h5>Supply & Price Information</h5>
                <div className="table-responsive">
                  <table className="table table-borderless text-white tableInfo">
                    <tbody>
                      <tr>
                        <td>Initial Supply</td>
                        <td>:</td>
                        <td>1000,000,000 $CNS</td>
                      </tr>
                      <tr>
                        <td>Liquidity</td>
                        <td>:</td>
                        <td>450 BNB</td>
                      </tr>
                      <tr>
                        <td>Initial Price in BNB</td>
                        <td>:</td>
                        <td>0.0000005 BNB ,estimate ( $0.0019 / $CNS )</td>
                      </tr>
                      <tr>
                        <td>Lock</td>
                        <td>:</td>
                        <td>6 Months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- End column  --> */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="info-images">
                <img src="asset/img/feature/pasa.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="info-images">
                <img src="asset/img/feature/pasa1.png" alt="" />
              </div>
            </div>
            {/* <!-- Start column  --> */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="price-box-inner right-info-content">
                <h5>Token Information</h5>
                <div className="table-responsive">
                  <table className="table table-borderless text-white tableInfo">
                    <tbody>
                      <tr>
                        <td>Token Name</td>
                        <td>:</td>
                        <td>Graphbit</td>
                      </tr>
                      <tr>
                        <td>Network</td>
                        <td>:</td>
                        <td>Binance Smart Chain ( BSC )</td>
                      </tr>
                      <tr>
                        <td>Token Ticker</td>
                        <td>:</td>
                        <td>$CNS</td>
                      </tr>
                      <tr>
                        <td>Max Supply</td>
                        <td>:</td>
                        <td>100,000,000 $CNS</td>
                      </tr>
                      <tr>
                        <td>Decimals</td>
                        <td>:</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>Tax Reflection</td>
                        <td>:</td>
                        <td>6% | 3% Development | 3% Marketing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-wrap align-items-center">
            {/* <!-- Start column  --> */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="price-box-inner">
                <h5>Blockchain Information</h5>
                <div className="table-responsive">
                  <table className="table table-borderless text-white tableInfo">
                    <tbody>
                      <tr>
                        <td>Consensus</td>
                        <td>:</td>
                        <td>HPOS</td>
                      </tr>
                      <tr>
                        <td>Performance</td>
                        <td>:</td>
                        <td>TPS +7000 “ Average Block Interval 3s</td>
                      </tr>
                      <tr>
                        <td>Compatible</td>
                        <td>:</td>
                        <td>EVM “Ethereum Virtual Machine”</td>
                      </tr>
                      <tr>
                        <td>Crosschain</td>
                        <td>:</td>
                        <td>Supported</td>
                      </tr>
                      <tr>
                        <td>Token Contract</td>
                        <td>:</td>
                        <td>Supported</td>
                      </tr>
                      <tr>
                        <td>Smart Contract</td>
                        <td>:</td>
                        <td>Supported</td>
                      </tr>
                      <tr>
                        <td>Smart Contract Type</td>
                        <td>:</td>
                        <td>ERC20 & BSC20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="info-images">
                <img src="asset/img/feature/pasa2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
