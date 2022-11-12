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
                <div className="d-flex flex-row ms-5 mt-4 pt-2 ps-5">
                  <h1 className="sub_title ms-5">0 Investment</h1>
                  <h1 className="sub_title ms-5">0 Efforts</h1>
                  <h1 className="sub_title ms-5">0 Maintanence</h1>
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
