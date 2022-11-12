import "../../assets/CSS/landingpage.css";
import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import Landingpage_img from "../../assets/images/landingpage.svg";
function Landingpage() {
 
  return (
    <>
      <div className="landingpage">
        <div className="row mt-5 justify-content-end">
          <div className="col-11">
            <h2 className="enturflogo">ENTURF</h2>
          </div>
        </div>

        <div className="row mt-5 justify-content-end">
          <div className="col-6 d-flex flex-row mt-4 turf_intro col-md-5 col-sm-12">
            <div className="landingpage_title">
              <h1 className="landingpagetxt">
                HAVE A TURF / <br></br>S
                <AutoTyping
                  active
                  textRef="PORTS VENUE"
                  writeSpeed={150}
                  deleteSpeed={150}
                  delayToWrite={1000}
                  delayToDelete={2000}
                />
                <BlinkCursor active blinkSpeed={500} />
              </h1>

              <div className="landingpage_dsrptn">
                <p className="dsrptn_txt">
                  Connect with millions of sportsters by listing your turf on
                  the Enturf App
                </p>
              </div>

              <div className="d-flex flex-row mt-5">
                <div className="col-lg-6 col-6 d-flex flex-column mt-4">
                  <h6 className="turf_title">MORE THAN</h6>
                  <h1 className="turf_no">
                    <CountUp end={50} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                    <span className="users ms-1">+</span>
                  </h1>
                  <h6 className="turf_dsrptn mt-1 me-2">TURFS</h6>
                </div>
                <div className="col-lg-4 col-6 d-flex flex-column mt-4">
                  <h6 className="turf_title">MORE THAN</h6>
                  <h1 className="user_no">
                    <CountUp end={7} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>{" "}
                    <span className="users">K+</span>
                  </h1>
                  <h6 className="turf_dsrptn mt-1 ms-1">USERS</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <img src={Landingpage_img} className="landingpage_img" alt="landing"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
