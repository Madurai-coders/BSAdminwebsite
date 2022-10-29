



import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function PersonalAnimation() {
  const PersonalDetails = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: PersonalDetails.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/Personal.json"),
    });
  }, []);
  return (
    <>
      <div
        className="Enturflist_loader"
        id="lottie"
        ref={PersonalDetails}
      ></div>
    </>
  );
}
export default PersonalAnimation;
