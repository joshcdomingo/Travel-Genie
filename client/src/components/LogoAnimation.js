import React from "react";
import { gsap } from "gsap";
import * as ReactDOM from 'react-dom';
import "../index.scss";
   
function LogoAnimation() {
  
  const animateGenie = ({ currentTarget }) => {
    gsap.timeline()
        .from("#genie", { yPercent: 20, duration: 1, opacity: -1 })
        .to("#genie", { duration: 1.5, opacity: 1, delay: 2, scale: 1, ease: "in" });
  };
  
  return (
    <div className="flex-row">
      <div className="logo">
        <img id="genie" src="./images/genie.png" alt="genie" />
        <img id="lamp" src="./images/lamp.png" alt="lamp" onClick={animateGenie} />
        <p id="animationText">Click the lamp to make the genie appear!</p>
      </div>
    </div>
  );
}

ReactDOM.render(LogoAnimation(), document.querySelector("#root"));

export default LogoAnimation;