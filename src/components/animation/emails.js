import React, { useEffect, useRef} from "react";
import lottie from "lottie-web";

function AdvantageEnturf() {
  const advanatge = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: advanatge.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/advantage.json"),
    });
  }, []);
  return (
    <>
      <div
        className="Enturfadminwebsite_advantage"
        id="lottie"
        ref={advanatge}
      ></div>
    </>
  );
}
export default AdvantageEnturf;
