import "../../assets/CSS/advantage.css";
import React, { Component } from "react";
import Advantage_img from "../../assets/images/advantage.svg";
function Advantage() {
  return (
    <>
      <div className="advantageofenturf mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="advantage_title">
              Advantage of Enturf
            </h1>
          </div>
          <div className="col-4 text-center mt-5 pt-2">
            <div className="advantage_1">
              <h5 className="advantage_txt">Increased revenue</h5>
            </div>
            <div className="advantage_2">
              <h5 className="advantage_txt">Technologically superior turf</h5>
            </div>
          </div>
          <div className="col-4 mt-5 text-center">
            <img src={Advantage_img} className="" alt="ad"></img>
          </div>
          <div className="col-4 text-center">
            <div className="advantage_3">
              <h5 className="advantage_txt">Booking and User management</h5>
            </div>
            <div className="advantage_4">
              <h5 className="advantage_txt">Access to millions of customer</h5>
            </div>
          </div>
          <div className="col-4 text-center mt-5">
          <div className="advantage_5">
              <h5 className="advantage_txt">Hassle free registration</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Advantage;
