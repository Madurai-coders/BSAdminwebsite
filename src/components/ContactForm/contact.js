import "../../assets/CSS/contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ContactCamera from "../../assets/images/camera.svg";

import AOS from "aos";
function Contact() {
  const [contactform, setcontactform] = useState({
    Name: "",
    Email: "",
    PhoneNo: "",
    SportsAvenue: "",
    City: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);
  const Mobile = useMediaQuery({ maxWidth: 768 });
  const Tab = useMediaQuery({ minWidth: 769 });
  return (
    <>
      <div className="contactform">
        <div className="row">
          <div className="col-1">
            <img src={ContactCamera} alt="contact"></img>
          </div>
        </div>
        <div className="row mt-4">
          <div className="calls col-5 text-center mt-5">
            <div className="d-flex flex-column">
              <div className="callus ms-5">
                <PhoneIcon
                  className="phone"
                  sx={{ fontSize: 27, marginBottom: 1 }}
                ></PhoneIcon>
                <span className="call ms-2">Call us</span>
                <h6 className="no">(480) 555-0103</h6>
              </div>
              <div className="location ms-5  mt-5 pt-5">
                <FmdGoodIcon
                  className="phone"
                  sx={{ fontSize: 27, marginBottom: 1 }}
                ></FmdGoodIcon>
                <span className="call ms-2">Location</span>
                <h6 className="place">Madurai,Tamilnadu</h6>
              </div>
              <div className="mail ms-5 mt-5 pt-5">
                <LanguageIcon
                  className="phone"
                  sx={{ fontSize: 27, marginBottom: 1 }}
                ></LanguageIcon>
                <span className="call ms-2">Mail us</span>
                <h6 className="email">enturf@example.com</h6>
              </div>
            </div>
          </div>

          <div className="col-6 mt-2 form" data-aos="zoom-in">
            <div className="contact_tit ms-5">
              <h2 className="contact_title ms-4">Contact Now</h2>
            </div>
            <div className="contact_list ms-5 me-5 ps-4">
              <TextField
                value={contactform.Name}
                onChange={(e) =>
                  setcontactform({ ...contactform, Name: e.target.value })
                }
                fullWidth
                id="standard-basic"
                label="Name"
                variant="standard"
              />
              <TextField
                value={contactform.Email}
                onChange={(e) =>
                  setcontactform({
                    ...contactform,
                    Email: e.target.value,
                  })
                }
                sx={{ marginTop: 3 }}
                fullWidth
                id="standard-basic"
                label="Email"
                variant="standard"
                className="mt-4"
              />
              <TextField
                value={contactform.Phone}
                onChange={(e) =>
                  setcontactform({
                    ...contactform,
                    Phone: e.target.value,
                  })
                }
                sx={{ marginTop: 3 }}
                fullWidth
                id="standard-basic"
                label="Phone"
                variant="standard"
                className="mt-4"
              />
              <TextField
                value={contactform.SportsAvenue}
                onChange={(e) =>
                  setcontactform({
                    ...contactform,
                    SportsAvenue: e.target.value,
                  })
                }
                sx={{ marginTop: 3 }}
                fullWidth
                id="standard-basic"
                label="Sports Avenue"
                variant="standard"
                className="mt-4"
              />
              <TextField
                value={contactform.City}
                onChange={(e) =>
                  setcontactform({ ...contactform, City: e.target.value })
                }
                fullWidth
                id="standard-basic"
                label="City"
                variant="standard"
                className="mt-3 pt-1"
              />
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <button
                    type="button"
                    className="contact_submit btn btn-success mt-5"
                  >
                    Submit Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {Mobile && (
          <>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className=" form me-5" data-aos="zoom-in">
                  <div className="contact_tit ms-3">
                    <h2 className="contact_title ms-4">Contact Now</h2>
                  </div>
                  <div className="contact_list ms-3 me-5 ps-4">
                    <TextField
                      value={contactform.Name}
                      onChange={(e) =>
                        setcontactform({ ...contactform, Name: e.target.value })
                      }
                      fullWidth
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                    />
                    <TextField
                      value={contactform.Email}
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          Email: e.target.value,
                        })
                      }
                      sx={{ marginTop: 3 }}
                      fullWidth
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      className="mt-4"
                    />
                    <TextField
                      value={contactform.Phone}
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          Phone: e.target.value,
                        })
                      }
                      sx={{ marginTop: 3 }}
                      fullWidth
                      id="standard-basic"
                      label="Phone"
                      variant="standard"
                      className="mt-4"
                    />
                    <TextField
                      value={contactform.SportsAvenue}
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          SportsAvenue: e.target.value,
                        })
                      }
                      sx={{ marginTop: 3 }}
                      fullWidth
                      id="standard-basic"
                      label="Sports Avenue"
                      variant="standard"
                      className="mt-4"
                    />
                    <TextField
                      value={contactform.City}
                      onChange={(e) =>
                        setcontactform({ ...contactform, City: e.target.value })
                      }
                      fullWidth
                      id="standard-basic"
                      label="City"
                      variant="standard"
                      className="mt-3 pt-1"
                    />
                    <div className="row justify-content-center">
                      <div className="col-12 text-center">
                        <button
                          type="button"
                          className="contact_submit btn btn-success mt-5"
                        >
                          Submit Form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="calls col-12 d-flex flex-column text-center">
                <div className="callus me-4">
                  <PhoneIcon
                    className="phone"
                    sx={{ fontSize: 27, marginBottom: 1 }}
                  ></PhoneIcon>
                  <span className="call ms-2">Call us</span>
                  <h6 className="no">(480) 555-0103</h6>
                </div>
                <div className="location  mt-5 pt-5">
                  <FmdGoodIcon
                    className="phone"
                    sx={{ fontSize: 27, marginBottom: 1 }}
                  ></FmdGoodIcon>
                  <span className="call ms-2">Location</span>
                  <h6 className="place ms-3">Madurai,Tamilnadu</h6>
                </div>
                <div className="mail  mt-5 pt-5 me-4">
                  <LanguageIcon
                    className="phone"
                    sx={{ fontSize: 27, marginBottom: 1 }}
                  ></LanguageIcon>
                  <span className="call ms-2">Mail us</span>
                  <h6 className="email ms-5">enturf@example.com</h6>
                </div>
              </div>
            </div>
          </>
        )} */}
      </div>
    </>
  );
}

export default Contact;
