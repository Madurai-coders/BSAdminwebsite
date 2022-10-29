import React, { useEffect, useRef} from "react";
import lottie from "lottie-web";

function Emails() {
  const Emails = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: Emails.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/Email.json"),
    });
  }, []);
  return (
    <>
      <div
        className="Enturflist_email"
        id="lottie"
        ref={Emails}
      ></div>
    </>
  );
}
export default Emails;
