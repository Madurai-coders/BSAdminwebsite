import "../../assets/CSS/smartturf.css";
import Card from "../Card_section/card";
import Card1_img from "../../assets/images/Card1.svg";
import Card2_img from "../../assets/images/Card2.svg";
import Card3_img from "../../assets/images/Card3.svg";
import Card4_img from "../../assets/images/Card4.svg";
import { useMediaQuery } from "react-responsive";

function SmartTurf() {
  const Mobile = useMediaQuery({ maxWidth: 991 });
  const Tab = useMediaQuery({ minWidth: 991 });
  return (
    <>
      <div className="smartturf mt-5">
        {Tab && (
          <>
            <div className="Sturf_bg text-center">
              <div className="Sturf_tit mt-5 pt-5">
                <h3 className="Sturf_title">SMART TURF</h3>
                <p className="Sturf_dscrptn mt-4">
                  How to convert Your turf to an AI powerd video recording turf
                  ?
                </p>
              </div>
              <div className="row justify-content-center cards mt-5">
                <div className="col-3 text-center mt-4">
                  <Card
                    img={Card1_img}
                    description="Request for AI camera setup"
                  ></Card>
                </div>
                <div className="col-3 text-center mt-4">
                  <Card
                    img={Card2_img}
                    description="Our AI specialist will complete the camera installation setup in Your turf"
                  ></Card>
                </div>
                <div className="col-3 text-center mt-4">
                  <Card
                    img={Card3_img}
                    description="Get listed on the AI camera enabled turf section of the Enturf App"
                  ></Card>
                </div>
                <div className="col-3 text-center mt-4">
                  <Card
                    img={Card4_img}
                    description="Increase revenue by upto 10 times"
                  ></Card>
                </div>
              </div>
            </div>
          </>
        )}
        {Mobile && (
          <>
            <div className="Sturf_cards pb-5">
              <div className="row ">
                <div className="col-12 text-center">
                  <h3 className="Sturf_title">SMART TURF</h3>
                  <p className="Sturf_dscrptn mt-4">
                    How to convert Your turf to an AI powerd video recording
                    turf ?
                  </p>
                </div>
              </div>
              <div className="row justify-content-center cards mt-5">
                <div className="col-md-5 col-sm-12 text-center mt-4">
                  <Card
                    img={Card1_img}
                    description="Request for AI camera setup"
                  ></Card>
                </div>
                <div className="col-md-5 col-sm-12 text-center mt-4">
                  <Card
                    img={Card2_img}
                    description="Our AI specialist will complete the camera installation setup in Your turf"
                  ></Card>
                </div>
                <div className="col-md-5 col-sm-12 text-center mt-4">
                  <Card
                    img={Card3_img}
                    description="Get listed on the AI camera enabled turf section of the Enturf App"
                  ></Card>
                </div>
                <div className="col-md-5 col-sm-12 text-center mt-4">
                  <Card
                    img={Card4_img}
                    description="Increase revenue by upto 10 times"
                  ></Card>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default SmartTurf;
