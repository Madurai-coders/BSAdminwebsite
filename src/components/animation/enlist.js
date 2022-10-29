



import React, { useEffect, useRef} from "react";
import lottie from "lottie-web";

function Enlist() {
  const Enlisted = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: Enlisted.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      animationData: require("../EnturfAnimation/Enlist.json"),
    });
  }, []);
  return (
    <>
      <div
        className="Enturflist_verify"
        id="lottie"
        ref={Enlisted}
      ></div>
    </>
  );
}
export default Enlist;
