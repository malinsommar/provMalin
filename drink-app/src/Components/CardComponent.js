import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/CardComponent.css";
import LinkComponent from "./LinkComponent";

const CardComponent = ({ titlePic, imageSRC, to, titleLink }) => {
  return (
    <div>
      <LinkComponent to={to} title={"Name: " + titleLink} />
      <br />
      <img src={imageSRC} alt={titlePic}></img>
    </div>
  );
};

export default CardComponent;
