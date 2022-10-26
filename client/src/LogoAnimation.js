import React from "react";
import { gsap } from "gsap";
import * as ReactDOM from 'react-dom';


const { useEffect, useState } = React;
   
window.onload = function() {
function LogoAnimation() {
  
  const animate = ({ currentTarget }) => {
    gsap.from(currentTarget, { x: 700, y: 400, duration: 1 })
    gsap.to(currentTarget, { x: 700, y: 430, duration: 1, scale: 1.2 });
  };
  
  return (
    <div className="flex-row">
      <div className="logo" onPageLoad={animate}>
      </div>
    </div>
  );
}

ReactDOM.render(LogoAnimation(), document.querySelector("#root"));
}