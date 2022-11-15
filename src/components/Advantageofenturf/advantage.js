import "../../assets/CSS/advantage.css";
import React, { Component } from "react";
import Advantage_img from "../../assets/images/advantage.svg";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import { useEffect } from "react";
function Advantage() {
  useEffect(() => {
    AOS.init();
  }, []);
  const Mobile = useMediaQuery({ maxWidth: 768 });
  const Tab = useMediaQuery({ minWidth: 769 });
  return (
    <>
      <div className="advantageofenturf mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="advantage_title">Advantage of Enturf</h1>
          </div>
          {Tab && (
            <>
              <div className="col-4 text-center mt-5 pt-2">
                <div className="advantage_1" data-aos="zoom-in-right">
                  <h5 className="advantage_txt">Increased revenue</h5>
                </div>
                <div className="advantage_2" data-aos="zoom-in-right">
                  <h5 className="advantage_txt">
                    Technologically superior turf
                  </h5>
                </div>
              </div>
              <div className="col-4 mt-5 text-center">
                <img src={Advantage_img} className="img-fluid" alt="ad"></img>
              </div>
              <div className="col-4 text-center">
                <div className="advantage_3" data-aos="zoom-in-left">
                  <h5 className="advantage_txt">Booking and User management</h5>
                </div>
                <div className="advantage_4" data-aos="zoom-in-left">
                  <h5 className="advantage_txt">
                    Access to millions of customer
                  </h5>
                </div>
              </div>
              <div className="col-4 text-center mt-5">
                <div className="advantage_5" data-aos="zoom-in-up">
                  <h5 className="advantage_txt">Hassle free registration</h5>
                </div>
              </div>
            </>
          )}

          {Mobile && (
            <>
              <div className="col-12 mt-5 text-center">
                <img src={Advantage_img} className="img-fluid" alt="ad"></img>
              </div>

              <div className="col-10 text-center mt-5 pt-2">
                <div className="advantage_1">
                  <h5 className="advantage_txt">Increased revenue</h5>
                </div>
              </div>
              <div className="col-10 text-center mt-3">
                <div className="advantage_2">
                  <h5 className="advantage_txt">
                    Technologically superior turf
                  </h5>
                </div>
              </div>
              <div className="col-10 text-center mt-3">
                <div className="advantage_3">
                  <h5 className="advantage_txt">Booking and User management</h5>
                </div>
                </div>
                <div className="col-10 text-center mt-3">
                <div className="advantage_4">
                  <h5 className="advantage_txt">
                    Access to millions of customer
                  </h5>
                </div>
              </div>
              <div className="col-10 text-center mt-3">
                <div className="advantage_5">
                  <h5 className="advantage_txt">Hassle free registration</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Advantage;
