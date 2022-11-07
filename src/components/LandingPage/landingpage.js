import "../../assets/CSS/landingpage.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import Header_img from '../../assets/images/Header.svg';
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import AutoTyping, { BlinkCursor } from "react-auto-typing";

function Landingpage() {
  const Landingpage = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: Landingpage.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/Landing.json"),
    });
  }, []);

  return (
    <>
      <div className="landingpage">
        <div className="row mt-5 lg">
          <div className="col-lg-11 col-md-11 col-10">
            <h2 className="enturflogo">
              EN<span className="sublogo">TURF</span>
            </h2>
          </div>
        </div>

        <div className="row mt-5 TURFS">
          <div className="col-lg-5 d-flex flex-row mt-4 turf_intro col-sm-12 col-md-5">
            <div className="landingpage_title">
              <h1 className="landingpagetxt">
                HAVE A TURF / <br></br> S
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

              <div className="turfs d-flex flex-row mt-5">
                <div className="col-lg-6 col-6 TURFS d-flex flex-column mt-4">
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
                <div className="col-lg-4 col-6 TURFS d-flex flex-column mt-4">
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
            <div className="col-lg-7 col-md-7 col-12 land_img">
              <div className="landingpage_img">
                <div
                  className="Enturfadminwebsite_loader"
                  id="lottie"
                  ref={Landingpage}
                ></div>
            </div>
    
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
