import "../../assets/CSS/smartturf.css";
import Card from "../Card_section/card";
import Card1_img from "../../assets/images/Card1.svg";
import Card2_img from "../../assets/images/Card2.svg";
import Card3_img from "../../assets/images/Card3.svg";
import Card4_img from "../../assets/images/Card4.svg";
import { useMediaQuery } from "react-responsive";

function SmartTurf() {
  return (
    <>
      <div className="smartturf mt-5">
        <div className="Sturf_bg text-center">
          <div className="Sturf_tit mt-5 pt-5">
            <h3 className="Sturf_title">SMART TURF</h3>
            <p className="Sturf_dscrptn mt-4">
              How to convert Your turf to an AI powerd video recording turf ?
            </p>
          </div>
          <div className="row justify-content-center mt-5">
            <div className=" cardimg col-lg-2 col-md-4 mt-4 px-0 me-5">
              <Card
                className="mt-5"
                img={Card1_img}
                description="Request for AI camera setup"
              ></Card>
            </div>
            <div className="cardsimg col-lg-2 col-md-4 px-0 me-5 mt-4">
              <Card
                className="mt-5"
                img={Card2_img}
                description="Our AI specialist will complete the camera installation setup in Your turf"
              ></Card>
            </div>
            <div className=" cardimg col-lg-2 col-md-4 px-0 me-5 mt-4">
              <Card
                className="mt-5"
                img={Card3_img}
                description="Get listed on the AI camera enabled turf section of the Enturf App"
              ></Card>
            </div>
            <div className="cardsimg col-lg-2 col-md-4 px-0 me-4 mt-4">
              <Card
                className="card_img mt-5"
                img={Card4_img}
                description="Increase revenue by upto 10 times"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SmartTurf;
