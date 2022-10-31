import "../../assets/CSS/advantage.css";
import { useMediaQuery } from "react-responsive";
import Rectangle from "../../assets/images/Rectangle.svg";
import React, { useEffect } from "react";
import AOS from "aos";

function Advantage() {
  const bigscreen = useMediaQuery({ minWidth: 990 });
  const Mobile = useMediaQuery({ maxWidth: 990 });
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="advantageofenturf mt-5 ad">
        <div className="row mt-5">
          <div className="col-12 text-center mt-5">
            <h1 className="advantage_title mt-5 pt-5">ADVANTAGE OF ENTURF</h1>
          </div>
        </div>
        {bigscreen && (
          <>
            <div className="row justify-content-center mt-5">
              <div
                className="col-lg-3 
               mt-5 d-flex flex-row"
              >
                <div
                  className="increase text-center"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">01</span>
                  </div>
                  <h5 className="advantage mt-3 pt-2">
                    Increase revenue upto 10x
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  mt-5 d-flex flex-row">
                <div
                  className="increase ms-4 text-center"
                  data-aos="flip-up"
                  data-aos-duration="1100"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">02</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2">
                    Ahead of competitors using<br></br> AI technology
                  </h5>
                </div>
              </div>

              <div className="col-lg-3  mt-5 d-flex flex-row me-5">
                <div
                  className="increase ms-5 text-center"
                  data-aos="flip-up"
                  data-aos-duration="1400"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">03</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2">
                    Instant access to millions of<br></br> sporters
                  </h5>
                </div>
              </div>

              <div className="col-lg-3 d-flex flex-row mt-5 pt-5">
                <div
                  className="increase text-center"
                  data-aos="flip-up"
                  data-aos-duration="1700"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">04</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2">
                    Turf,booking & user<br></br> management all in one app
                  </h5>
                </div>
              </div>
              <div className="col-lg-3 mt-5 d-flex flex-row pt-5 me-5">
                <div
                  className="increase ms-4 text-center"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">05</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2 ms-1">
                    No additional effort needed,<br></br>just register
                  </h5>
                </div>
              </div>
            </div>
          </>
        )}

        {Mobile && (
          <>
            <div className="row justify-content-center">
              <div className="col-md-5 col-10 mt-5 d-flex flex-row">
                <div
                  className="increase text-center"
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">01</span>
                  </div>
                  <h5 className="advantage mt-3 pt-2">
                    Increase revenue upto 10x
                  </h5>
                </div>
              </div>

              <div className="col-md-5 col-10 mt-5 d-flex flex-row">
                <div
                  className="increase  text-center"
                  data-aos="flip-up"
                  data-aos-duration="1100"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">02</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2">
                    Ahead of competitors using<br></br> AI technology
                  </h5>
                </div>
              </div>

              <div className="col-md-5 col-10 mt-5 d-flex flex-row">
                <div
                  className="increase text-center"
                  data-aos="flip-up"
                  data-aos-duration="1400"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">03</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2">
                    Instant access to millions of<br></br> sporters
                  </h5>
                </div>
              </div>

              <div className="col-md-5 col-10 mt-5 d-flex flex-row">
                <div
                  className="increase text-center"
                  data-aos="flip-up"
                  data-aos-duration="1700"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">04</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2">
                    Turf,booking & user<br></br> management all in one app
                  </h5>
                </div>
              </div>
              <div className="col-md-5 col-10 mt-5 d-flex flex-row">
                <div
                  className="increase text-center"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <div className="points d-flex flex-row mt-1">
                    <span className="num">05</span>
                  </div>
                  <h5 className="advantage mt-2 pt-2 ms-1">
                    No additional effort needed,<br></br>just register
                  </h5>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Advantage;
