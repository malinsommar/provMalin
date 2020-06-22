import React from "react";
import "../Styling/CardComponent.css";
import LinkComponent from "./LinkComponent";

const CardComponent = ({ titlePic, imageSRC, to, titleLink }) => {
  return (
    <div className="cardDiv">
      <LinkComponent to={to} title={"Name: " + titleLink} />
      <br />
      <img className="picOfDrinks" src={imageSRC} alt={titlePic}></img>
    </div>
  );
};

export default CardComponent;
