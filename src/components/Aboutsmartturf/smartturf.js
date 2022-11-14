import React, { Component } from "react";
import "../../assets/CSS/smartturf.css";
import Aboutcamera from "../../assets/images/aboutcamera.svg";

function Smartturf() {
  return (
    <>
      <div className="aboutsmartturf">
        <div className="row justify-content-end">
          <div className="col-2">
            <img src={Aboutcamera} className="aboutcamera ms-4 img-fluid" alt="about"></img>
          </div>

        </div>
        <div className="row mt-5 justify-content-center about">
          <div className="col-12 text-center mt-5 about">
            <h1 className="aboutturf_title mt-5">What is Smart Turf ?</h1>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-11 text-center mt-3">
            <div className="aboutturf_txt">
              <h5 className="aboutturf_text">
                Our experts inspect your turf and install our unique camera
                systems on it at zero cost. These camera systems operate on it's
                own and customers get their match videos instantaneously in the
                Enturf user app.{" "}
              </h5>
              <h5 className="aboutturf_text mt-5 pt-4">
                This feature has been proven to increase customer recurring
                rates by 30%. And that's not it , you also get free marketing,
                additional revenue from this feature.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smartturf;
