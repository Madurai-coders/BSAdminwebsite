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
        <div className="aboutenturf">
          <div className="row ">
            <div  className="col-lg-1 col-md-1 col-sm-0 mt-5 pt-5 ab">
          <img src={Aboutdesign} className="mt-5 pt-5 abt_design" alt="about"></img>
          </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-11 abt">
             <div className="about">
                <h1 className="about_title">ABOUT ENTURF</h1>
              <div className="about_des">
                <p className="about_dsrptn mt-5">
                  Your all in one turf Management App that<br></br> converts
                  normal turfs to super powered AI<br></br> enabled turfs.
                </p>
              </div>
            </div>
            </div>

          
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 abt">
              <div className="ab_img">
              <div
                className="Enturfadminwebsite_about"
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
