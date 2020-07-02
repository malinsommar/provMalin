import React from "react";
import "../Styling/CardComponent.css";

const CardComponent = ({ titlePic, imageSRC, toggle, titleLink }) => {
  return (
    <div className="cardDiv">
      <button id="cardButton" onClick={toggle}>
        {"Name: " + titleLink}
      </button>
      <br />
      <img className="picOfDrinks" src={imageSRC} alt={titlePic}></img>
    </div>
  );
};

export default CardComponent;
