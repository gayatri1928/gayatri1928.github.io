import React from "react";
import { NavItem } from "../../components/NavItem";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="desktop-wrapper">
        <div className="desktop">
          <NavItem className="nav-item-instance" navItemClassName="design-component-instance-node" />
          <NavItem className="nav-item-2" navItemClassName="design-component-instance-node" />
          <NavItem className="nav-item-3" navItemClassName="design-component-instance-node" />
          <NavItem className="nav-item-4" navItemClassName="design-component-instance-node" />
          <img className="element" alt="Element" src="/img/096b4915-61e2-4bcf-9920-43631ca62231-1.png" />
          <div className="overlap-group">
            <img className="untitled-design" alt="Untitled design" src="/img/untitled-design-2-1.png" />
            <h1 className="offering-innovative">
              Offering Innovative <br />
              Automation Solutions for Labs of all Sizes
            </h1>
            <p className="your-trusted-partner">Your trusted partner&nbsp;&nbsp;for automation development</p>
          </div>
        </div>
      </div>
    </div>
  );
};
