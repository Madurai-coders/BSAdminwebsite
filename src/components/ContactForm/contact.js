import "../../assets/CSS/contact.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import React, { useState,useEffect } from "react";
import AOS from "aos";
function Contact() {

  const [contactform,setcontactform]= useState({
    Name:"",
    Email:"",
    PhoneNo:"",
    SportsAvenue:"",
    City:""
  })

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="contactform">
        <div className="row justify-content-end">
          <div className="calls col-lg-3 col-md-3 col-sm-4 col-8 d-flex flex-column">
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
            <div className="mail  mt-5 pt-5">
              <LanguageIcon
                className="phone"
                sx={{ fontSize: 27, marginBottom: 1 }}
              ></LanguageIcon>
              <span className="call ms-2">Mail us</span>
              <h6 className="email">enturf@example.com</h6>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-sm-7 col-12 ">
            <div className=" form me-5" data-aos="zoom-in">
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
                    setcontactform({ ...contactform, Email: e.target.value })
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
                    setcontactform({ ...contactform, Phone: e.target.value })
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
                    setcontactform({ ...contactform, SportsAvenue: e.target.value })
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
      </div>
    </>
  );
}

export default Contact;
