import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/LinkComponent.css";

const LinkComponent = ({ title, to }) => {
  return (
    <NavLink className="navLink" to={to} activeClassName="isActive">
      {title}
    </NavLink>
  );
};

export default LinkComponent;
