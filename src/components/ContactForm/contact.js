import "../../assets/CSS/contact.css";
import React, { Component } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ContactCamera from "../../assets/images/camera.svg";
import AOS from "aos";

function Contact() {
  const [contactform, setcontactform] = useState({
    Name: "not_selected",
    Email: "not_selected",
    PhoneNo: "not_selected",
    SportsAvenue: "not_selected",
    City: "not_selected",
  });

  useEffect(() => {
    AOS.init();
  }, []);
  const Mobile = useMediaQuery({ maxWidth: 768 });
  const Tab = useMediaQuery({ minWidth: 769 });
  const [validatedata, setvalidatedata] = useState([]);

  const [className, setclassName] = useState("contactinput");
  const [warning, setwarning] = useState(false);
  const [success, setsuccess] = useState(false);

  function Form_submit() {
    var email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})+$/;
    var No = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (
      contactform.Name.length > 2 &&
      email.test(contactform.Email) &&
      No.test(contactform.PhoneNo) &&
      contactform.SportsAvenue.length < 10 &&
      contactform.City.length > 2
    ) {
      let array = validatedata;
      array.push({ ...contactform });
      console.log("contactform:", array);
      setvalidatedata([...array]);
      setwarning(false);
      setsuccess(true);
      setTimeout(function() {
        setsuccess(false);
      }, 2000);
      setcontactform({
        Name: "not_selected",
        Email: "not_selected",
        PhoneNo: "not_selected",
        SportsAvenue: "not_selected",
        City: "not_selected",
      });
    } else {
      setwarning(true);
    }
  }

  return (
    <>
      <div className="contactform" id="contact">
        {Tab && (
          <>
            <div className="row">
              <div className="col-1">
                <img
                  src={ContactCamera}
                  className="Ccamera"
                  alt="contact"
                ></img>
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

              <div
                className="col-xl-7 col-lg-6 col-md-6 mt-2"
                data-aos="zoom-in"
              >
                <div className="form ms-5" data-aos="zoom-in">
                  <div className="contact_tit ms-5">
                    <h2 className="contact_title ms-1">Contact Now</h2>
                  </div>

                  <div className="contact_list ms-4 me-5 ps-4">
                    <TextField
                      value={
                        contactform.Name != "not_selected"
                          ? contactform.Name
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          Name: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          Name: e.target.value,
                        })
                      }
                      sx={{ marginTop: 2 }}
                      fullWidth
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      className={className}
                      error={!contactform.Name}
                    />
                    <TextField
                      value={
                        contactform.Email != "not_selected"
                          ? contactform.Email
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          Email: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          Email: e.target.value,
                        })
                      }
                      sx={{ marginTop: 2 }}
                      fullWidth
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      className={className}
                      error={!contactform.Email}
                    />
                    <TextField
                      value={
                        contactform.PhoneNo != "not_selected"
                          ? contactform.PhoneNo
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          PhoneNo: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          PhoneNo: e.target.value,
                        })
                      }
                      sx={{ marginTop: 2 }}
                      fullWidth
                      id="standard-basic"
                      label="Phone"
                      variant="standard"
                      className={className}
                      error={!contactform.PhoneNo}
                    />
                    <TextField
                      value={
                        contactform.SportsAvenue != "not_selected"
                          ? contactform.SportsAvenue
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          SportsAvenue: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          SportsAvenue: e.target.value,
                        })
                      }
                      sx={{ marginTop: 2 }}
                      fullWidth
                      id="standard-basic"
                      label="Sports Avenue"
                      variant="standard"
                      className={className}
                      error={!contactform.SportsAvenue}
                    />
                    <TextField
                      value={
                        contactform.City != "not_selected"
                          ? contactform.City
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          City: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          City: e.target.value,
                        })
                      }
                      sx={{ marginTop: 2 }}
                      fullWidth
                      id="standard-basic"
                      label="City"
                      variant="standard"
                      className={className}
                      error={!contactform.City}
                    />
                    <div className="row justify-content-center">
                      <div className="col-12 text-center mb-5">
                        <button
                          type="button"
                          className="contact_submit btn btn-success mt-5"
                          onClick={Form_submit}
                        >
                          Submit Form
                        </button>
                      </div>
                      <div className="col-12 text-center">
                        {warning && (
                          <>
                            <div className="mb-4">
                              <button
                                type="button"
                                class="warning_btn btn btn-outline-danger"
                              >
                                Some fields are incorrect. Please check and try
                                again.
                              </button>
                            </div>
                          </>
                        )}
                        {success && (
                          <>
                            <div className="mb-4">
                              <button
                                type="button"
                                class="success_btn btn btn-outline-success"
                              >
                                Your Message Successfully Sent !
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {Mobile && (
          <>
            <div className="row justify-content-center">
              <div className="col-11 mb-5" data-aos="zoom-in">
                <div className="form" data-aos="zoom-in">
                  <div className="contact_tit ms-5">
                    <h2 className="contact_title ms-5 ps-2">Contact Now</h2>
                  </div>

                  <div className="contact_list me-5">
                    <TextField
                      value={
                        contactform.Name != "not_selected"
                          ? contactform.Name
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({ ...contactform, Name: e.target.value })
                      }
                      onChange={(e) =>
                        setcontactform({ ...contactform, Name: e.target.value })
                      }
                      fullWidth
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      error={!contactform.Name}
                    />
                    <TextField
                      value={
                        contactform.Email != "not_selected"
                          ? contactform.Email
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          Email: e.target.value,
                        })
                      }
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
                      error={!contactform.Email}
                    />
                    <TextField
                      value={
                        contactform.PhoneNo != "not_selected"
                          ? contactform.PhoneNo
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          PhoneNo: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          PhoneNo: e.target.value,
                        })
                      }
                      sx={{ marginTop: 3 }}
                      fullWidth
                      id="standard-basic"
                      label="Phone"
                      variant="standard"
                      className="mt-4"
                      error={!contactform.PhoneNo}
                    />
                    <TextField
                      value={
                        contactform.SportsAvenue != "not_selected"
                          ? contactform.SportsAvenue
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          SportsAvenue: e.target.value,
                        })
                      }
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
                      error={!contactform.SportsAvenue}
                    />
                    <TextField
                      value={
                        contactform.City != "not_selected"
                          ? contactform.City
                          : ""
                      }
                      onBlur={(e) =>
                        setcontactform({
                          ...contactform,
                          City: e.target.value,
                        })
                      }
                      onChange={(e) =>
                        setcontactform({
                          ...contactform,
                          City: e.target.value,
                        })
                      }
                      fullWidth
                      id="standard-basic"
                      label="City"
                      variant="standard"
                      className="mt-3 pt-1"
                      error={!contactform.City}
                    />
                    <div className="row justify-content-center">
                      <div className="col-12 text-center mt-3 mb-5">
                        <button
                          type="button"
                          className="contact_submit btn btn-success mt-5"
                          onClick={Form_submit}
                        >
                          Submit Form
                        </button>
                      </div>
                      <div className="col-12 text-center mt-3">
                        {warning && (
                          <>
                            <div className="">
                              <button
                                type="button"
                                class="warning_btn btn btn-outline-danger"
                              >
                                Some fields are incorrect. Please check and try
                                again.
                              </button>
                            </div>
                          </>
                        )}
                        {success && (
                          <>
                            <div className="">
                              <button
                                type="button"
                                class="success_btn btn btn-outline-success"
                              >
                                Your Message Successfully Sent !
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calls col-12 text-center">
                <div className="d-flex flex-column">
                  <div className="callus">
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
                    <h6 className="place">Madurai,Tamilnadu</h6>
                  </div>
                  <div className="mail mt-5 pt-5">
                    <LanguageIcon
                      className="phone"
                      sx={{ fontSize: 27, marginBottom: 1 }}
                    ></LanguageIcon>
                    <span className="call ms-2">Mail us</span>
                    <h6 className="email">enturf@example.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Contact;
