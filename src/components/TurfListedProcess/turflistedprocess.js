import "../../assets/CSS/turflistedprocess.css";
import Form from "../../assets/images/form.svg";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
// import Mails from "../animation/emails";
// import Turf from "../animation/enlist";
import PersonalAnimation from "../animation/personalanimation";
import SEllipse from "../../assets/images/Ellipse1.svg";
import BEllipse from "../../assets/images/Ellipse.svg";
import BEllipse_1 from "../../assets/images/Ellipse2.svg";
function TurfListedProcess() {
  const Mobile = useMediaQuery({ maxWidth: 768 });
  const Tab = useMediaQuery({ minWidth: 769 });

  const [personal, setpersonal] = useState(true);
  const [email, setemail] = useState(false);
  const [enlist, setenlist] = useState(false);

  function Step_1() {
    setemail(false);
    setenlist(false);
    setpersonal(true);
    document.getElementById("myBar").style.height = "0";
    document.getElementById("mybar").style.height = "0";
  }

  function Step_2() {
    setemail(true);
    setenlist(false);
    setpersonal(false);
    document.getElementById("mybar").style.height = "0";
    document.querySelector("#circle2").classList.add("step_2");
    var elem = document.getElementById("myBar");
    var height = 20;
    var id = setInterval(frame, 3);
    function frame() {
      if (height >= 100) {
        clearInterval(id);
      } else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }

  function Step_3() {
    setemail(false);
    setpersonal(false);
    setenlist(true);
    document.querySelector("#circle3").classList.add("step_2");
    var elem = document.getElementById("mybar");
    var height = 20;
    var id = setInterval(frame, 1);
    function frame() {
      if (height >= 100) {
        clearInterval(id);
      } else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //   setpersonal(false)
  //   setemail(true)
  //   }, 4000);
  // });

  return (
    <>
      <div className="turflistedprocess mt-5 pt-3">
        <div className="row mt-5 justify-content-start">
          <div className="col-12 text-center">
            <h3 className="process_title">
              Easy 3 step process to get listed on the Enturf App
            </h3>
          </div>
        </div>
        {Tab && (
          <>
             

            <div className="row step_process">  
              <div className="col-7">
              <div className="d-flex flex-row">
              <div className="el_1">
                  <img src={SEllipse} alt="elipse" className=""></img>
                </div>
                <div className="el_2">
                  <img src={BEllipse} alt="elipse"></img>
                </div>
              </div>  
                <div className="animation">
                  <PersonalAnimation />
                </div>
              </div>

              <div className="col-5">
                <div className="d-flex flex-row steps_process">
                <div className="d-flex flex-column">
                  <div className="circle" onClick={Step_1}>
                    <span className="no1">1</span>
                  </div>
                  <div class="w3-light-grey">
                    <div
                      id="myBar"
                      class="w3-container"
                      style={{ height: "0%" }}
                    ></div>
                  </div>

                  <button className="circle2" id="circle2" onClick={Step_2}>
                    <span className="no2">2</span>
                  </button>
                  <div class="w3-light-grey">
                    <div
                      id="mybar"
                      class="w3-container"
                      style={{ height: "0%" }}
                    ></div>
                  </div>
                  <button className="circle2" id="circle3" onClick={Step_3}>
                    <span className="no2">3</span>
                  </button>
                </div>
                <div className="ms-5 mt-4 pt-3 slidetext">
                  <h6 className="slidetxt">
                    Fill form with details
                  </h6>
                  <br></br>
                  <h6 className="slidetxt_2 mt-4 pt-3">
                    Registration link along with details of personal
                guide will be sent via email
                  </h6>
                  <br></br>

                  <h6 className="slidetxt_3 mt-5">
                    Get Enlisted on Enturf App post Verification
                  </h6>
                </div>
                </div>
              </div>

             <div className="el_3 ms-5">
                <img src={BEllipse_1} alt="elipse"></img>
              </div>  
              </div>

          </>
        )}
      </div>

      {Mobile && (
        <>
          <div className="turflistprocess">
            <div className="row justify-content-end">
              <div className="col-md-9 col-11 d-flex flex-row">
                <div className="d-flex flex-column">
                  <div className="circle" onClick={Step_1}>
                    <span className="no1">1</span>
                  </div>
                  <div class="w3-light-grey">
                    <div
                      id="myBar"
                      class="w3-container"
                      style={{ height: "0%" }}
                    ></div>
                  </div>

                  <button className="circle2" id="circle2" onClick={Step_2}>
                    <span className="no2">2</span>
                  </button>
                  <div class="w3-light-grey">
                    <div
                      id="mybar"
                      class="w3-container"
                      style={{ height: "0%" }}
                    ></div>
                  </div>
                  <button className="circle2" id="circle3" onClick={Step_3}>
                    <span className="no2">3</span>
                  </button>
                </div>

                <div className="slidetext mt-4 ms-5">
                  <h6 className="slidetxt mt-4">Fill form with details</h6>
                  <br></br>
                  <h6 className="slidetxt_2 mt-5">
                    Registration link along with details of personal guide will
                    be sent via email
                  </h6>
                  <br></br>

                  <h6 className="slidetxt_3 mt-5">
                    Get Enlisted on Enturf App post Verification
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <img src={Form} className="img-fluid mt-5 pr" alt="process"></img>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TurfListedProcess;
