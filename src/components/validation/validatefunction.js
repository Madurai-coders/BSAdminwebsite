import React, { Component } from "react";
import Warning from "../../assets/images/warning.svg";
import "../../assets/CSS/validate.css";


export function validation_Name(value) {
  var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.toString().startsWith(" ")) {
        if (!format.test(value)) {
          if (value.length >= 2) {
            if (!value.endsWith(" ")) {
              return {
                class: "pass",
              };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="text-danger">
                      <img src={Warning} className="danger_img" alt="war"></img>
                      <span className="warning_txt ms-1">
                        some fields are incorrect
                      </span>
                    </small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="text-danger">
                    <img src={Warning} className="danger_img" alt="war"></img>
                    <span className="warning_txt ms-1">
                      some fields are incorrect
                    </span>
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="text-danger">
                  <img src={Warning} className="danger_img" alt="war"></img>
                  <span className="warning_txt ms-1">
                    some fields are incorrect
                  </span>
                </small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="text-danger">
                <img src={Warning} className="danger_img" alt="war"></img>
                <span className="warning_txt ms-1">
                  some fields are incorrect
                </span>
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="text-danger">
              <img src={Warning} className="danger_img" alt="war"></img>
              <span className="warning_txt ms-1">
                some fields are incorrect
              </span>
            </small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Sports(value) {
  var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.toString().startsWith(" ")) {
        if (value.length >= 2) {
          if (!format.test(value)) {
            if (value.length <= 10) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="text-danger">
                        <img
                          src={Warning}
                          className="danger_img"
                          alt="war"
                        ></img>
                        <span className="warning_txt ms-1">
                          some fields are incorrect
                        </span>
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="text-danger">
                      <img src={Warning} className="danger_img" alt="war"></img>
                      <span className="warning_txt ms-1">
                        some fields are incorrect
                      </span>
                    </small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="text-danger">
                    <img src={Warning} className="danger_img" alt="war"></img>
                    <span className="warning_txt ms-1">
                      some fields are incorrect
                    </span>
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="text-danger">
                  <img src={Warning} className="danger_img" alt="war"></img>
                  <span className="warning_txt ms-1">
                    some fields are incorrect
                  </span>
                </small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="text-danger">
                <img src={Warning} className="danger_img" alt="war"></img>
                <span className="warning_txt ms-1">
                  some fields are incorrect
                </span>
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="text-danger">
              <img src={Warning} className="danger_img" alt="war"></img>
              <span className="warning_txt ms-1">
                some fields are incorrect
              </span>
            </small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Phoneno(value) {
  var no_format = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.toString().startsWith(" ")) {
        if (value.length >= 1) {
          if (no_format.test(value)) {
            if (value.length <= 10) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="text-danger">
                        <img
                          src={Warning}
                          className="danger_img"
                          alt="war"
                        ></img>
                        <span className="warning_txt ms-1">
                          some fields are incorrect
                        </span>
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="text-danger">
                      <img src={Warning} className="danger_img" alt="war"></img>
                      <span className="warning_txt ms-1">
                        some fields are incorrect
                      </span>
                    </small>{" "}
                  </>
                ),
              };
          }

          return {
            class: "warn",
            msg: (
              <>
                <small class="text-danger">
                  <img src={Warning} className="danger_img" alt="war"></img>
                  <span className="warning_txt ms-1">
                    some fields are incorrect
                  </span>
                </small>{" "}
              </>
            ),
          };
        }

        return {
          class: "warn",
          msg: (
            <>
              <small class="text-danger">
                <img src={Warning} className="danger_img" alt="war"></img>
                <span className="warning_txt ms-1">
                  some fields are incorrect
                </span>
              </small>{" "}
            </>
          ),
        };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="text-danger">
                <img src={Warning} className="danger_img" alt="war"></img>
                <span className="warning_txt ms-1">
                  some fields are incorrect
                </span>
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="text-danger">
              <img src={Warning} className="danger_img" alt="war"></img>
              <span className="warning_txt ms-1">
                some fields are incorrect
              </span>
            </small>{" "}
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Email(value) {
  var email_format = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})+$/; //{3,4}is used to change the count of word after .com or net

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.toString().startsWith(" ")) {
        if (value.length >= 1) {
          if (email_format.test(value)) {
            if (!value.endsWith(" ")) {
              return {
                class: "pass",
              };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="text-danger">
                      <img src={Warning} className="danger_img" alt="war"></img>
                      <span className="warning_txt ms-1">
                        some fields are incorrect
                      </span>
                    </small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="text-danger">
                    <img src={Warning} className="danger_img" alt="war"></img>
                    <span className="warning_txt ms-1">
                      some fields are incorrect
                    </span>
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="text-danger">
                  <img src={Warning} className="danger_img" alt="war"></img>
                  <span className="warning_txt ms-1">
                    some fields are incorrect
                  </span>
                </small>
              </>
            ),
          };
      }

      return {
        class: "warn",
        msg: (
          <>
            <small class="text-danger">
              <img src={Warning} className="danger_img" alt="war"></img>
              <span className="warning_txt ms-1">
                some fields are incorrect
              </span>
            </small>
          </>
        ),
      };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="text-danger">
              <img src={Warning} className="danger_img" alt="war"></img>
              <span className="warning_txt ms-1">
                some fields are incorrect
              </span>
            </small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}
