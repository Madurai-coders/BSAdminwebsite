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
import VisibilitySensor from "react-visibility-sensor";
import {
  validation_Email,
  validation_Name,
  validation_Phoneno,
  validation_Sports,
} from "../validation/validatefunction";
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

  function Form_submit() {
    if (
      validation_Name(contactform.Name).class === "pass" &&
      validation_Email(contactform.Email).class === "pass" &&
      validation_Phoneno(contactform.PhoneNo).class === "pass" &&
      validation_Sports(contactform.SportsAvenue).class === "pass" &&
      validation_Name(contactform.City).class === "pass"
    ) {
      let array = validatedata;
      array.push({ ...contactform });
      console.log("contactform:", array);
      setvalidatedata([...array]);

      setcontactform({
        Name: "not_selected",
        Email: "not_selected",
        PhoneNo: "not_selected",
        SportsAvenue: "not_selected",
        City: "not_selected",
      });
    } else {
      setclassName("contactinput_error");
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
                  {validation_Name(contactform.Name).msg}
                  {validation_Email(contactform.Email).msg}
                  {validation_Phoneno(contactform.PhoneNo).msg}
                  {validation_Sports(contactform.SportsAvenue).msg}
                  {validation_Name(contactform.City).msg}

                  <div className="contact_list ms-4 me-5 ps-4">
                    <TextField
                      value={
                        contactform.Name != "not_selected"
                          ? contactform.Name
                          : ""
                      }
                      onKeyUp={validation_Name}
                      onBlur={(e) =>
                        setcontactform({ ...contactform, Name: e.target.value })
                      }
                      onChange={(e) =>
                        setcontactform({ ...contactform, Name: e.target.value })
                      }
                      fullWidth
                      id="NAME"
                      label="Name"
                      variant="standard"
                      className={className}
                      variant="standard"
                    />

                    <TextField
                      value={
                        contactform.Email != "not_selected"
                          ? contactform.Email
                          : ""
                      }
                      onKeyUp={validation_Email}
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
                    />
                    <TextField
                      value={
                        contactform.PhoneNo != "not_selected"
                          ? contactform.PhoneNo
                          : ""
                      }
                      onKeyUp={validation_Phoneno}
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
                    />
                    <TextField
                      value={
                        contactform.SportsAvenue != "not_selected"
                          ? contactform.SportsAvenue
                          : ""
                      }
                      onKeyUp={validation_Sports}
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
                    />
                    <TextField
                      value={
                        contactform.City != "not_selected"
                          ? contactform.City
                          : ""
                      }
                      onKeyUp={validation_Name}
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
                    />
                    <div className="row justify-content-center">
                      <div className="col-12 text-center">
                        <button
                          type="button"
                          className="contact_submit btn btn-success mt-5"
                          onClick={Form_submit}
                        >
                          Submit Form
                        </button>
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
              <div className="col-11" data-aos="zoom-in">
                <div className="form ms-5" data-aos="zoom-in">
                  <div className="contact_tit ms-5">
                    <h2 className="contact_title ms-5 ps-2">Contact Now</h2>
                  </div>
                  {validation_Name(contactform.Name).msg}
                  {validation_Email(contactform.Email).msg}
                  {validation_Phoneno(contactform.PhoneNo).msg}
                  {validation_Sports(contactform.SportsAvenue).msg}
                  {validation_Name(contactform.City).msg}
                  <div className="contact_list me-5">
                    <TextField
                      value={
                        contactform.Name != "not_selected"
                          ? contactform.Name
                          : ""
                      }
                      onKeyUp={validation_Name}
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
                    />
                    <TextField
                      value={
                        contactform.Email != "not_selected"
                          ? contactform.Email
                          : ""
                      }
                      onKeyUp={validation_Email}
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
                    />
                    <TextField
                      value={
                        contactform.PhoneNo != "not_selected"
                          ? contactform.PhoneNo
                          : ""
                      }
                      onKeyUp={validation_Phoneno}
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
                    />
                    <TextField
                      value={
                        contactform.SportsAvenue != "not_selected"
                          ? contactform.SportsAvenue
                          : ""
                      }
                      onKeyUp={validation_Sports}
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
                    />
                    <TextField
                      value={
                        contactform.City != "not_selected"
                          ? contactform.City
                          : ""
                      }
                      onKeyUp={validation_Name}
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
                    />
                    <div className="row justify-content-center">
                      <div className="col-12 text-center mt-3">
                        <button
                          type="button"
                          className="contact_submit btn btn-success mt-5"
                          onClick={Form_submit}
                        >
                          Submit Form
                        </button>
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
