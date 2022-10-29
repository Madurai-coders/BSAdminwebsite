import '../../assets/CSS/landingpage.css'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import Header_img from '../../assets/images/Header.svg';
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
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
        <div className="row mt-5">
          <div className="col-6">
              <h2 className="enturflogo ms-5 ps-5">
                EN<span className="sublogo">TURF</span>
              </h2>
      
            
          </div>
          <div className="col-lg-5 col-md-5 mt-4 justify-content-end d-flex flex-row ms-2 enturf_nav col-sm-12">
            <h6 className="enturf_logintxt mt-1 me-4">LOGIN</h6>
            <h6 className="enturf_registertxt mt-1 ">REGISTER</h6>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-5 d-flex flex-row mt-4 turf_intro col-sm-12 col-md-5">
            <div className="landingpage_title ms-5 ps-5">
              <h1 className="landingpagetxt">HAVE A TURF /<br></br> SPORTS VENUE</h1>
              <div className="landingpage_dsrptn mt-5">
                <p className="dsrptn_txt">
                  Connect with millions of sportsters by listing your
                  turf on the Enturf App
                </p>
              </div>
              <div className="turfs d-flex flex-row mt-5 ms-1">
                <div className=" col-6 TURFS d-flex flex-column mt-4">
                  <h6 className="turf_title">MORE THAN</h6>
                  <h1 className="turf_no">
                  <CountUp end={50} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>{" "}
                        <span className="turfs">+</span>
                  </h1>
                  <h6 className="turf_dsrptn mt-1">TURFS</h6>
                </div>
                <div className=" col-3 USERS d-flex flex-column mt-4">
                  <h6 className="turf_title">MORE THAN</h6>
                  <h1 className="turf_no">

                  <CountUp end={7} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>{" "}
                        <span className="turfs">K+</span>

                  </h1>
                  <h6 className="turf_dsrptn mt-1">USERS</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12'>
            <div className='landingpage_img'>
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
