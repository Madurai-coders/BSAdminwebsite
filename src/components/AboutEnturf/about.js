import "../../assets/CSS/about.css";
import Aboutdesign from "../../assets/images/aboutdesign.svg";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
function About() {
  const AboutEnturf = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: AboutEnturf.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/about.json"),
    });
  }, []);
  return (
    <>
      <div className="about">
        <div className="aboutenturf">
          <div className="row">
            <div  className="col-lg-1 col-md-1 col-sm-1 abtdesign">
          <img src={Aboutdesign} className=" ab" alt="about"></img>
          </div>
            <div className="col-lg-5 col-md-5 col-sm-11 mt-5">
              <div className="about_tit mt-5 pt-5">
                <h1 className="about_title mt-5">ABOUT ENTURF</h1>
              </div>
              <div className="about_des mt-5">
                <p className="about_dsrptn">
                  Your all in one turf Management App that<br></br> converts
                  normal turfs to super powered AI<br></br> enabled turfs.
                </p>
              </div>
            </div>
          
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="Enturfadminwebsite_loader"
                id="lottie"
                ref={AboutEnturf}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
