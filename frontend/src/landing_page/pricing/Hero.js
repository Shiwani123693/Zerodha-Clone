import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="fs-4 text-center">Charges</h1>
      <h4 className="text-muted text-center fs-5">
        List of all charges and taxes
      </h4>
      <div className="row text-center mt-5 mb-5">
        <div className="col-4 p-4 ">
          <img src="media/pricingEquity.svg" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p  className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
           <img src="media/intradayTrades.svg"  />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted">
           Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
  <img src="media/pricingEquity.svg"  />
          <h1 className="fs-4">Free direct MF</h1>
          <p  className="text-muted">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
