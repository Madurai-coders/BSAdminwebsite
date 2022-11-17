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
          <div className="col-lg-10 col-md-10 col-sm-10 pt-5 mt-5 text-center Sturf">
            <div className="covertturf mt-5">
              <div className="covertturf_title">
                <h1 className="title">
                  Covert your turf into AI powered smart turf in
                </h1>
                <div
                  className="sub_tit mt-4 pt-2"
                
                >
                  <span className="sub_title" 
                >0 Investment</span>
                  <span className="sub_title ms-5">0 Efforts</span>
                  <span className="sub_title ms-5">0 Maintanence</span>
                </div>
                <div className="checkbutton pt-5">
                  <a href="#contact" className="check_btn btn btn-success">
                    Check Eligibility Today
                  </a>
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
