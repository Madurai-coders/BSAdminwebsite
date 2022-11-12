import React, { Component } from "react";
import "../../assets/CSS/AIsmartturf.css";
import Camera from "../../assets/images/camera.svg";
function AIsmartturf() {
  return (
    <>
      <div className="smartturf">
        <div className="row">
          <div className="col-1">
            <img src={Camera} className="Scamera" alt="cam"></img>
          </div>
          <div className="col-10 mt-5 pt-5 text-center">
            <div className="covertturf mt-5 ms-1">
              <div className="covertturf_title">
                <h1 className="title">
                Covert your turf, Into AI powered smart turf in</h1>
                <div className="mt-4 pt-2">
                  <h1 className="sub_title">0 Investment
                  <span className="sub_title">0 Efforts</span>
                  <span>0 Maintanence</span></h1>
                </div>
                <div className="checkbutton pt-5">
                <button type="button" className="check_btn btn btn-success">Check Eligibility Today</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIsmartturf;
