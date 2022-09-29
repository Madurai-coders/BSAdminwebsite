import "../../assets/CSS/about.css";
import AboutEnturf from '../../assets/images/About.svg';
function About() {
  return (
    <>
      <div className="container mt-5 pt-5 about">
        <div className="aboutenturf mt-5">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <div className="about_tit mt-5 pt-5">
                <h1 className="about_title">ABOUT ENTURF</h1>
              </div>
              <div className="about_des mt-5">
                <p className="about_dsrptn">
                  Your all in one turf Management App that<br></br> converts normal turfs
                  to super powered AI<br></br> enabled turfs.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  mt-5">
              <img src={AboutEnturf} alt="about" className="img-fluid ms-4"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
