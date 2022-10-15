import "../../assets/CSS/turflistedprocess.css";
import Form from "../../assets/images/form.svg";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
function TurfListedProcess() {
  const Mobile = useMediaQuery({ maxWidth: 768 });
  const Tab = useMediaQuery({ minWidth: 769 });
  const TurfListProcess = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: TurfListProcess.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/Turflist.json"),
    });
  }, []);
  return (
    <>
      <div className=" mt-5 pt-5">
        {Tab && (
          <>
            <div className="turflistedprocess mt-5 pt-3">
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <h3 className="process_title pb-5">
                    Easy 3 step process to get listed on the Enturf App
                  </h3>
                </div>
                <div className="col-6 mt-3 list_process">
                  {/* <img
                    src={Form}
                    className="img-fluid mt-5 ms-5 personal"
                    alt="process"
                  ></img> */}
                  <div
                    className="Enturfadminwebsite_loader"
                    id="lottie"
                    ref={TurfListProcess}
                  ></div>
                </div>

                <div className="col-6 mt-3 steps_process">
                  <div className="steps">
                    <ol class="list-group vertical-steps mt-5 pt-5 ms-5">
                      <li class="list-group-item completed mt-5">
                        <span>Fill form with details</span>
                      </li>
                      <li class="list-group-item active">
                        <span>
                          Registration link along with details of personal
                          <br></br> guide will be sent via email
                        </span>
                      </li>
                      <li class="list-group-item">
                        <span>
                          Get Enlisted on Enturf App post Verification
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {Mobile && (
          <>
            <div className="turflistedprocess pt-3">
              <div className="row mt-5">
                <div className="col-12 text-center">
                  <h3 className="process_title pb-5">
                    Easy 3 step process to get listed on the Enturf App
                  </h3>
                </div>
                <div className="col-12 steps_process ms-3">
                  <div className="steps">
                    <ol class="list-group vertical-steps pt-5 ms-5">
                      <li class="list-group-item completed mt-5">
                        <span>Fill form with details</span>
                      </li>
                      <li class="list-group-item active">
                        <span>
                          Registration link along with details of personal
                          <br></br> guide will be sent via email
                        </span>
                      </li>
                      <li class="list-group-item">
                        <span>
                          Get Enlisted on Enturf App post Verification
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-12 mt-4 list_process ms-3">
                  <img
                    src={Form}
                    className="img-fluid mt-5 ms-5 personal"
                    alt="process"
                  ></img>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default TurfListedProcess;
