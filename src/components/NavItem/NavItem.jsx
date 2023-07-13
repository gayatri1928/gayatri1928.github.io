/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const NavItem = ({ className, navItemClassName }) => {
  return (
    <div className={`nav-item ${className}`}>
      <div className={`text-wrapper ${navItemClassName}`}>Nav item 1</div>
    </div>
  );
};
