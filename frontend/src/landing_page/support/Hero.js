import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary p-5 mb-5 " id="supportHero">
      <div className="p-3 mt-5 mb-5" id="supportWrapper">
        <h3 style={{ color: "white" }}>support portal</h3>
        <a href="" style={{ color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="p-3 mt-5 row ">
        <div className="col-6 p-3 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected.."></input>
          <br></br>
          <a href="#" style={{ color: "white" }}>
            Track account opening
          </a>
          <a href="" style={{ color: "white" }}>
            Track segment activation
          </a>
          <a href="" style={{ color: "white" }}>
            Intraday margins
          </a>
          <br></br>
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-3 ">
          <h1 className="fs-4">Featured</h1>

          <br></br>

          <a href="" style={{ color: "white" }}>
            Current Takeovers and Delisting – January 2024
          </a>
          <br></br>
          <a href="" style={{ color: "white" }}>
            Latest Intraday leverages - MIS & CO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
